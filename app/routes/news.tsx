import type { Route } from "./+types/news";
import { Link, NavLink } from "react-router";
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

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tin tức - POSO POS" },
    { name: "description", content: "Tin tức và cập nhật mới nhất về POSO POS" },
  ];
}

export default function News() {
  const newsItems = newsData
    .filter((item) => item.status === "publish")
    .map((item) => ({
      ...item,
      formattedDate: formatDate(item.date),
      categoryName: getCategoryName(item.categories[0] || 0),
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
                    {item.title.rendered}
                  </NavLink>
                  <p className="text-poso-gray opacity-80 leading-relaxed mb-4">
                    {item.excerpt.rendered.replace(/<[^>]*>/g, "")}
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
