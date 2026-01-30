import type { Route } from "./+types/news.$id";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { SiteHeader } from "../components/SiteHeader";
import { PageFooter } from "../components/PageFooter";
import {
  fetchPostById,
  fetchPosts,
  fetchCategories,
  formatDate,
  getCategoryName,
  stripHtml,
  decodeHtmlEntities,
  type WordPressPost,
  type WordPressCategory,
} from "../lib/wordpress-api";

export async function loader({ params }: Route.LoaderArgs) {
  const postId = params.id;
  
  if (!postId) {
    return {
      post: null,
      relatedPosts: [] as WordPressPost[],
      categories: [] as WordPressCategory[],
    };
  }

  try {
    const [post, allPosts, categories] = await Promise.all([
      fetchPostById(postId),
      fetchPosts(),
      fetchCategories(),
    ]);

    if (!post) {
      return {
        post: null,
        relatedPosts: [] as WordPressPost[],
        categories,
      };
    }

    // Get related posts (same category, exclude current post)
    const relatedPosts = allPosts
      .filter(
        (item) =>
          item.id !== post.id &&
          item.categories.some((catId) => post.categories.includes(catId))
      )
      .slice(0, 3);

    return {
      post,
      relatedPosts,
      categories,
    };
  } catch (error) {
    console.error("Error loading post:", error);
    return {
      post: null,
      relatedPosts: [] as WordPressPost[],
      categories: [] as WordPressCategory[],
    };
  }
}

export function meta({ loaderData }: Route.MetaArgs) {
  const { post } = loaderData;

  if (!post) {
    return [
      { title: "Không tìm thấy - POSO POS" },
      { name: "description", content: "Bài viết không tồn tại" },
    ];
  }

  const excerpt = stripHtml(post.excerpt.rendered).substring(0, 160);
  const decodedTitle = decodeHtmlEntities(post.title.rendered);

  return [
    { title: `${decodedTitle} - POSO POS` },
    { name: "description", content: excerpt },
  ];
}

export default function NewsDetail({ loaderData }: Route.ComponentProps) {
  const { post, relatedPosts, categories } = loaderData;

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <SiteHeader variant="page" />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-poso-dark mb-4">Không tìm thấy bài viết</h1>
          <p className="text-poso-gray mb-8">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link
            to="/news"
            className="bg-poso-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-poso-primary-hover transition-colors inline-block"
          >
            Quay lại trang tin tức
          </Link>
        </div>
        <PageFooter />
      </div>
    );
  }

  const categoryName = getCategoryName(post.categories[0] || 0, categories);
  const formattedDate = formatDate(post.date);
  const decodedTitle = decodeHtmlEntities(post.title.rendered);
  const featuredImage = post.jetpack_featured_media_url || null;

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      {/* Hero Section */}
      <PageHero
        title={decodedTitle}
        subtitle={`${categoryName} • ${formattedDate}`}
      />

      {/* Article Content */}
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            {featuredImage && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={featuredImage}
                  alt={decodedTitle}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Category Badge */}
            <div className="mb-6">
              <span className=" font-semibold text-poso-primary bg-poso-primary/10 px-3 py-1 rounded-full">
                {categoryName}
              </span>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-poso-dark prose-headings:font-bold prose-p:text-poso-gray prose-p:leading-relaxed prose-ul:text-poso-gray prose-li:text-poso-gray prose-strong:text-poso-dark prose-a:text-poso-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* Back to News */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                to="/news"
                className="text-poso-primary font-semibold hover:underline inline-flex items-center"
              >
                ← Quay lại trang tin tức
              </Link>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-poso-dark mb-8">
                  Bài viết liên quan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => {
                    const relatedCategoryName = getCategoryName(
                      relatedPost.categories[0] || 0,
                      categories
                    );
                    const relatedFormattedDate = formatDate(relatedPost.date);
                    const relatedDecodedTitle = decodeHtmlEntities(relatedPost.title.rendered);
                    const relatedFeaturedImage = relatedPost.jetpack_featured_media_url || null;
                    return (
                      <Link
                        key={relatedPost.id}
                        to={`/news/${relatedPost.id}`}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow block"
                      >
                        {relatedFeaturedImage && (
                          <div className="h-40 overflow-hidden">
                            <img
                              src={relatedFeaturedImage}
                              alt={relatedDecodedTitle}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className=" font-semibold text-poso-primary bg-poso-primary/10 px-2 py-1 rounded-full">
                              {relatedCategoryName}
                            </span>
                            <span className=" text-poso-gray opacity-70">
                              {relatedFormattedDate}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-poso-dark mb-2 line-clamp-2 hover:text-poso-primary transition-colors">
                            {relatedDecodedTitle}
                          </h3>
                          <p className=" text-poso-gray opacity-80 line-clamp-2">
                            {stripHtml(relatedPost.excerpt.rendered)}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Footer */}
      <PageFooter />
    </div>
  );
}
