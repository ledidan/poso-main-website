import type { Route } from "./+types/news.$id";
import { Link, useParams } from "react-router";
import { PageHero } from "../components/PageHero";
import { SiteHeader } from "../components/SiteHeader";
import { PageFooter } from "../components/PageFooter";
import newsData from "../data/news.json";
import categoriesData from "../data/categories.json";

type NewsItem = typeof newsData[number];
type Category = typeof categoriesData[number];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

function getCategoryName(categoryId: number): string {
  const category = categoriesData.find((cat) => cat.id === categoryId);
  return category?.name || "Khác";
}

function formatViews(views: number): string {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
}

export function meta({ params }: Route.MetaArgs) {
  const postId = parseInt(params.id || "0", 10);
  const post = newsData.find((item) => item.id === postId && item.status === "publish");

  if (!post) {
    return [
      { title: "Không tìm thấy - POSO POS" },
      { name: "description", content: "Bài viết không tồn tại" },
    ];
  }

  const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 160);

  return [
    { title: `${post.title.rendered} - POSO POS` },
    { name: "description", content: excerpt },
  ];
}

export default function NewsDetail() {
  const { id } = useParams();
  const postId = parseInt(id || "0", 10);

  const post = newsData.find((item) => item.id === postId && item.status === "publish");

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

  const categoryName = getCategoryName(post.categories[0] || 0);
  const formattedDate = formatDate(post.date);
  const formattedViews = formatViews(post.views || 0);

  // Get related posts (same category, exclude current post)
  const relatedPosts = newsData
    .filter(
      (item) =>
        item.id !== post.id &&
        item.status === "publish" &&
        item.categories.some((catId) => post.categories.includes(catId))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      {/* Hero Section */}
      <PageHero
        title={post.title.rendered}
        subtitle={`${categoryName} • ${formattedDate} • ${formattedViews} lượt xem`}
      />

      {/* Article Content */}
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="text-sm font-semibold text-poso-primary bg-poso-primary/10 px-3 py-1 rounded-full">
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
                      relatedPost.categories[0] || 0
                    );
                    const relatedFormattedDate = formatDate(relatedPost.date);
                    return (
                      <Link
                        key={relatedPost.id}
                        to={`/news/${relatedPost.id}`}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow block"
                      >
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-semibold text-poso-primary bg-poso-primary/10 px-2 py-1 rounded-full">
                              {relatedCategoryName}
                            </span>
                            <span className="text-xs text-poso-gray opacity-70">
                              {relatedFormattedDate}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-poso-dark mb-2 line-clamp-2 hover:text-poso-primary transition-colors">
                            {relatedPost.title.rendered}
                          </h3>
                          <p className="text-sm text-poso-gray opacity-80 line-clamp-2">
                            {relatedPost.excerpt.rendered.replace(/<[^>]*>/g, "")}
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
