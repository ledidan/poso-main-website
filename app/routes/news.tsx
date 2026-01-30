import type { Route } from "./+types/news";
import { Link, NavLink } from "react-router";
import { PageHero } from "../components/PageHero";
import { SiteHeader } from "../components/SiteHeader";
import { PageFooter } from "../components/PageFooter";
import {
  fetchPosts,
  fetchCategories,
  formatDate,
  getCategoryName,
  decodeHtmlEntities,
  stripHtml,
  type WordPressPost,
  type WordPressCategory,
} from "../lib/wordpress-api";

export async function loader({}: Route.LoaderArgs) {
  try {
    const [posts, categories] = await Promise.all([
      fetchPosts(),
      fetchCategories(),
    ]);

    return {
      posts,
      categories,
    };
  } catch (error) {
    console.error("Error loading news:", error);
    return {
      posts: [] as WordPressPost[],
      categories: [] as WordPressCategory[],
    };
  }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tin tức - POSO POS" },
    { name: "description", content: "Tin tức và cập nhật mới nhất về POSO POS" },
  ];
}

export default function News({ loaderData }: Route.ComponentProps) {
  const { posts, categories } = loaderData;

  const newsItems = posts.map((item) => ({
    ...item,
    formattedDate: formatDate(item.date),
    categoryName: getCategoryName(item.categories[0] || 0, categories),
    decodedTitle: decodeHtmlEntities(item.title.rendered),
    featuredImage: item.jetpack_featured_media_url || null,
  }));

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      {/* Hero Section */}
      <PageHero
        title="Tin tức & Cập nhật"
        subtitle="Cập nhật mới nhất về POSO POS, tính năng mới, và các câu chuyện thành công"
      />

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              > 
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.featuredImage || "/image_placeholder.png"}
                      alt={item.decodedTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-poso-primary bg-poso-primary/10 px-3 py-1 rounded-full">
                      {item.categoryName}
                    </span>
                    <span className=" text-poso-gray opacity-70">
                      {item.formattedDate}
                    </span>
                  </div>
                  <NavLink to={`/news/${item.id}`} className="cursor-pointer text-xl font-bold text-poso-dark mb-3 hover:text-poso-primary transition-colors">
                    {item.decodedTitle}
                  </NavLink>
                  <p className="text-poso-gray opacity-80 leading-relaxed mb-4">
                    {stripHtml(item.excerpt.rendered).substring(0, 150)}...
                  </p>
                  <Link
                    to={`/news/${item.id}`}
                    className="text-poso-primary font-semibold hover:underline inline-flex items-center"
                  >
                    Đọc thêm →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </div>
  );
}
