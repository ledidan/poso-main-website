import type { Route } from "./+types/boss";
import { Link } from "react-router";
import { PageHero } from "../../components/PageHero";
import { SiteHeader } from "../../components/SiteHeader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tính năng POSO Boss - POSO POS" },
    {
      name: "description",
      content:
        "Khám phá các tính năng mạnh mẽ của POSO Boss - Ứng dụng quản lý cho chủ quán",
    },
  ];
}

export default function FeaturesBoss() {
  const features = [
    {
      num: "01",
      title: "Quản lý giao hàng MỚI",
      description:
        "Tích hợp dịch vụ giao thức ăn trực tuyến ShopeeFood.vn giúp quản lý và tự động hóa giao hàng. Xem và xử lý đơn hàng giao hàng từ xa.",
      icon: "🚚",
    },
    {
      num: "02",
      title: "Quản lý thực đơn",
      description:
        "Quản lý thực đơn từ xa với khả năng thêm, sửa, xóa món ăn. Phân loại món theo danh mục và quản lý giá cả từ ứng dụng mobile.",
      icon: "📋",
    },
    {
      num: "03",
      title: "Quản lý bàn",
      description:
        "Theo dõi trạng thái bàn từ xa. Quản lý đặt bàn, chuyển bàn và thanh toán từ ứng dụng mobile.",
      icon: "🪑",
    },
    {
      num: "04",
      title: "Quản lý đơn hàng",
      description:
        "Tổng hợp đơn hàng từ nhiều kênh: tại quán, giao hàng, đặt bàn. Xử lý và theo dõi trạng thái đơn hàng từ xa.",
      icon: "📦",
    },
    {
      num: "05",
      title: "Báo cáo thời gian thực",
      description:
        "Báo cáo doanh thu, sản phẩm bán chạy được cập nhật theo thời gian thực. Xem báo cáo từ mọi nơi trên ứng dụng mobile.",
      icon: "📊",
    },
    {
      num: "06",
      title: "Quản lý hàng tồn",
      description:
        "Theo dõi tồn kho từ xa, cảnh báo khi hàng sắp hết. Quản lý nhập xuất hàng hóa từ ứng dụng mobile.",
      icon: "📦",
    },
    {
      num: "07",
      title: "Quản lý nhân viên",
      description:
        "Phân quyền chi tiết cho từng nhân viên. Quản lý ca làm việc, chấm công từ ứng dụng mobile.",
      icon: "👥",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      {/* Hero Section */}
      <PageHero
        title="Tính năng POSO Boss"
        subtitle="Ứng dụng quản lý cho chủ quán - Quản lý cửa hàng mọi lúc, mọi nơi"
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
              Tại sao chọn POSO Boss?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-poso-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-poso-dark mb-2">
                  Quản lý từ xa
                </h3>
                <p className="text-poso-gray opacity-80">
                  Quản lý cửa hàng mọi lúc, mọi nơi dù bạn ở nơi đâu
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-poso-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-poso-dark mb-2">
                  Báo cáo đầy đủ
                </h3>
                <p className="text-poso-gray opacity-80">
                  Mọi báo cáo bạn cần ngay trong tầm tay, cập nhật theo thời gian thực
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-poso-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🆓</span>
                </div>
                <h3 className="text-xl font-semibold text-poso-dark mb-2">
                  Tải miễn phí
                </h3>
                <p className="text-poso-gray opacity-80">
                  Tải ứng dụng miễn phí trên Google Play và App Store
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[1340px] mx-auto text-center">
            <h2 className="text-4xl font-bold text-poso-dark mb-8">
              Tải ứng dụng POSO Boss ngay
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.19,15.12L14.96,12.85L17.19,10.58L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </button>
              <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                App Store
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-poso-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-[1340px] mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Bắt đầu quản lý bán hàng ngay hôm nay
            </h2>
            <p className="text-white opacity-90 mb-8 text-lg">
              Tải ứng dụng POSO Boss miễn phí và quản lý cửa hàng từ mọi nơi
            </p>
            <Link
              to="/contact"
              className="bg-white text-poso-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Liên hệ tư vấn
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
                  Giải pháp quản lý bán hàng hàng đầu Việt Nam
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
