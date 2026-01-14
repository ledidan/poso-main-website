import { Link } from "react-router";

export function HomeBottomCTA() {
  return (
    <section className="bg-poso-primary py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">POSO POS</h2>
          <p className="text-xl mb-2 opacity-90">
            Hệ thống quản lý bán hàng chuyên nghiệp
          </p>
          <p className="text-lg mb-8 opacity-80">Giải pháp bán hàng toàn diện</p>
          <Link
            to="/contact"
            className="bg-white text-poso-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Đăng ký Ngay
          </Link>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
        <div className="h-full bg-gray-900 rounded-l-full" />
      </div>
    </section>
  );
}

