import { featuredNews } from "./content";

export function HomeResourcesSection() {
  return (
    <section id="resources" className="mx-auto max-w-6xl px-4 py-16">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-poso-primary">Tin tức nổi bật</p>
        <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Cập nhật xu hướng và kinh nghiệm vận hành cửa hàng
        </h2>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {featuredNews.map((news) => (
          <a key={news.title} href={news.href} className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-lg font-bold">{news.title}</h3>
            <p className="mt-2 leading-7 text-[#355b63]">{news.description}</p>
            <p className="mt-4 text-sm font-semibold text-poso-primary">Đọc tiếp</p>
          </a>
        ))}
      </div>
    </section>
  );
}
