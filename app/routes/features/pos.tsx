import type { Route } from "./+types/pos";
import { Link } from "react-router";
import { useState } from "react";
import { SiteHeader } from "../../components/SiteHeader";
import { PageFooter } from "../../components/PageFooter";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Tính năng POSO POS - POSO POS" },
    {
      name: "description",
      content:
        "Tính năng POSO POS - Hệ thống quản lý nhà hàng chuyên nghiệp, giải pháp nhà hàng toàn diện",
    },
  ];
}

export default function FeaturesPOS() {
  const featureList = [
    {
      id: "cash",
      label: "Quản lý thu chi",
    },
    {
      id: "table",
      label: "Quản lý bàn",
    },
    {
      id: "order",
      label: "Quản lý đơn hàng",
    },
    {
      id: "realtime",
      label: "Báo cáo thời gian thực",
    },
    {
      id: "inventory",
      label: "Quản lý hàng tồn",
    },
    {
      id: "staff",
      label: "Quản lý nhân viên",
    },
    {
      id: "chain",
      label: "Quản lý chuỗi",
    },
  ] as const;

  const [activeFeatureId, setActiveFeatureId] =
    useState<(typeof featureList)[number]["id"]>("cash");

  // Mapping feature IDs to screenshots in /poso-screens/
  const featureScreens: Record<(typeof featureList)[number]["id"], string> = {
    cash: "/poso-screens/image-6.png",
    table: "/poso-screens/image-11.png",
    order: "/poso-screens/image-9.png",
    realtime: "/poso-screens/image-3.png",
    inventory: "/poso-screens/image-5.png",
    staff: "/poso-screens/image-10.png",
    chain: "/poso-screens/image-10.png",
  };

  const activeScreen = featureScreens[activeFeatureId];

  const activeFeature =
    activeFeatureId === "cash"
      ? {
        title: "Quản lý Thu Chi",
        badge: "Mới",
        subtitle: "(Chỉ trên Poso)",
        summary:
          "Tích hợp quản lý thu chi tự động, không cần tính toán thủ công.",
        bullets: [
          "Quản lý thu chi tự động, không cần tính toán thủ công",
          "Quản lý thu chi theo ngày, tuần, tháng, năm",
          "Quản lý thu chi theo món, hóa đơn, nhân viên",
        ],
      }
      : activeFeatureId === "table"
        ? {
          title: "Quản lý Bàn",
          summary:
            "Theo dõi sơ đồ bàn trực quan, cập nhật trạng thái theo thời gian thực để phục vụ khách nhanh hơn.",
          bullets: [
            "Thiết kế sơ đồ khu vực và bàn theo mặt bằng quán",
            "Theo dõi trạng thái bàn: trống, đang phục vụ, đã đặt trước",
            "Hỗ trợ gộp bàn, tách bàn và chuyển bàn linh hoạt",
          ],
        }
        : activeFeatureId === "order"
          ? {
            title: "Quản lý Đơn Hàng",
            summary:
              "Tổng hợp đơn hàng từ nhiều kênh bán, xử lý tập trung trên một màn hình duy nhất.",
            bullets: [
              "Nhận đơn tại quán, đơn giao hàng và đơn đặt bàn",
              "Theo dõi trạng thái đơn: mới, đang pha chế, đang giao, hoàn tất",
              "Giảm sai sót nhờ quy trình xử lý đơn rõ ràng",
            ],
          }
          : activeFeatureId === "realtime"
            ? {
              title: "Báo cáo Thời gian thực",
              summary:
                "Cập nhật doanh thu và hiệu quả kinh doanh liên tục giúp chủ quán ra quyết định nhanh chóng.",
              bullets: [
                "Xem doanh thu theo ca, theo ngày, tuần, tháng",
                "Theo dõi món bán chạy, khung giờ cao điểm",
                "Xuất báo cáo chi tiết để phân tích sâu hơn",
              ],
            }
            : activeFeatureId === "inventory"
              ? {
                title: "Quản lý Hàng tồn",
                summary:
                  "Quản lý nguyên vật liệu và hàng hóa chặt chẽ, hạn chế thất thoát.",
                bullets: [
                  "Theo dõi tồn kho theo thời gian thực cho từng mặt hàng",
                  "Cảnh báo khi sắp hết hàng hoặc vượt định mức",
                  "Ghi nhận đầy đủ nhập kho, xuất kho và điều chỉnh tồn",
                ],
              }
              : activeFeatureId === "staff"
                ? {
                  title: "Quản lý Nhân viên",
                  summary:
                    "Kiểm soát hoạt động nhân viên trong ca làm việc và bảo vệ doanh thu.",
                  bullets: [
                    "Phân quyền chi tiết theo vai trò: thu ngân, phục vụ, quản lý",
                    "Theo dõi doanh thu theo nhân viên, ca làm việc",
                    "Hạn chế truy cập nhạy cảm bằng mật khẩu và phân quyền",
                  ],
                }
                : {
                  title: "Quản lý Chuỗi",
                  summary:
                    "Hỗ trợ vận hành nhiều chi nhánh trong cùng một hệ thống POSO POS.",
                  bullets: [
                    "Xem báo cáo gộp toàn chuỗi hoặc từng chi nhánh",
                    "Đồng bộ thực đơn và chương trình khuyến mãi cho toàn hệ thống",
                    "So sánh hiệu quả kinh doanh giữa các chi nhánh",
                  ],
                };

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />
      <section className="bg-gradient-to-r from-[#e5f6ff] via-[#f4fbff] to-[#e0ffe9] pt-0 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 w-full mb-6 md:mb-0">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -top-6 -left-10 w-24 h-24 bg-white/40 rounded-[32px]" />
                <div className="absolute -bottom-10 -right-8 w-28 h-28 bg-white/30 rounded-full" />
                <div className="hidden md:block relative rounded-[32px] border border-gray-100">
                  <div className="absolute top-2 left-2 rounded-[32px] w-[320px] lg:w-[430px] h-[240px] md:h-[240px]" >
                    <img
                      src="/poso-screens/image-12.png"
                      alt="POSO POS"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <img
                    src="/images/poso_sunmi_device.png"
                    alt="POSO POS"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className=" font-semibold text-poso-primary uppercase tracking-wide mb-3">
                POSO POS
              </p>
              <h1 className="text-2xl md:text-5xl font-bold text-poso-dark mb-4 md:mb-6 leading-tight">
                Hệ thống quản lý nhà hàng chuyên nghiệp
              </h1>
              <ul className=" md:text-lg text-poso-gray opacity-90 space-y-1 mb-6 md:mb-8">
                <li>• Hệ thống quản lý nhà hàng chuyên nghiệp</li>
                <li>
                  • Giải pháp nhà hàng toàn diện cho quán cafe, trà sữa, F&amp;B
                </li>
              </ul>
              <div className="md:hidden flex items-center justify-center relative rounded-[32px] border border-gray-100 px-4 py-6 md:px-6 md:py-8">
                <div className="md:w-full w-56 h-48 md:h-auto object-contain flex" >
                  <img
                    src="/poso-screens/image-13.png"
                    alt="POSO POS"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-1 md:flex-grow sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  to={`${import.meta.env.VITE_MERCHANT_URL}`}
                  className="text-[12px] md:text-[12px] inline-flex items-center justify-center bg-poso-primary text-white md:px-4 md:py-3 px-8 py-4 rounded-full font-semibold md: hover:bg-poso-primary-hover transition-colors"
                >
                  Trải nghiệm ngay
                </Link>
                <Link
                  to="/products"
                  className="text-[12px] md:text-[12px] inline-flex items-center justify-center border border-poso-primary text-poso-primary px-8 py-3 rounded-full font-semibold  md: hover:bg-poso-primary/5 transition-colors"
                >
                  Xem sản phẩm POSO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-poso-dark text-center mb-4">
              Tính năng của POSO POS
            </h2>
            <p className="text-center text-poso-gray opacity-80 mb-10">
              Bộ tính năng được thiết kế dành riêng cho nhà hàng, quán cafe và
              mô hình F&amp;B hiện đại.
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
                          className={`text-left px-4 py-2.5 rounded-full  md: whitespace-nowrap transition-colors lg:w-full ${isActive
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
                    <div className="flex items-center gap-2  md: text-poso-gray">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span>POSO POS</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md: text-poso-gray">
                      <span className="px-2 py-0.5 rounded-full bg-gray-100">
                        Đơn tại quán
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-gray-100">
                        Đơn giao hàng
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-2 md:px-4 py-4">
                    <div className="rounded-2xl bg-white border border-dashed border-gray-200 h-64 md:h-full flex items-center justify-center">
                      <img
                        src={activeScreen}
                        alt="POSO POS"
                        className="w-full h-auto object-contain"
                      />
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
            <h2 className="text-2xl md:text-3xl font-bold text-poso-dark mb-2">
              {activeFeature.title}{" "}
              {activeFeature.badge ? (
                <span className="ml-2 align-middle inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-poso-primary text-white uppercase">
                  {activeFeature.badge}
                </span>
              ) : null}
            </h2>
            {activeFeature.subtitle ? (
              <p className=" md: text-poso-gray mb-4">
                {activeFeature.subtitle}
              </p>
            ) : null}
            <p className=" md: text-poso-gray mb-4">{activeFeature.summary}</p>
            <ul className="list-disc pl-5 space-y-2  md: text-poso-gray mb-6">
              {activeFeature.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center justify-center bg-[#16a34a] text-white px-4 md:px-5 py-2 rounded-full  md: font-semibold hover:bg-[#15803d] transition-colors">
                Video hướng dẫn
              </button>
              <button className="inline-flex items-center justify-center border border-[#16a34a] text-[#16a34a] px-4 md:px-5 py-2 rounded-full  md: font-semibold hover:bg-[#16a34a]/5 transition-colors">
                Xem hướng dẫn
              </button>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
