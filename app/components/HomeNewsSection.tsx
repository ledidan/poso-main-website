import { Link } from "react-router";
import { formatDateShort, decodeHtmlEntities, type WordPressPost } from "../lib/wordpress-api";

interface HomeNewsSectionProps {
  posts: WordPressPost[];
}

export function HomeNewsSection({ posts }: HomeNewsSectionProps) {
  const newsItems = posts.map((item) => ({
    id: item.id,
    title: decodeHtmlEntities(item.title.rendered),
    date: formatDateShort(item.date),
    featuredImage: item.jetpack_featured_media_url || null,
  }));

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-poso-dark text-center mb-12">
          Tin Tức
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newsItems.length > 0 ? (
            newsItems.map((news) => (
              <Link
                key={news.id}
                to={`/news/${news.id}`}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow block"
              >
                {news.featuredImage ? (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={news.featuredImage}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image</span>
                  </div>
                )}
              <div className="p-4">
                <h3 className="font-semibold text-poso-dark mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <div className="flex items-center justify-between  text-poso-gray">
                  <span>{news.date}</span>
                </div>
              </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-poso-gray py-8">
              Chưa có tin tức nào
            </div>
          )}
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

