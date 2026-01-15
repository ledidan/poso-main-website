import { Link } from "react-router";
import newsData from "../data/news.json";
import categoriesData from "../data/categories.json";

type NewsItem = typeof newsData[number];

function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day}/${month}/${date.getFullYear()}`;
}

function formatViews(views: number): string {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
}

export function HomeNewsSection() {
  const newsItems = newsData
    .filter((item) => item.status === "publish")
    .slice(0, 4)
    .map((item) => ({
      id: item.id,
      title: item.title.rendered,
      date: formatDateShort(item.date),
      views: formatViews(item.views || 0),
    }));

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-poso-dark text-center mb-12">
          Tin Tức
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newsItems.map((news) => (
            <Link
              key={news.id}
              to={`/news/${news.id}`}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow block"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Image</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-poso-dark mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-poso-gray">
                  <span>{news.date}</span>
                  <span>{news.views} lượt xem</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/news"
            className="text-poso-primary font-semibold hover:underline"
          >
            Xem thêm →
          </Link>
        </div>
      </div>
    </section>
  );
}

