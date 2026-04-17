import { faqs } from "./content";

export function HomeFaqSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <SectionHeader
        eyebrow="FAQ"
        title="Câu hỏi thường gặp trước khi triển khai POSO"
        subtitle="Bản copy dạng trả lời ngắn, rõ và thực dụng để giảm rào cản đăng ký dùng thử."
      />

      <div className="mt-8 space-y-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-xl bg-white p-5 shadow-sm">
            <summary className="cursor-pointer list-none font-semibold text-poso-dark">
              {faq.question}
            </summary>
            <p className="mt-3 leading-7 text-[#355b63]">{faq.answer}</p>
          </details>
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
