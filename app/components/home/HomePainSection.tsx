import { painPoints } from "./content";

export function HomePainSection() {
  return (
    <section id="solutions" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader
        eyebrow="Nỗi đau vận hành"
        title="Các vấn đề tạp hoá gặp mỗi ngày"
        subtitle="Copy tập trung vào tình huống thực tế để khách hàng thấy rõ POSO giải quyết đúng việc cần làm ngay."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {painPoints.map((item) => (
          <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-poso-dark">{item.title}</h3>
            <p className="mt-2 leading-7 text-[#355b63]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header>
      <p className="text-sm font-semibold uppercase tracking-wide text-poso-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-[#355b63]">{subtitle}</p>
    </header>
  );
}
