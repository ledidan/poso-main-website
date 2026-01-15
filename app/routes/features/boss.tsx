import type { Route } from "./+types/boss";
import { Link } from "react-router";
import { useState } from "react";
import { SiteHeader } from "../../components/SiteHeader";
import { PageFooter } from "../../components/PageFooter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tính năng POSO Boss - POSO POS" },
    {
      name: "description",
      content:
        "Tính năng POSO Boss - Ứng dụng quản lý cho chủ quán, mọi báo cáo trong tầm tay",
    },
  ];
}

export default function FeaturesBoss() {
  const featureList = [
    { id: "activity", label: "Hoạt động" },
    { id: "currentBills", label: "Hóa đơn hiện tại" },
    { id: "revenue", label: "Tổng quan doanh thu" },
    { id: "categoryTop", label: "Danh mục bán chạy nhất" },
    { id: "itemTop", label: "Mặt hàng bán chạy" },
    { id: "otherReports", label: "Báo cáo khác" },
  ] as const;

  const [activeFeatureId, setActiveFeatureId] =
    useState<(typeof featureList)[number]["id"]>("activity");

  const activeFeature =
    activeFeatureId === "activity"
      ? {
          title: "Hoạt động",
          summary:
            "Cập nhật tình hình kinh doanh theo thời gian thực, mọi biến động đều được hiển thị ngay trên ứng dụng.",
          bullets: [
            "Theo dõi và xem từng giao dịch theo: hóa đơn, thực đơn, nhân viên, phương thức thanh toán",
            "Xem chi tiết dòng tiền ra vào trong từng khung giờ",
            "Giúp theo dõi vận hành của quán sát sao hơn dù bạn ở bất cứ đâu",
          ],
        }
      : activeFeatureId === "currentBills"
        ? {
            title: "Hóa đơn hiện tại",
            summary:
              "Nắm được tất cả hóa đơn đang mở và trạng thái thanh toán theo thời gian thực.",
            bullets: [
              "Xem danh sách hóa đơn đang phục vụ tại quán",
              "Kiểm tra nhanh giá trị hóa đơn và phương thức thanh toán",
              "Giảm thất thoát do bỏ sót hóa đơn hoặc thanh toán sai",
            ],
          }
        : activeFeatureId === "revenue"
          ? {
              title: "Tổng quan doanh thu",
              summary:
                "Nắm toàn cảnh doanh thu cửa hàng trong ngày chỉ trong vài giây.",
              bullets: [
                "Xem doanh thu theo ngày, tuần, tháng với biểu đồ trực quan",
                "So sánh doanh thu giữa các khung giờ trong ngày",
                "Theo dõi doanh thu theo chi nhánh nếu vận hành chuỗi",
              ],
            }
          : activeFeatureId === "categoryTop"
            ? {
                title: "Danh mục bán chạy nhất",
                summary:
                  "Biết danh mục nào đang mang lại doanh thu chính để tối ưu thực đơn.",
                bullets: [
                  "Xếp hạng danh mục theo doanh thu và số lượng bán",
                  "Hỗ trợ quyết định tăng cường khuyến mãi cho danh mục chủ lực",
                  "Phát hiện danh mục hoạt động kém để điều chỉnh",
                ],
              }
            : activeFeatureId === "itemTop"
              ? {
                  title: "Mặt hàng bán chạy",
                  summary:
                    "Theo dõi món bán chạy giúp tối ưu tồn kho và chiến dịch marketing.",
                  bullets: [
                    "Xếp hạng từng món theo số lượng và doanh thu",
                    "Nhận biết món chủ lực để đưa lên vị trí nổi bật trong menu",
                    "Phân tích hiệu quả giá bán và combo",
                  ],
                }
              : {
                  title: "Các báo cáo khác",
                  summary:
                    "Bộ báo cáo đa dạng giúp chủ quán theo dõi sâu hơn về vận hành và tài chính.",
                  bullets: [
                    "Báo cáo chi phí, lợi nhuận và hiệu quả theo từng khoảng thời gian",
                    "Báo cáo hiệu suất nhân viên, ca làm việc",
                    "Xuất dữ liệu phục vụ kế toán và quản trị doanh nghiệp",
                  ],
                };

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      <section className="bg-gradient-to-r from-[#e5f6ff] via-[#f4fbff] to-[#e0ffe9] md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 w-full mb-6 md:mb-0">
              <div className="relative max-w-xs mx-auto">
                <div className="absolute -top-6 -left-10 w-24 h-24 bg-white/40 rounded-[32px]" />
                <div className="absolute -bottom-10 -right-8 w-28 h-28 bg-white/30 rounded-full" />
                <div className="hidden md:block relative rounded-[32px] bg-white shadow-xl border border-gray-100 px-4 py-6 md:px-6 md:py-8">
                  <img
                    src="/images/hero_poso_manager.png"
                    alt="POSO Boss"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold text-poso-primary uppercase tracking-wide mb-3">
                POSO Boss
              </p>
              <h1 className="text-2xl md:text-5xl font-bold text-poso-dark mb-4 md:mb-6 leading-tight">
                Ứng dụng quản lý cho chủ quán
              </h1>
              <ul className="text-sm md:text-lg text-poso-gray opacity-90 space-y-1 mb-6 md:mb-8">
                <li>• Quản lý cửa hàng mọi lúc, mọi nơi dù bạn ở nơi đâu</li>
                <li>• Mọi báo cáo bạn cần ngay trong tầm tay</li>
                <li>• Tải miễn phí</li>
              </ul>
              <div className="md:hidden relative rounded-[32px] px-4 py-6 md:px-6 md:py-8">
                <img
                  src="/images/hero_poso_manager.png"
                  alt="POSO Boss"
                  className="w-full h-48 md:h-auto object-contain"
                />
              </div>
              <div className="flex md:flex-grow sm:flex-row gap-3 justify-center md:justify-start">
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-800 transition-colors">
                  <span className="text-base">▶︎</span>
                  <span>Google Play</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-800 transition-colors">
                  <span className="text-base"></span>
                  <span>App Store</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-poso-dark text-center mb-4">
              Tính năng của POSO Boss
            </h2>
            <p className="text-center text-poso-gray opacity-80 mb-10">
              Mọi báo cáo và số liệu vận hành cửa hàng đều được cập nhật liên
              tục, giúp chủ quán kiểm soát kinh doanh dễ dàng.
            </p>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-64">
                <ul className="flex gap-2 overflow-x-auto lg:flex-col lg:space-y-1 lg:gap-0 lg:overflow-visible rounded-2xl p-1 lg:p-3">
                  {featureList.map((item) => {
                    const isActive = activeFeatureId === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() =>
                            setActiveFeatureId(
                              item.id as (typeof featureList)[number]["id"]
                            )
                          }
                          className={`text-left px-4 py-2.5 rounded-full text-sm md:text-base whitespace-nowrap transition-colors lg:w-full ${
                            isActive
                              ? "bg-white text-poso-primary font-semibold shadow-sm border border-gray-200"
                              : "text-poso-gray hover:bg-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex-1">
                <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="border-b border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-poso-gray">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span>POSO Boss</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-poso-gray">
                      <span className="px-2 py-0.5 rounded-full bg-gray-100">
                        Doanh thu
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-gray-100">
                        Hóa đơn
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-2 md:px-4 py-4">
                    <div className="rounded-2xl bg-white border border-dashed border-gray-200 h-64 md:h-80 flex items-center justify-center">
                      <span className="text-xs md:text-sm text-poso-gray">
                        Khu vực mô phỏng màn hình báo cáo POSO Boss
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-poso-dark mb-3">
              {activeFeature.title}
            </h2>
            <p className="text-sm md:text-base text-poso-gray mb-4">
              {activeFeature.summary}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-poso-gray mb-6">
              {activeFeature.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-poso-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-[1250px] mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Bắt đầu quản lý bán hàng ngay hôm nay
            </h2>
            <p className="text-white opacity-90 mb-8 text-lg">
              Tải ứng dụng POSO Boss miễn phí và theo dõi cửa hàng từ mọi nơi.
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

      <PageFooter />
    </div>
  );
}
