import { Link } from "react-router";
import { supportChannels } from "./content";

export function HomeSupportSection() {
  return (
    <section id="support" className="pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-gradient-to-r from-poso-primary to-[#ff8f3f] p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Hãy để POSO đồng hành kinh doanh cùng bạn
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-orange-50">
            Dùng thử miễn phí để trải nghiệm đầy đủ POSO Mobile App và POSO Web App.
            Đội ngũ triển khai hỗ trợ từ setup ban đầu đến khi cửa hàng chạy ổn định.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to={`${import.meta.env.VITE_MERCHANT_URL}`}
              className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-poso-primary"
            >
              Dùng thử miễn phí
            </Link>
            <Link
              to="/ho-tro"
              className="rounded-xl bg-white/20 px-6 py-3 text-center font-semibold text-white"
            >
              Xem kênh hỗ trợ
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {supportChannels.map((channel) => (
            <article key={channel.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-poso-primary">{channel.title}</p>
              <p className="mt-2 text-2xl font-bold text-poso-dark">{channel.detail}</p>
              <p className="mt-2 leading-7 text-[#355b63]">{channel.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
