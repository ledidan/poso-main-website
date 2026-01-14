import type { Route } from "./+types/products";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { SiteHeader } from "../components/SiteHeader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sản phẩm - POSO POS" },
    { name: "description", content: "Khám phá các sản phẩm POSO POS - Giải pháp quản lý nhà hàng toàn diện" },
  ];
}

export default function Products() {
  const products = [
    {
      id: 1,
      name: "POSO POS",
      description: "Hệ thống điểm bán hàng chuyên nghiệp cho nhà hàng, quán cafe, bar",
      features: ["Bán hàng nhanh chóng", "Quản lý đơn hàng", "In hóa đơn", "Báo cáo doanh thu"],
      price: "Liên hệ",
    },
    {
      id: 2,
      name: "POSO Manager",
      description: "Phần mềm quản lý nhà hàng toàn diện từ xa",
      features: ["Quản lý từ xa", "Báo cáo chi tiết", "Quản lý nhân viên", "Theo dõi KPI"],
      price: "Liên hệ",
    },
    {
      id: 3,
      name: "POSO Staff",
      description: "Ứng dụng dành cho nhân viên phục vụ",
      features: ["Nhận order", "Giao tiếp nội bộ", "Xem lịch làm việc", "Báo cáo ca làm"],
      price: "Miễn phí",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      {/* Hero Section */}
      <PageHero
        title="Sản phẩm POSO POS"
        subtitle="Giải pháp quản lý nhà hàng toàn diện với bộ sản phẩm đa dạng, đáp ứng mọi nhu cầu của bạn"
      />

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-[#191b1e] mb-4">{product.name}</h3>
                <p className="text-[#4f5664] mb-6 opacity-80">{product.description}</p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#fa7313] mr-2">✓</span>
                      <span className="text-[#4f5664]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#191b1e]">{product.price}</span>
                  <Link
                    to="/contact"
                    className="bg-[#fa7313] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b845] transition-colors"
                  >
                    Liên hệ
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fa7313] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Cần tư vấn về sản phẩm?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Đội ngũ của chúng tôi sẵn sàng hỗ trợ bạn
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#fa7313] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Liên hệ ngay
          </Link>
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
