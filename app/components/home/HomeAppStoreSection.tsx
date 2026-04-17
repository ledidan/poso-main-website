import { appProduct, appReviews } from "./content";

export function HomeAppStoreSection() {
  const appStoreUrl = import.meta.env.VITE_APP_STORE_URL || "#";
  const chPlayUrl = import.meta.env.VITE_CH_PLAY_URL || "#";

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-poso-primary">
          Tải ứng dụng POSO
        </p>
        <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Một app duy nhất cho cửa hàng tạp hoá trên App Store và CH Play
        </h2>
      </header>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-6 md:grid-cols-[120px_1fr] md:items-center">
          <img
            src="/branding/poso-playstore-icon.png"
            alt={appProduct.name}
            className="h-24 w-24 rounded-3xl bg-orange-50 p-2 object-contain"
          />
          <div>
            <h3 className="text-xl font-bold text-poso-dark">{appProduct.name}</h3>
            <p className="mt-1 text-sm font-semibold text-poso-primary">
              {appProduct.downloads}
            </p>
            <p className="mt-2 leading-7 text-[#355b63]">{appProduct.description}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#111827] px-6 py-3 text-center font-semibold text-white"
          >
            Tải trên App Store
          </a>
          <a
            href={chPlayUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-poso-primary px-6 py-3 text-center font-semibold text-white"
          >
            Tải trên CH Play
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {appReviews.map((review) => (
          <article key={review.author} className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="leading-7 text-[#355b63]">"{review.quote}"</p>
            <p className="mt-3 text-sm font-semibold text-poso-dark">{review.author}</p>
            <p className="mt-1 text-amber-500">★★★★★</p>
          </article>
        ))}
      </div>
    </section>
  );
}
