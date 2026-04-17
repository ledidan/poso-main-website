import { Link } from "react-router";
import { heroMetrics, heroQuickLinks } from "./content";

export function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-orange-100 blur-3xl" />
      <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-center">
          <div>
            <p className="inline-flex rounded-full bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-wide text-poso-primary">
              Nền tảng quản lý bán hàng cho tạp hoá
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-poso-dark md:text-5xl">
              Một nền tảng, mọi nghiệp vụ
              <span className="block text-poso-primary">
                bán hàng và quản lý cửa hàng
              </span>
            </h1>
            <p className="mt-5 max-w-xl leading-7 text-[#355b63] md:text-lg">
              POSO giúp chủ tiệm xử lý bán hàng tại quầy, đồng bộ tồn kho và
              theo dõi báo cáo tức thời trên Mobile App và Web App.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={`${import.meta.env.VITE_MERCHANT_URL}`}
                className="rounded-xl bg-poso-primary px-6 py-3 text-center font-semibold text-white transition hover:bg-poso-primary-hover"
              >
                Dùng thử miễn phí
              </Link>
              <a
                href="/#solutions"
                className="rounded-xl bg-[#111827] px-6 py-3 text-center font-semibold text-white"
              >
                Xem giải pháp
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-sm">
              {heroMetrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-orange-50/60 p-3"
                >
                  <p className="text-2xl font-extrabold text-poso-primary">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-[#355b63]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            {/* <img
              src="/images/hero_poso_manager.png"
              alt="POSO giao diện quản lý"
              className="w-full object-contain drop-shadow-2xl"
            /> */}
            <img
              src="/poso-mobile-screen/image-1.png"
              alt="POSO giao diện quản lý"
              className="w-full object-contain h-[600px] drop-shadow-2xl"
            />
            {/* <img
              src="/poso-mobile-screen/image-1.png"
              alt="POSO mobile"
              className="absolute -bottom-8 -left-10 hidden w-36 rounded-2xl bg-white p-2 shadow-lg md:block"
            /> */}
          </div>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {heroQuickLinks.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="rounded-xl bg-[#f8fafc] px-4 py-3 text-sm font-semibold text-poso-dark transition hover:text-poso-primary"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
