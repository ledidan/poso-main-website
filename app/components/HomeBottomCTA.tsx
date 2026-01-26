import { Link } from "react-router";

export function HomeBottomCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-poso-primary to-gray-500 py-16 md:py-20">
      {/* lớp mờ nền phía sau giống hình mẫu */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/poso-screens/image-2.png')] bg-cover bg-center" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Hình máy POS bên trái */}
        <div className="w-full md:w-2/3 flex justify-center md:justify-start">
          <div className="relative max-w-full">
            <div className="absolute -inset-6 rounded-md bg-black/10 blur-2xl" />
            <img
              src="/poso-screens/image-12.png"
              alt="POSO POS terminal"
              className="relative rounded-md shadow-2xl shadow-black/30 border border-white/10 max-h-[170px] md:max-h-[500px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Nội dung text bên phải */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            POSO POS
          </h2>
          <p className=" md:text-2xl font-medium mb-3 opacity-95">
            Hệ thống quản lý nhà hàng chuyên nghiệp
          </p>
          <p className=" md:text-lg mb-8 opacity-90">
            Giải pháp nhà hàng toàn diện cho vận hành, bán hàng và báo cáo.
          </p>
          <Link
            to={`${import.meta.env.VITE_MERCHANT_URL}`}
            className="inline-block rounded-full bg-white px-6 md:px-10 py-2 md:py-3.5  md:text-lg font-semibold text-poso-primary shadow-lg shadow-black/10 hover:bg-gray-100 transition-colors"
          >
            Đăng ký Ngay!
          </Link>
        </div>
      </div>
    </section>
  );
}
