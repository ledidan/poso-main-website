import type { Route } from "./+types/products";
import { Link } from "react-router";
import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sản phẩm - POSO POS" },
    {
      name: "description",
      content:
        "Khám phá các sản phẩm POSO POS - Giải pháp quản lý bán hàng toàn diện cho nhà hàng, quán cafe",
    },
  ];
}

export default function Products() {
  const [activeDeviceTab, setActiveDeviceTab] = useState<
    "all" | "package" | "promo" | "printer" | "cashdrawer"
  >("package");

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      <section className="bg-[#f4f7ff] pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold text-poso-primary uppercase tracking-wide mb-3">
                Sản phẩm
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-poso-dark mb-4 md:mb-6 leading-tight">
                Hệ thống quản lý nhà hàng chuyên nghiệp
              </h1>
              <p className="text-base md:text-lg text-poso-gray opacity-90 mb-6 md:mb-8">
                Từ phần mềm bán hàng đến thiết bị phần cứng, POSO cung cấp trọn
                bộ giải pháp giúp vận hành quán mượt mà, chính xác và hiệu quả.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-poso-primary text-white px-8 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-poso-primary-hover transition-colors"
                >
                  Tư vấn miễn phí
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center border border-poso-primary text-poso-primary px-8 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-poso-primary/5 transition-colors"
                >
                  Xem tính năng chi tiết
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -top-6 -left-10 w-24 h-24 bg-poso-primary/10 rounded-[32px]" />
                <div className="absolute -bottom-10 -right-8 w-28 h-28 bg-poso-primary/5 rounded-full" />
                <div className="relative rounded-[32px] bg-white shadow-xl border border-gray-100 px-4 py-6 md:px-6 md:py-8">
                  <img
                    src="/images/poso_sunmi_device.png"
                    alt="Thiết bị POSO"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-[1060px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-poso-dark text-center mb-4">
              Phần mềm POSO
            </h2>
            <p className="text-center text-poso-gray opacity-80 mb-10">
              Bộ đôi sản phẩm phần mềm giúp bạn quản lý bán hàng tại quầy và
              theo dõi hoạt động kinh doanh mọi lúc mọi nơi.
            </p>

            <div className="bg-[#f5f7fb] rounded-3xl p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-7 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full border border-poso-primary text-poso-primary flex items-center justify-center text-sm font-semibold">
                      01
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-poso-dark">
                        POSO POS
                      </h3>
                      <p className="text-xs text-poso-gray">
                        Ứng dụng bán hàng tại quầy
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-poso-gray mb-4">
                    Hệ thống điểm bán hàng chuyên nghiệp cho nhà hàng, quán
                    cafe, bar với giao diện thân thiện và tốc độ xử lý nhanh.
                  </p>
                  <ul className="space-y-2 text-sm text-poso-gray mb-6 flex-1">
                    <li>• Bán hàng nhanh chóng, hạn chế sai sót</li>
                    <li>• Quản lý bàn, khu vực phục vụ trực quan</li>
                    <li>• In hóa đơn, tích hợp nhiều loại máy in</li>
                    <li>• Báo cáo doanh thu và món bán chạy theo thời gian</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-xs text-poso-gray uppercase tracking-wide">
                        Gói phần mềm
                      </p>
                      <p className="text-xl font-bold text-poso-primary">
                        123.000 VNĐ / tháng
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                      <Link
                        to="/contact"
                        className="bg-poso-primary text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-poso-primary-hover transition-colors"
                      >
                        Trải nghiệm ngay
                      </Link>
                      <button className="text-xs sm:text-sm text-poso-primary underline decoration-dotted underline-offset-4">
                        Phòng thử nghiệm POSO
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-7 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full border border-poso-primary text-poso-primary flex items-center justify-center text-sm font-semibold">
                      02
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-poso-dark">
                        POSO Boss / Điều hành
                      </h3>
                      <p className="text-xs text-poso-gray">
                        Ứng dụng quản lý cho chủ quán
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-poso-gray mb-4">
                    Theo dõi doanh thu, hoạt động cửa hàng và hiệu quả kinh
                    doanh từ xa trên điện thoại di động, mọi lúc, mọi nơi.
                  </p>
                  <ul className="space-y-2 text-sm text-poso-gray mb-6 flex-1">
                    <li>• Xem tổng quan doanh thu theo ngày, tuần, tháng</li>
                    <li>• Theo dõi hóa đơn hiện tại theo thời gian thực</li>
                    <li>• Danh mục và mặt hàng bán chạy nhất</li>
                    <li>• Hỗ trợ quản lý nhiều chi nhánh cùng lúc</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-xs text-poso-gray uppercase tracking-wide">
                        Ứng dụng di động
                      </p>
                      <p className="text-xl font-bold text-poso-primary">
                        Miễn phí
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                      <button className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-colors">
                        <span className="text-base">▶︎</span>
                        <span>Google Play</span>
                      </button>
                      <button className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-colors">
                        <span className="text-base"></span>
                        <span>App Store</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-[1060px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-poso-dark text-center mb-6">
              Thiết bị POSO
            </h2>

            <div className="flex flex-wrap justify-center gap-6 border-b border-gray-200 mb-8">
              {[
                { id: "all", label: "Hiển thị tất cả" },
                { id: "package", label: "Gói" },
                { id: "promo", label: "Khuyến mãi" },
                { id: "printer", label: "Máy in" },
                { id: "cashdrawer", label: "Két sắt" },
              ].map((tab) => {
                const isActive = activeDeviceTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() =>
                      setActiveDeviceTab(
                        tab.id as
                          | "all"
                          | "package"
                          | "promo"
                          | "printer"
                          | "cashdrawer"
                      )
                    }
                    className={`pb-3 text-sm md:text-base font-medium transition-colors border-b-2 ${
                      isActive
                        ? "text-poso-primary border-poso-primary"
                        : "text-poso-gray border-transparent hover:text-poso-primary"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-xs font-semibold text-poso-primary uppercase tracking-wide mb-2">
                  Gói
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-poso-dark mb-3">
                  Gói thiết bị POSO Sunmi
                </h3>
                <p className="text-sm text-poso-gray mb-4">
                  Gói thiết bị đồng bộ với phần mềm POSO POS, phù hợp cho nhà
                  hàng, quán cafe, trà sữa và mô hình chuỗi nhỏ.
                </p>
                <ul className="space-y-1 text-sm text-poso-gray mb-6">
                  <li>• Máy POS Sunmi V2s hoặc tương đương</li>
                  <li>• Máy in hóa đơn nhiệt khổ 80mm</li>
                  <li>• Ngăn kéo đựng tiền kết nối với máy in</li>
                  <li>• Cáp kết nối và phụ kiện đi kèm</li>
                  <li>• Cài đặt và hướng dẫn sử dụng cơ bản</li>
                </ul>
                <div className="flex flex-wrap items-center gap-4">
                  <div>
                    <p className="text-xs text-poso-gray uppercase tracking-wide">
                      Giá trọn gói tham khảo
                    </p>
                    <p className="text-2xl font-bold text-poso-primary">
                      10.309.000 VNĐ
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-poso-primary text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-poso-primary-hover transition-colors"
                  >
                    Mua tại Shopee
                  </a>
                </div>
              </div>

              <div className="flex-1 w-full flex justify-center">
                <div className="max-w-xs w-full">
                  <img
                    src="/images/poso_sunmi_device.png"
                    alt="Gói thiết bị POSO Sunmi"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-poso-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-[1340px] mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cần tư vấn về sản phẩm POSO?
            </h2>
            <p className="text-white opacity-90 mb-8 text-lg">
              Đội ngũ POSO luôn sẵn sàng hỗ trợ lựa chọn gói phần mềm và thiết
              bị phù hợp với mô hình kinh doanh của bạn.
            </p>
            <Link
              to="/contact"
              className="bg-white text-poso-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Liên hệ tư vấn miễn phí
            </Link>
          </div>
        </div>
      </section>

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
