import { Link } from "react-router";
import { pricingPlans } from "./content";

export function HomePricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader
        eyebrow="Bảng giá"
        title="Chọn gói theo mô hình vận hành thực tế"
        subtitle="Production copy tối ưu chuyển đổi: mô tả rõ ai dùng gói nào, tránh thông điệp mơ hồ."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-2xl p-6 shadow-sm ${
              plan.featured ? "bg-orange-50" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="mt-2 text-3xl font-extrabold text-poso-primary">{plan.price}</p>
            <p className="mt-2 text-sm text-[#355b63]">{plan.subtitle}</p>
            <ul className="mt-5 space-y-2 text-sm text-[#355b63]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-poso-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to={`${import.meta.env.VITE_MERCHANT_URL}`}
              className="mt-6 inline-block w-full rounded-lg bg-poso-primary px-4 py-3 text-center font-semibold text-white transition hover:bg-poso-primary-hover"
            >
              Dùng thử gói {plan.name}
            </Link>
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
