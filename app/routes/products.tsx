import type { Route } from "./+types/products";
import { Link } from "react-router";
import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { PageFooter } from "../components/PageFooter";

export function meta({ }: Route.MetaArgs) {
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
  const [activeFeatureTab, setActiveFeatureTab] = useState<
    "all" | "selling" | "management" | "reports" | "integrations"
  >("all");

  const featureCategories = [
    {
      id: "selling" as const,
      label: "Bán hàng tại quầy",
      title: "Bán hàng nhanh, hạn chế sai sót",
      description:
        "Giao diện bán hàng đơn giản, thao tác chạm nhanh, hỗ trợ nhiều phương thức thanh toán.",
      bullets: [
        "Tạo hóa đơn chỉ với vài thao tác",
        "Quản lý bàn/khu vực phục vụ trực quan",
        "Tách/gộp bàn, chuyển món linh hoạt",
        "In hóa đơn cho quầy và bếp",
      ],
    },
    {
      id: "management" as const,
      label: "Quản lý vận hành",
      title: "Quản lý menu, giá bán và nhân viên",
      description:
        "Dễ dàng cập nhật menu, giá bán và phân quyền cho nhân viên theo vai trò.",
      bullets: [
        "Quản lý danh mục món, topping, combo",
        "Thiết lập giá theo khung giờ hoặc chi nhánh",
        "Phân quyền nhân viên theo chức vụ",
        "Lịch sử thao tác để kiểm soát gian lận",
      ],
    },
    {
      id: "reports" as const,
      label: "Báo cáo & số liệu",
      title: "Báo cáo doanh thu theo thời gian thực",
      description:
        "Theo dõi doanh thu, lợi nhuận và món bán chạy mọi lúc mọi nơi trên điện thoại.",
      bullets: [
        "Báo cáo doanh thu theo ca, ngày, tuần, tháng",
        "Thống kê món bán chạy, khung giờ cao điểm",
        "So sánh hiệu quả giữa các chi nhánh",
        "Xuất báo cáo để làm việc với kế toán",
      ],
    },
    {
      id: "integrations" as const,
      label: "Tích hợp & mở rộng",
      title: "Kết nối với đối tác giao hàng và thiết bị",
      description:
        "Tích hợp sẵn với các thiết bị phổ biến và nền tảng giao hàng để tối ưu vận hành.",
      bullets: [
        "Kết nối máy in bill, két tiền, máy POS phổ biến",
        "Tự động đồng bộ đơn hàng từ kênh giao hàng (theo lộ trình)",
        "API mở để tích hợp hệ thống khác",
        "Đồng bộ dữ liệu an toàn, bảo mật",
      ],
    },
  ];

  const visibleFeatureCards =
    activeFeatureTab === "all"
      ? featureCategories
      : featureCategories.filter((item) => item.id === activeFeatureTab);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      <section className="bg-[#f4f7ff] pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <p className=" font-semibold text-poso-primary uppercase tracking-wide mb-3">
                Sản phẩm
              </p>
              <h1 className="text-2xl md:text-5xl font-bold text-poso-dark mb-4 md:mb-6 leading-tight">
                Hệ thống quản lý nhà hàng chuyên nghiệp
              </h1>
              <p className=" md:text-lg text-poso-gray opacity-90 mb-6 md:mb-8">
                POSO cung cấp phần mềm quản lý bán hàng chuyên nghiệp, tương
                thích với nhiều thiết bị POS và máy in phổ biến trên thị trường.
                Giải pháp linh hoạt giúp vận hành quán mượt mà, chính xác và
                hiệu quả.
              </p>
              <div className="flex md:flex-row gap-3 justify-center md:justify-start">
                <Link
                  to="/contact"
                  className="md:text-[10px] lg:text-[10px] text-[11px] inline-flex items-center justify-center bg-poso-primary text-white px-8 py-3 rounded-full font-semibold  md: hover:bg-poso-primary-hover transition-colors"
                >
                  Tư vấn miễn phí
                </Link>
                <Link
                  to="/features"
                  className="md:text-[10px] lg:text-[10px] text-[11px] inline-flex items-center justify-center border border-poso-primary text-poso-primary px-8 py-3 rounded-full font-semibold  md: hover:bg-poso-primary/5 transition-colors"
                >
                  Xem tính năng chi tiết
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="relative max-w-full mx-auto h-full">
                <div className="absolute -top-6 -left-10 w-24 h-24 bg-poso-primary/10 rounded-[32px]" />
                <div className="absolute -bottom-10 -right-8 w-28 h-28 bg-poso-primary/5 rounded-full" />
                <div className="relative rounded-md border border-gray-100">
                    <img
                      src="/poso-screens/image-7.png"
                      alt="POSO POS"
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

            <div className="md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-7 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full border border-poso-primary text-poso-primary flex items-center justify-center  font-semibold">
                      01
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-poso-dark">
                        POSO POS
                      </h3>
                      <p className=" text-poso-gray">
                        Ứng dụng bán hàng tại quầy
                      </p>
                    </div>
                  </div>
                  <p className=" text-poso-gray mb-4">
                    Hệ thống điểm bán hàng chuyên nghiệp cho nhà hàng, quán
                    cafe, bar với giao diện thân thiện và tốc độ xử lý nhanh.
                  </p>
                  <ul className="space-y-2  text-poso-gray mb-6 flex-1">
                    <li>• Bán hàng nhanh chóng, hạn chế sai sót</li>
                    <li>• Quản lý bàn, khu vực phục vụ trực quan</li>
                    <li>• In hóa đơn, tích hợp nhiều loại máy in</li>
                    <li>• Báo cáo doanh thu và món bán chạy theo thời gian</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className=" text-poso-gray uppercase tracking-wide">
                        Gói phần mềm
                      </p>
                      <p className="text-xl font-bold text-poso-primary">
                        123.000 VNĐ / tháng
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                      <Link
                        to="/contact"
                        className="bg-poso-primary text-white px-5 py-2.5 rounded-md  font-semibold hover:bg-poso-primary-hover transition-colors"
                      >
                        Trải nghiệm ngay
                      </Link>
                      <button className=" sm: text-poso-primary underline decoration-dotted underline-offset-4">
                        Phòng thử nghiệm POSO
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-7 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full border border-poso-primary text-poso-primary flex items-center justify-center  font-semibold">
                      02
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-poso-dark">
                        POSO Boss / Điều hành
                      </h3>
                      <p className=" text-poso-gray">
                        Ứng dụng quản lý cho chủ quán
                      </p>
                    </div>
                  </div>
                  <p className=" text-poso-gray mb-4">
                    Theo dõi doanh thu, hoạt động cửa hàng và hiệu quả kinh
                    doanh từ xa trên điện thoại di động, mọi lúc, mọi nơi.
                  </p>
                  <ul className="space-y-2  text-poso-gray mb-6 flex-1">
                    <li>• Xem tổng quan doanh thu theo ngày, tuần, tháng</li>
                    <li>• Theo dõi hóa đơn hiện tại theo thời gian thực</li>
                    <li>• Danh mục và mặt hàng bán chạy nhất</li>
                    <li>• Hỗ trợ quản lý nhiều chi nhánh cùng lúc</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className=" text-poso-gray uppercase tracking-wide">
                        Ứng dụng di động
                      </p>
                      <p className="text-xl font-bold text-poso-primary">
                        Miễn phí
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                      <button className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-md  sm: font-semibold hover:bg-gray-800 transition-colors">
                        <span className="">▶︎</span>
                        <span>Google Play</span>
                      </button>
                      <button className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-md  sm: font-semibold hover:bg-gray-800 transition-colors">
                        <span className=""></span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-poso-dark text-center mb-4">
              Tính năng nổi bật của POSO POS
            </h2>
            <p className="text-center text-poso-gray opacity-80 mb-6 max-w-2xl mx-auto">
              Nhóm tính năng được thiết kế riêng cho nhà hàng, quán cafe, trà
              sữa, giúp bạn bán hàng nhanh hơn, quản lý chặt hơn và ra quyết
              định chính xác hơn.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 border-b border-gray-200 pb-4 mb-8">
              {[
                { id: "all", label: "Tất cả" },
                { id: "selling", label: "Bán hàng" },
                { id: "management", label: "Quản lý vận hành" },
                { id: "reports", label: "Báo cáo" },
                { id: "integrations", label: "Tích hợp" },
              ].map((tab) => {
                const isActive = activeFeatureTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() =>
                      setActiveFeatureTab(
                        tab.id as
                        | "all"
                        | "selling"
                        | "management"
                        | "reports"
                        | "integrations"
                      )
                    }
                    className={`pb-3  md: font-medium transition-colors border-b-2 ${isActive
                        ? "text-poso-primary border-poso-primary"
                        : "text-poso-gray border-transparent hover:text-poso-primary"
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="space-y-6">
              {visibleFeatureCards.map((feature) => (
                <div key={feature.id} className="flex flex-col ">
                  <h3 className="text-lg md:text-xl font-semibold text-poso-dark mb-1">
                    {feature.title}
                  </h3>
                  <p className=" text-poso-gray mb-2">
                    {feature.description}
                  </p>
                  <ul className="space-y-1  text-poso-gray mb-4 list-disc list-inside">
                    {feature.bullets.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <p className=" text-poso-gray uppercase tracking-wide mb-3">
                      Thuộc nhóm:{" "}
                      <span className="font-semibold text-poso-primary">
                        {
                          featureCategories.find((c) => c.id === feature.id)
                            ?.label
                        }
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-poso-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-[1250px] mx-auto">
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

      <PageFooter />
    </div>
  );
}
