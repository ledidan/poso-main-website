import { Link } from "react-router";

export function HomeLandingCtaSection() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-gradient-to-r from-poso-primary to-[#ff8f3f] p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Sẵn sàng triển khai POSO cho cửa hàng của bạn?
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-orange-50">
            Dùng thử miễn phí để trải nghiệm đầy đủ luồng bán hàng trên Web App và quản lý từ xa trên Mobile App.
            Nếu cần tài liệu hoặc hỗ trợ triển khai, đội POSO luôn sẵn sàng đồng hành.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to={`${import.meta.env.VITE_MERCHANT_URL}`}
              className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-poso-primary"
            >
              Dùng thử miễn phí
            </Link>
            <Link
              to="/tai-nguyen"
              className="rounded-xl bg-white/20 px-6 py-3 text-center font-semibold text-white"
            >
              Xem tài nguyên blog
            </Link>
            <Link
              to="/ho-tro"
              className="rounded-xl bg-white/20 px-6 py-3 text-center font-semibold text-white"
            >
              Xem hỗ trợ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
