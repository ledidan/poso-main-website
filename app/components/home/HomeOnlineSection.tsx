import { onlineChannels } from "./content";

export function HomeOnlineSection() {
  return (
    <section id="features" className="bg-[#f8fafc] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header>
          <p className="text-sm font-semibold uppercase tracking-wide text-poso-primary">
            Tính năng nổi bật
          </p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-poso-dark md:text-4xl">
            Tăng trưởng doanh thu với bộ tính năng vận hành thực chiến
          </h2>
        </header>

        <div className="mt-8 space-y-4">
          {onlineChannels.map((item, idx) => (
            <article
              key={item.title}
              className="grid gap-6 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:items-center"
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-2xl font-bold text-poso-dark">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#355b63]">{item.description}</p>
              </div>
              <div className={`flex justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <img src={item.image} alt={item.title} className="max-h-[280px] w-auto object-contain" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
