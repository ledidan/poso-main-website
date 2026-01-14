import type { Route } from "./+types/news";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { SiteHeader } from "../components/SiteHeader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tin tức - POSO POS" },
    { name: "description", content: "Tin tức và cập nhật mới nhất về POSO POS" },
  ];
}

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "POSO POS ra mắt tính năng quản lý đa chi nhánh",
      excerpt: "Giờ đây bạn có thể quản lý nhiều chi nhánh từ một tài khoản duy nhất, theo dõi doanh thu và hoạt động của từng chi nhánh trong thời gian thực.",
      date: "15 Tháng 12, 2024",
      category: "Cập nhật",
    },
    {
      id: 2,
      title: "Hướng dẫn tối ưu hóa doanh thu với POSO POS",
      excerpt: "Khám phá các mẹo và chiến lược để tăng doanh thu nhà hàng của bạn bằng cách sử dụng các tính năng báo cáo và phân tích của POSO POS.",
      date: "10 Tháng 12, 2024",
      category: "Hướng dẫn",
    },
    {
      id: 3,
      title: "POSO POS tích hợp với các cổng thanh toán mới",
      excerpt: "Chúng tôi vui mừng thông báo về việc tích hợp với thêm nhiều cổng thanh toán phổ biến, giúp khách hàng thanh toán dễ dàng hơn.",
      date: "5 Tháng 12, 2024",
      category: "Cập nhật",
    },
    {
      id: 4,
      title: "Case study: Quán cafe tăng 30% doanh thu nhờ POSO POS",
      excerpt: "Câu chuyện thành công của một quán cafe tại TP.HCM đã tăng doanh thu đáng kể sau khi triển khai POSO POS.",
      date: "28 Tháng 11, 2024",
      category: "Case study",
    },
    {
      id: 5,
        title: "Bảo mật dữ liệu: Ưu tiên hàng đầu tại POSO POS",
      excerpt: "Tìm hiểu về các biện pháp bảo mật mà chúng tôi áp dụng để bảo vệ dữ liệu của khách hàng.",
      date: "20 Tháng 11, 2024",
      category: "Bảo mật",
    },
    {
      id: 6,
      title: "POSO POS phiên bản 2.0 - Nhiều cải tiến mới",
      excerpt: "Ra mắt phiên bản 2.0 với giao diện mới, hiệu năng tốt hơn và nhiều tính năng được yêu cầu bởi người dùng.",
      date: "15 Tháng 11, 2024",
      category: "Cập nhật",
    },
  ];

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
                    <span className="text-sm font-semibold text-[#fa7313] bg-[#fa7313]/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-[#4f5664] opacity-70">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#191b1e] mb-3 hover:text-[#fa7313] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#4f5664] opacity-80 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <Link
                    to={`/news/${item.id}`}
                    className="text-[#fa7313] font-semibold hover:underline inline-flex items-center"
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
      <footer className="bg-[#191b1e] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">POSO POS</h4>
              <p className="text-gray-400 text-sm">
                Giải pháp quản lý nhà hàng hàng đầu
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Sản phẩm</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/products" className="hover:text-white transition-colors">Sản phẩm</Link></li>
                <li><Link to="/features" className="hover:text-white transition-colors">Tính năng</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Hỗ trợ</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Liên hệ</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Công ty</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">Giới thiệu</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">Tin tức</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 POSO POS. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
