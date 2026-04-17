import { Link } from "react-router";
import { customerLogos } from "./content";

export function HomeCustomersSection() {
  return (
    <section id="customers" className="border-y border-[#f1f5f9] bg-[#f8fafc] py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#355b63]">
            Được tin dùng bởi nhiều thương hiệu bán lẻ
          </p>
          <Link to="/#pricing" className="hidden text-sm font-bold text-poso-primary md:block">
            Xem bảng giá
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {customerLogos.map((logo) => (
            <div key={logo.name} className="rounded-xl bg-white px-4 py-3 text-center">
              <img src={logo.image} alt={logo.name} className="mx-auto h-10 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
