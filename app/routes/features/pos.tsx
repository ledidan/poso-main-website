import type { Route } from "./+types/pos";
import { Link } from "react-router";
import { PageHero } from "../../components/PageHero";
import { SiteHeader } from "../../components/SiteHeader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tính năng POSO POS - POSO POS" },
    {
      name: "description",
      content: "Khám phá các tính năng mạnh mẽ của POSO POS - Hệ thống điểm bán hàng chuyên nghiệp",
    },
  ];
}

export default function FeaturesPOS() {
  const features = [
    {
      num: "01",
      title: "Quản lý giao hàng",
      description:
        "Tích hợp dịch vụ giao thức ăn trực tuyến ShopeeFood.vn giúp quản lý và tự động hóa giao hàng. Xem và xử lý đơn hàng giao hàng trong thời gian thực.",
      icon: "🚚",
    },
    {
      num: "02",
      title: "Quản lý thực đơn",
      description:
        "Quản lý thực đơn linh hoạt với khả năng thêm, sửa, xóa món ăn. Phân loại món theo danh mục và quản lý giá cả dễ dàng.",
      icon: "📋",
    },
    {
      num: "03",
      title: "Quản lý bàn",
      description:
        "Theo dõi trạng thái bàn theo thời gian thực. Quản lý đặt bàn, chuyển bàn và thanh toán một cách hiệu quả.",
      icon: "🪑",
    },
    {
      num: "04",
      title: "Quản lý đơn hàng",
      description:
        "Tổng hợp đơn hàng từ nhiều kênh: tại quán, giao hàng, đặt bàn. Xử lý và theo dõi trạng thái đơn hàng dễ dàng.",
      icon: "📦",
    },
    {
      num: "05",
      title: "Báo cáo thời gian thực",
      description:
        "Báo cáo doanh thu, sản phẩm bán chạy và nhiều chỉ số khác được cập nhật theo thời gian thực. Hỗ trợ ra quyết định nhanh chóng.",
      icon: "📊",
    },
    {
      num: "06",
      title: "Quản lý hàng tồn",
      description:
        "Theo dõi tồn kho tự động, cảnh báo khi hàng sắp hết. Quản lý nhập xuất hàng hóa chi tiết với lịch sử đầy đủ.",
      icon: "📦",
    },
    {
      num: "07",
      title: "Quản lý nhân viên",
      description:
        "Phân quyền chi tiết cho từng nhân viên. Quản lý ca làm việc, chấm công và tính lương tự động.",
      icon: "👥",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      {/* Hero Section */}
      <PageHero
        title="Tính năng POSO POS"
        subtitle="Hệ thống điểm bán hàng chuyên nghiệp với đầy đủ tính năng quản lý nhà hàng"
      />

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-[1340px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-poso-primary font-bold text-lg">
                          {feature.num}
                        </span>
                        <h3 className="text-xl font-semibold text-poso-dark">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-poso-gray opacity-80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-[#f0f9f4] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-[1340px] mx-auto">
            <h2 className="text-4xl font-bold text-poso-dark text-center mb-12">
              Tại sao chọn POSO POS?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-poso-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-poso-dark mb-2">
                  Bán hàng nhanh chóng
                </h3>
                <p className="text-poso-gray opacity-80">
                  Giao diện thân thiện, xử lý đơn hàng chỉ trong vài giây
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-poso-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-poso-dark mb-2">
                  Dễ sử dụng
                </h3>
                <p className="text-poso-gray opacity-80">
                  Giao diện trực quan, nhân viên có thể học sử dụng ngay
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-poso-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-poso-dark mb-2">
                  Bảo mật cao
                </h3>
                <p className="text-poso-gray opacity-80">
                  Dữ liệu được mã hóa và sao lưu tự động, đảm bảo an toàn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-poso-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-[1340px] mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trải nghiệm POSO POS ngay hôm nay
            </h2>
            <p className="text-white opacity-90 mb-8 text-lg">
              Hệ thống quản lý nhà hàng chuyên nghiệp với đầy đủ tính năng
            </p>
            <Link
              to="/contact"
              className="bg-white text-poso-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Dùng thử miễn phí
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-poso-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-[1340px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-xl font-bold text-poso-primary mb-4">
                  POSO
                </h4>
                <p className="text-gray-400 text-sm">
                  Giải pháp quản lý nhà hàng hàng đầu Việt Nam
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Sản phẩm</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link
                      to="/products"
                      className="hover:text-white transition-colors"
                    >
                      Sản phẩm
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/features"
                      className="hover:text-white transition-colors"
                    >
                      Tính năng
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Hỗ trợ</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link
                      to="/faq"
                      className="hover:text-white transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="hover:text-white transition-colors"
                    >
                      Liên hệ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Công ty</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link
                      to="/about"
                      className="hover:text-white transition-colors"
                    >
                      Giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/news"
                      className="hover:text-white transition-colors"
                    >
                      Tin tức
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>© 2024 POSO POS. Tất cả quyền được bảo lưu.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
