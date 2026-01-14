import { useState } from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function HomePOSSection() {
  const [activeTab, setActiveTab] = useState<"pos" | "boss">("pos");
  const [selectedFeature, setSelectedFeature] = useState(0);

  const posFeatures: {
    num: string;
    title: string;
    detailDesc: string;
    badge?: string;
  }[] = [
    {
      num: "01",
      title: "Quản lý giao hàng",
      detailDesc:
        "Tích hợp dịch vụ giao thức ăn trực tuyến ShopeeFood.vn giúp quản lý và tự động hóa giao hàng. Xem và xử lý đơn hàng giao hàng trong thời gian thực.",
      badge: "MỚI" as const,
    },
    {
      num: "02",
      title: "Quản lý thực đơn",
      detailDesc:
        "Quản lý thực đơn linh hoạt với khả năng thêm, sửa, xóa món ăn. Phân loại món theo danh mục và quản lý giá cả dễ dàng.",
    },
    {
      num: "03",
      title: "Quản lý bàn",
      detailDesc:
        "Tạo và tùy chỉnh khu vực phục vụ trực quan theo sơ đồ bàn và quản lý đơn hàng dễ dàng.",
    },
    {
      num: "04",
      title: "Quản lý đơn hàng",
      detailDesc:
        "Tổng hợp đơn hàng từ nhiều kênh: tại quán, giao hàng, đặt bàn. Xử lý và theo dõi trạng thái đơn hàng dễ dàng.",
    },
    {
      num: "05",
      title: "Báo cáo thời gian thực",
      detailDesc:
        "Báo cáo doanh thu, sản phẩm bán chạy và nhiều chỉ số khác được cập nhật theo thời gian thực. Hỗ trợ ra quyết định nhanh chóng.",
    },
    {
      num: "06",
      title: "Quản lý hàng tồn",
      detailDesc:
        "Theo dõi tồn kho tự động, cảnh báo khi hàng sắp hết. Quản lý nhập xuất hàng hóa chi tiết với lịch sử đầy đủ.",
    },
    {
      num: "07",
      title: "Quản lý nhân viên",
      detailDesc:
        "Phân quyền chi tiết cho từng nhân viên. Quản lý ca làm việc, chấm công và tính lương tự động.",
    },
  ];

  const bossFeatures: {
    num: string;
    title: string;
    detailDesc?: string;
  }[] = [
    {
      num: "01",
      title: "Hoạt động",
      detailDesc:
        "Cập nhật hoạt động của cửa hàng theo thời gian thực.",
    },
    {
      num: "02",
      title: "Tổng quan doanh thu",
    },
    {
      num: "03",
      title: "Hóa đơn hiện tại",
    },
    {
      num: "04",
      title: "Danh mục bán chạy nhất",
    },
    {
      num: "05",
      title: "Mặt hàng bán chạy",
    },
    {
      num: "06",
      title: "Báo cáo khác",
    },
  ];

  const features = activeTab === "pos" ? posFeatures : bossFeatures;
  const activeFeature = features[selectedFeature] ?? features[0];

  return (
    <section className="bg-white py-20">
      <div className="w-full max-w-[1340px] mx-auto px-4">
        <div className="relative mb-12">
          <div className="relative flex justify-center gap-16">
            <button
              onClick={() => {
                setActiveTab("pos");
                setSelectedFeature(0);
              }}
              className="relative cursor-pointer px-2"
            >
              <h2
                className={`text-3xl md:text-4xl font-bold tracking-tight transition-colors ${
                  activeTab === "pos" ? "text-poso-primary" : "text-poso-gray"
                } hover:text-poso-primary`}
              >
                POSO POS
              </h2>
              <span
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-10 rounded-full bg-poso-primary transition-all duration-300 ${
                  activeTab === "pos"
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                }`}
              />
            </button>

            <button
              onClick={() => {
                setActiveTab("boss");
                setSelectedFeature(0);
              }}
              className="relative cursor-pointer px-2"
            >
              <h2
                className={`text-3xl md:text-4xl font-bold tracking-tight transition-colors ${
                  activeTab === "boss" ? "text-poso-primary" : "text-poso-gray"
                } hover:text-poso-primary`}
              >
                POSO Boss
              </h2>
              <span
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-10 rounded-full bg-poso-primary transition-all duration-300 ${
                  activeTab === "boss"
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="block lg:hidden mb-10">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setSelectedFeature(swiper.activeIndex)}
            initialSlide={selectedFeature}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={feature.num}>
                <div className="flex flex-col items-center text-center pb-10">
                  <div className="w-full max-w-md mb-6">
                    <img
                      src={
                        activeTab === "pos"
                          ? "/images/poso_sunmi_device.png"
                          : "/images/hero_poso_manager.png"
                      }
                      alt={activeTab === "pos" ? "POSO POS" : "POSO Boss"}
                      className="w-full h-auto mx-auto"
                    />
                  </div>
                  <div className="max-w-md mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-xl font-semibold text-poso-dark">
                        {feature.num}
                      </span>
                      <span className="text-xl font-bold text-poso-dark">
                        {feature.title}
                      </span>
                      {activeTab === "pos" &&
                        features === posFeatures &&
                        (feature as (typeof posFeatures)[number]).badge && (
                        <span className="text-[10px] uppercase tracking-wide bg-poso-primary text-white rounded-full px-2 py-0.5">
                          {(feature as (typeof posFeatures)[number]).badge}
                        </span>
                        )}
                    </div>
                    {feature.detailDesc && (
                      <p className="text-sm text-poso-gray leading-relaxed">
                        {feature.detailDesc}
                      </p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 items-start">
          <div className="bg-order-2 lg:order-1">
            <div className="rounded-3xl p-6 max-w-xl mx-auto relative bg-gradient-to-b from-gray-50 to-white shadow-lg">
              <img
                src={
                  activeTab === "pos"
                    ? "/images/poso_sunmi_device.png"
                    : "/images/hero_poso_manager.png"
                }
                alt={activeTab === "pos" ? "POSO POS" : "POSO Boss"}
                className={`w-full h-auto pointer-events-none ${
                  activeTab === "boss" ? "max-w-xs mx-auto" : ""
                }`}
              />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-4 text-sm font-semibold text-poso-primary">
                {activeTab === "pos" ? "POSO POS" : "POSO Boss"}
              </div>
              {activeTab === "pos" && (
                <div className="absolute -left-4 top-8 bg-white/95 rounded-2xl shadow-xl px-5 py-4 max-w-xs">
                  <div className="text-xs font-semibold text-poso-primary mb-1">
                    {activeFeature.num} {activeFeature.title}
                  </div>
                  {activeFeature.detailDesc && (
                    <p className="text-[11px] text-poso-gray leading-relaxed">
                      {activeFeature.detailDesc}
                    </p>
                  )}
                </div>
              )}
              {activeTab === "boss" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-10 bg-white/95 rounded-full shadow-xl px-6 py-3 flex items-center gap-3">
                  <div className="text-xs font-semibold text-poso-dark">
                    {activeFeature.num} {activeFeature.title}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {features.map((feature, index) => {
                const isActive = selectedFeature === index;
                return (
                  <button
                    key={feature.num}
                    onMouseEnter={() => setSelectedFeature(index)}
                    onFocus={() => setSelectedFeature(index)}
                    onClick={() => setSelectedFeature(index)}
                    className={`w-full text-left transition-all duration-300 ${
                      isActive
                        ? "bg-white shadow-xl rounded-2xl px-6 py-4"
                        : "px-2 py-2 hover:bg-gray-50 rounded-xl"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-sm font-semibold ${
                          isActive ? "text-poso-primary" : "text-poso-gray"
                        }`}
                      >
                        {feature.num}
                      </span>
                      <span
                        className={`text-base ${
                          isActive
                            ? "font-bold text-poso-dark"
                            : "text-poso-dark"
                        }`}
                      >
                        {feature.title}
                      </span>
                      {/* {activeTab === "pos" && feature.badge && (
                        <span className="ml-2 text-[10px] uppercase tracking-wide bg-poso-primary text-white rounded-full px-2 py-0.5">
                          {feature.badge}
                        </span>
                      )} */}
                    </div>
                    {isActive && feature.detailDesc && (
                      <p className="mt-2 text-poso-gray text-sm leading-relaxed max-w-md">
                        {feature.detailDesc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="mt-10 text-right">
              <Link
                to="/features"
                className="text-poso-primary font-semibold hover:underline text-lg"
              >
                Xem thêm →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
