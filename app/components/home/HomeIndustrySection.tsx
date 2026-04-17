import { industrySegments } from "./content";

export function HomeIndustrySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-poso-primary">
          Giải pháp theo ngành hàng
        </p>
        <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Phù hợp nhiều mô hình bán lẻ từ tạp hoá đến chuỗi nhỏ
        </h2>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {industrySegments.map((item) => (
          <article key={item.title} className="grid gap-4 rounded-2xl bg-[#f8fafc] p-5 sm:grid-cols-[1fr_120px] sm:items-center">
            <div>
              <h3 className="text-xl font-bold text-poso-dark">{item.title}</h3>
              <p className="mt-2 leading-7 text-[#355b63]">{item.description}</p>
            </div>
            <div className="flex justify-center sm:justify-end">
              <img src={item.image} alt={item.title} className="h-28 w-auto object-contain" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
