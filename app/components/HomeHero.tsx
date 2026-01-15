import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function HomeHero() {
  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        <SwiperSlide className="relative overflow-hidden min-h-[600px] md:min-h-[600px]">
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/banner-2.png"
              className="w-full h-full object-cover opacity-30"
              alt=""
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="max-w-7xl mx-auto justify-center py-16 h-full flex items-center">
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-0 items-center text-center lg:text-left">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-poso-dark leading-tight">
                    Poso Boss
                  </h1>
                  <p className="w-full md:w-[40%]  md:text-xl text-poso-dark md:border-l md:border-gray-500 md:pl-6 mt-3 md:mt-0 mx-auto md:mx-0">
                    Quản lý quán mọi lúc,
                    <br className=" hidden" />
                    <span className="md:ml-1">mọi nơi</span>
                  </p>
                </div>
                <p className=" md:text-lg text-poso-gray-dark">
                  Ứng dụng quản lý cho chủ quán
                </p>
                <div className="hidden md:flex flex-col items-center md:flex-row md:items-center gap-4">
                  <div className="flex gap-4 justify-center">
                    <StoreButton type="google" />
                    <StoreButton type="apple" />
                  </div>
                  <p className=" text-poso-gray-dark md:ml-6">
                    Email: support@poso.vn
                  </p>
                </div>
              </div>

              <HeroImage
                src="/images/hero_poso_manager.png"
                className="max-w-[40%] md:max-w-sm"
              />
              <div className="md:hidden flex flex-col items-center md:flex-row md:items-center gap-4">
                <div className="flex gap-4 justify-center">
                  <StoreButton type="google" />
                  <StoreButton type="apple" />
                </div>
                <p className=" text-poso-gray-dark md:ml-6">
                  Email: support@poso.vn
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative overflow-hidden min-h-[600px] md:min-h-[600px]">
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/banner-3.png"
              className="w-full h-full object-cover opacity-30"
              alt=""
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="max-w-7xl mx-auto justify-center py-16 h-full flex items-center">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-10 text-center lg:text-left">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-6xl font-bold text-poso-dark mb-6 leading-tight">
                  POSO POS
                </h2>

                <p className="md:text-xl text-poso-gray-dark mb-6.5 leading-relaxed">
                  Hệ thống quản lý bán hàng chuyên nghiệp
                  <br />
                  Giải pháp bán hàng toàn diện
                </p>
                <div className="order-1 lg:order-2 md:hidden">
                  <HeroImage
                    src="/images/poso_sunmi_device.png"
                    className="max-w-[45%] md:max-w-sm relative"
                  >
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[88%] h-[88%] z-10">
                      <img
                        src="/terminal-images/image-2.png"
                        className="w-full h-full object-contain"
                        alt="POSO Boss"
                      />
                    </div>
                  </HeroImage>
                </div>
                <div className="mb-6">
                  <Link
                    to={`${import.meta.env.VITE_MERCHANT_URL}/register`}
                    className="w-full max-w-xs md:w-auto py-3 inline-block bg-poso-primary text-white px-10 rounded-lg font-medium  md:text-lg hover:bg-poso-primary-hover transition-colors"
                  >
                    Đăng ký ngay
                  </Link>
                </div>

                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FeatureItem title="Quản lý đơn hàng" />
                  <FeatureItem title="Báo cáo thời gian thực" />
                  <FeatureItem title="Quản lý kho hàng" />
                  <FeatureItem title="Tích hợp ShopeeFood" />
                </div>

                <p className="mt-8 text-poso-gray-dark">
                  Email: support@poso.vn
                </p>
              </div>

              <div className="order-1 lg:order-2 hidden md:block">
                <HeroImage
                  src="/images/poso_sunmi_device.png"
                  className="max-w-sm relative"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[91%] h-[90%] z-10">
                    <img
                      src="/terminal-images/image-2.png"
                      className="w-full h-full object-contain"
                      alt="POSO Boss"
                    />
                  </div>
                </HeroImage>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function HeroImage({
  src,
  className,
  children,
}: {
  src: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <div
        className={`${className} w-full aspect-3/4 flex items-center justify-center`}
      >
        <img src={src} className="w-full h-full object-contain" alt="" />
        {children}
      </div>
    </div>
  );
}

function StoreButton({ type }: { type: "google" | "apple" }) {
  return (
    <button className="flex items-center gap-2 bg-poso-primary text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-poso-primary-hover transition-colors">
      <span className="text-lg">{type === "google" ? "▶︎" : ""}</span>
      <span className="">{type === "google" ? "Google Play" : "App Store"}</span>
    </button>
  );
}

function FeatureItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-poso-primary/90 rounded-full flex items-center justify-center">
        <span className="text-white text-xl">✓</span>
      </div>
      <span className="text-poso-gray-dark ">{title}</span>
    </div>
  );
}
