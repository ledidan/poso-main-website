import { workflowSteps } from "./content";

export function HomeWorkflowSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader
        eyebrow="Giải pháp theo luồng"
        title="Quy trình tinh gọn cho tạp hoá"
        subtitle="POSO chuẩn hoá 4 bước vận hành để cửa hàng đồng nhất dữ liệu giữa Web App và Mobile App."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {workflowSteps.map((step, idx) => (
          <article key={step.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-poso-primary">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
            <p className="mt-2 leading-7 text-[#355b63]">{step.description}</p>
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
