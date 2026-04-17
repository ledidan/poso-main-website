import type { Route } from "./+types/ho-tro";
import { SiteHeader } from "../components/SiteHeader";
import { PageHero } from "../components/PageHero";
import { PageFooter } from "../components/PageFooter";
import { HomeFaqSection } from "../components/home/HomeFaqSection";
import { HomeSupportSection } from "../components/home/HomeSupportSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hỗ trợ | POSO" },
    {
      name: "description",
      content:
        "Hỗ trợ triển khai POSO cho cửa hàng tạp hoá: onboarding, FAQ, tư vấn vận hành Mobile App và Web App.",
    },
  ];
}

export default function HoTroPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />
      <PageHero
        title="Hỗ trợ triển khai POSO"
        subtitle="Đồng hành từ setup dữ liệu ban đầu đến vận hành ổn định mỗi ngày"
      />
      <HomeFaqSection />
      <HomeSupportSection />
      <PageFooter />
    </div>
  );
}
