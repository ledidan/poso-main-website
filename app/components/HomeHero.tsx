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
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        // loop
        className="hero-swiper"
      >
        <SwiperSlide className="relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/banner-2.png"
              className="w-full h-full object-cover opacity-30"
              alt=""
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-6 lg:px-24 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-poso-dark mb-6 leading-tight">
                  POSO Boss
                </h2>

                <p className="text-xl text-poso-gray mb-8 opacity-80 leading-relaxed">
                  Quản lý quán mọi lúc, mọi nơi
                  <br />
                  Ứng dụng quản lý cho chủ quán
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <StoreButton type="google" />
                  <StoreButton type="apple" />
                </div>

                {/* <div className="grid grid-cols-2 gap-4">
                  <FeatureItem title="Tích hợp với ShopeeFood" />
                  <FeatureItem title="Truy cập mọi lúc, mọi nơi" />
                  <FeatureItem title="Báo cáo chính xác" />
                  <FeatureItem title="Hỗ trợ tận tình" />
                </div> */}
              </div>

              {/* Right */}
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

          {/* Content */}
          <div className="max-w-7xl mx-auto px-6 lg:px-24 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-poso-dark mb-6 leading-tight">
                  POSO POS
                </h2>

                <p className="text-xl text-poso-gray mb-8 opacity-80 leading-relaxed">
                  Hệ thống quản lý bán hàng chuyên nghiệp
                  <br />
                  Giải pháp bán hàng toàn diện
                </p>

                <div className="mb-8">
                  <Link
                    to="/contact"
                    className="inline-block bg-poso-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-poso-primary-hover transition-colors"
                  >
                    Đăng ký ngay
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FeatureItem title="Quản lý đơn hàng" />
                  <FeatureItem title="Báo cáo thời gian thực" />
                  <FeatureItem title="Quản lý kho hàng" />
                  <FeatureItem title="Tích hợp ShopeeFood" />
                </div>
              </div>

              {/* Right */}
              <HeroImage src="/images/poso_sunmi_device.png" className="max-w-sm" />
             
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
        className={`${className} w-full aspect-[3/4] flex items-center justify-center`}
      >
        <img src={src} className="w-full h-full object-contain" alt="" />
      </div>
    </div>
  );
}

function StoreButton({ type }: { type: "google" | "apple" }) {
  return (
    <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
      {type === "google" ? "Google Play" : "App Store"}
    </button>
  );
}

function FeatureItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-poso-primary/50 rounded-full flex items-center justify-center">
        <span className="text-white text-xl">✓</span>
      </div>
      <span className="text-poso-gray text-sm">{title}</span>
    </div>
  );
}
