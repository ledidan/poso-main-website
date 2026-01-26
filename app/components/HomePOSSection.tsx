import { useState } from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function HomePOSSection() {
  const [activeTab, setActiveTab] = useState<"pos" | "boss">("pos");
  const [selectedFeature, setSelectedFeature] = useState(0);

  const posScreens = [
    "/poso-screens/image-6.png",
    "/poso-screens/image-1.png",
    "/poso-screens/image-13.png",
    "/poso-screens/image-7.png",
    "/poso-screens/image-5.png",
    "/poso-screens/image-12.png",
    "/poso-screens/image-10.png",
  ] as const;

  const bossScreens = [
    "/poso-mobile-screen/image-1.png",
    "/poso-mobile-screen/image-2.png",
    "/poso-mobile-screen/image-3.png",
    "/poso-mobile-screen/image-4.png",
    "/poso-mobile-screen/image-5.png",
    "/poso-mobile-screen/image-6.png",
  ] as const;

  const posFeatures: {
    num: string;
    title: string;
    detailDesc: string;
    badge?: string;
  }[] = [
    {
      num: "01",
      title: "Quản lý thu chi",
      detailDesc:
        "Tích hợp quản lý thu chi tự động, không cần tính toán thủ công.",
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
      title: "Bán nhanh",
      detailDesc:
        "Bán hàng nhanh chóng, không cần đợi quản lý đơn hàng.",
    },
    // {
    //   num: "06",
    //   title: "Quản lý hàng tồn",
    //   detailDesc:
    //     "Theo dõi tồn kho tự động, cảnh báo khi hàng sắp hết. Quản lý nhập xuất hàng hóa chi tiết với lịch sử đầy đủ.",
    // },
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
      detailDesc: "Cập nhật hoạt động của cửa hàng theo thời gian thực.",
    },
    {
      num: "02",
      title: "Tổng quan doanh thu",
      detailDesc: "Xem tổng quan doanh thu của cửa hàng theo thời gian thực.",
    },
    {
      num: "03",
      title: "Hóa đơn hiện tại",
      detailDesc: "Xem hóa đơn hiện tại của cửa hàng.",
    },
    {
      num: "04",
      title: "Danh mục bán chạy nhất",
      detailDesc: "Xem danh mục bán chạy nhất của cửa hàng.",
    },
    {
      num: "05",
      title: "Mặt hàng bán chạy",
      detailDesc: "Xem mặt hàng bán chạy của cửa hàng.",
    },
    {
      num: "06",
      title: "Báo cáo khác",
      detailDesc: "Xem báo cáo khác của cửa hàng.",
    },
  ];

  const features = activeTab === "pos" ? posFeatures : bossFeatures;
  const activeFeature = features[selectedFeature] ?? features[0];
  const activeScreen =
    activeTab === "pos"
      ? posScreens[selectedFeature] ?? posScreens[0]
      : bossScreens[selectedFeature] ?? bossScreens[0];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="w-full max-w-[1250px] mx-auto px-4">
        <div className="relative mb-8 md:mb-12">
          <div className="relative flex justify-center gap-6 md:gap-16">
            <button
              onClick={() => {
                setActiveTab("pos");
                setSelectedFeature(0);
              }}
              className="relative cursor-pointer px-2"
            >
              <h2
                className={`text-xl sm:text-2xl md:text-4xl font-bold tracking-tight transition-colors ${
                  activeTab === "pos" ? "text-poso-primary" : "text-poso-gray"
                } hover:text-poso-primary`}
              >
                POSO POS
              </h2>
              <span
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-8 md:w-10 rounded-full bg-poso-primary transition-all duration-300 ${
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
                className={`text-xl sm:text-2xl md:text-4xl font-bold tracking-tight transition-colors ${
                  activeTab === "boss" ? "text-poso-primary" : "text-poso-gray"
                } hover:text-poso-primary`}
              >
                POSO Boss
              </h2>
              <span
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-8 md:w-10 rounded-full bg-poso-primary transition-all duration-300 ${
                  activeTab === "boss"
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="block lg:hidden">
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
                <div className="flex flex-col items-center text-center pb-12">
                  <div className="w-full max-w-xs sm:max-w-md mb-6 relative">
                    {/* {activeTab === "pos" && (
                      <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-[75%] sm:w-[84%] h-[70%] sm:h-[80%] z-0">
                        <img
                          src="/terminal-images/image-2.png"
                          alt="POSO POS"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )} */}
                    <img
                      src={
                        activeTab === "pos"
                          ? posScreens[index] ?? posScreens[0]
                          : bossScreens[index] ?? bossScreens[0]
                      }
                      alt={activeTab === "pos" ? "POSO POS" : "POSO Boss"}
                      className="h-48 sm:h-64 md:h-72 w-auto mx-auto relative z-10 object-contain"
                    />
                  </div>
                  <div className="w-full max-w-md mx-auto px-2">
                    <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                      <span className="text-lg sm:text-xl font-semibold text-poso-dark">
                        {feature.num}
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-poso-dark">
                        {feature.title}
                      </span>
                      {activeTab === "pos" &&
                        features === posFeatures &&
                        (feature as (typeof posFeatures)[number]).badge && (
                          <span className="text-[9px] sm:text-[10px] uppercase tracking-wide bg-poso-primary text-white rounded-full px-2 py-0.5">
                            {(feature as (typeof posFeatures)[number]).badge}
                          </span>
                        )}
                    </div>
                    {feature.detailDesc && (
                      <p className=" text-poso-gray leading-relaxed px-2">
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
            <div className="rounded-3xl p-6 max-w-xl mx-auto relative bg-linear-to-b from-gray-50 to-white">
              <img
                src={
                  activeTab === "pos"
                    ? "/images/poso_sunmi_device.png"
                    : activeScreen
                }
                alt={activeTab === "pos" ? "POSO POS" : "POSO Boss"}
                className={`w-full h-auto pointer-events-none ${
                  activeTab === "boss" ? "max-w-xs mx-auto" : ""
                }`}
              />
              {activeTab === "pos" && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[80%] h-[80%] z-0">
                  <img
                    src={activeScreen}
                    alt={`${activeFeature.num} ${activeFeature.title}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-4  font-semibold text-poso-primary">
                {activeTab === "pos" ? "POSO POS" : "POSO Boss"}
              </div>
              {activeTab === "pos" && (
                <div className="absolute -left-4 bottom-30 bg-white/95 rounded-2xl shadow-xl px-5 py-4 max-w-xs">
                  <div className=" font-semibold text-poso-primary mb-1">
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
                  <div className=" font-semibold text-poso-dark">
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
                        className={` font-semibold ${
                          isActive ? "text-poso-primary" : "text-poso-gray"
                        }`}
                      >
                        {feature.num}
                      </span>
                      <span
                        className={` ${
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
                      <p className="mt-2 text-poso-gray  leading-relaxed max-w-md">
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
