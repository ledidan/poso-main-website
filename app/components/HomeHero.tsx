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
        <SwiperSlide className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/banner-2.png"
              className="w-full h-full object-cover opacity-30"
              alt=""
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-24 py-16">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 text-center lg:text-left">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-poso-dark leading-tight">
                    Poso Boss
                  </h1>
                  <p className="w-full md:w-[30%] text-lg md:text-xl text-poso-dark md:border-l md:border-gray-500 md:pl-6 mt-3 md:mt-0 mx-auto md:mx-0">
                    Quản lý quán mọi lúc,
                    <br className="block md:hidden" />
                    <span className="md:ml-1">mọi nơi</span>
                  </p>
                </div>

                <p className="text-base md:text-lg text-poso-gray-dark">
                  Ứng dụng quản lý cho chủ quán
                </p>

                <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
                  <div className="flex gap-4 justify-center">
                    <StoreButton type="google" />
                    <StoreButton type="apple" />
                  </div>
                  <p className="text-sm text-poso-gray-dark md:ml-6">
                    Email: support@poso.vn
                  </p>
                </div>
              </div>

              <HeroImage
                src="/images/hero_poso_manager.png"
                className="max-w-sm"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/banner-3.png"
              className="w-full h-full object-cover opacity-30"
              alt=""
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-24 py-16">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-12 text-center lg:text-left">
              <div className="order-2 lg:order-1">
                <h2 className="text-5xl md:text-6xl font-bold text-poso-dark mb-6 leading-tight">
                  POSO POS
                </h2>

                <p className="text-xl text-poso-gray-dark mb-6 leading-relaxed">
                  Hệ thống quản lý bán hàng chuyên nghiệp
                  <br />
                  Giải pháp bán hàng toàn diện
                </p>

                <p className="text-base text-poso-primary mb-4">
                  Nay tích hợp tính năng ShopeeFood Delivery <span className="inline-block align-middle text-[10px] bg-poso-primary text-white px-2 py-0.5 rounded-full ml-1">NEW</span>
                </p>

                <div className="mb-6">
                  <Link
                    to="/contact"
                    className="inline-block bg-poso-primary text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-poso-primary-hover transition-colors w-full md:w-auto"
                  >
                    Đăng ký ngay
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FeatureItem title="Quản lý đơn hàng" />
                  <FeatureItem title="Báo cáo thời gian thực" />
                  <FeatureItem title="Quản lý kho hàng" />
                  <FeatureItem title="Tích hợp ShopeeFood" />
                </div>

                <p className="mt-8 text-sm text-poso-gray-dark">
                  Email: support@poso.vn
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <HeroImage
                  src="/images/poso_sunmi_device.png"
                  className="max-w-sm"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function HeroImage({ src, className }: { src: string; className?: string }) {
  return (
    <div className="flex justify-center">
      <div
        className={`${className} w-full aspect-3/4 flex items-center justify-center`}
      >
        <img src={src} className="w-full h-full object-contain" alt="" />
      </div>
    </div>
  );
}

function StoreButton({ type }: { type: "google" | "apple" }) {
  return (
    <button className="flex items-center gap-2 bg-poso-primary text-white px-6 py-3 rounded-md font-semibold text-sm shadow-md hover:bg-poso-primary-hover transition-colors">
      <span className="text-lg">{type === "google" ? "▶︎" : ""}</span>
      <span>{type === "google" ? "Google Play" : "App Store"}</span>
    </button>
  );
}

function FeatureItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-poso-primary/90 rounded-full flex items-center justify-center">
        <span className="text-white text-xl">✓</span>
      </div>
      <span className="text-poso-gray text-sm">{title}</span>
    </div>
  );
}
