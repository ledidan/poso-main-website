import { businessSuite } from "./content";

export function HomeBusinessSuiteSection() {
  const primary = businessSuite[0];

  return (
    <section id="solutions" className="mx-auto max-w-6xl px-4 py-16">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-poso-primary">
          Một nền tảng, mọi giải pháp
        </p>
        <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          POSO cung cấp bộ công cụ vận hành toàn diện cho cửa hàng
        </h2>
      </header>

      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {businessSuite.map((item) => (
          <article key={item.key} className="rounded-2xl bg-[#f8fafc] p-4">
            <h3 className="text-base font-bold text-poso-dark">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#355b63]">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-8 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-[1fr_360px] md:items-center md:p-8">
        <div>
          <h3 className="text-2xl font-bold text-poso-dark">{primary.title}</h3>
          <p className="mt-3 leading-7 text-[#355b63]">{primary.description}</p>
          <ul className="mt-4 space-y-2 text-[#355b63]">
            {primary.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-poso-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src={primary.image} alt={primary.title} className="max-h-[340px] w-auto object-contain" />
        </div>
      </div>
    </section>
  );
}
