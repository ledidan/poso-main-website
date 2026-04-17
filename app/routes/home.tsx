import type { Route } from "./+types/home";
import { SiteHeader } from "../components/SiteHeader";
import { HomeFooter } from "../components/HomeFooter";
import { HomePage } from "../components/home/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "POSO | Bán hàng tinh gọn dành cho tạp hoá" },
    {
      name: "description",
      content:
        "POSO giúp cửa hàng tạp hoá bán nhanh tại quầy, quản lý tồn kho chính xác và chốt sổ cuối ngày trong 5 phút.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="home" />
      <HomePage />
      <HomeFooter />
    </div>
  );
}
