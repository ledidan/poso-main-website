import { Link } from "react-router";

export function HomeNewsSection() {
  const newsItems = [
    {
      title: "POSO Cập Nhật Chính Sách Bán Hàng",
      date: "15/12/2024",
      views: "1.2K",
    },
    {
      title: "POSO Cập Nhật Email Hỗ Trợ Quản",
      date: "10/12/2024",
      views: "890",
    },
    {
      title: "POSO Chúc Mừng Năm Mới",
      date: "01/01/2024",
      views: "2.5K",
    },
    {
      title: "Chương trình khuyến mãi tháng 02 năm 2021",
      date: "01/02/2021",
      views: "1.8K",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-poso-dark text-center mb-12">
          Tin Tức
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newsItems.map((news, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
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
            </article>
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

