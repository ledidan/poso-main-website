import { featureGroups } from "./content";

export function HomeFeatureSection() {
  return (
    <section id="features" className="bg-[#fff8f2] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Tính năng cốt lõi"
          title="POSO tập trung mạnh vào Mobile App và Web App"
          subtitle="Một luồng dữ liệu đồng nhất cho chủ tiệm và nhân viên: thao tác nhanh ở quầy, quản lý từ xa theo thời gian thực."
        />

        <div className="mt-8 space-y-6">
          {featureGroups.map((group) => (
            <article key={group.title} className="grid gap-6 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-poso-primary">{group.subtitle}</p>
                <h3 className="mt-2 text-2xl font-bold">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-[#355b63]">
                  {group.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-poso-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <img src={group.image} alt={group.title} className="max-h-[360px] w-auto object-contain" />
              </div>
            </article>
          ))}
        </div>
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
