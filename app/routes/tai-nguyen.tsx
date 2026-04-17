import type { Route } from "./+types/tai-nguyen";
import { SiteHeader } from "../components/SiteHeader";
import { PageHero } from "../components/PageHero";
import { PageFooter } from "../components/PageFooter";
import { HomeResourcesSection } from "../components/home/HomeResourcesSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tài nguyên | POSO" },
    {
      name: "description",
      content:
        "Kho tài nguyên vận hành cửa hàng tạp hoá: checklist triển khai, chỉ số cần theo dõi và quy trình tối ưu hằng ngày.",
    },
  ];
}

export default function TaiNguyenPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />
      <PageHero
        title="Tài nguyên vận hành tạp hoá"
        subtitle="Tài liệu thực chiến giúp đội cửa hàng triển khai POSO nhanh và đúng quy trình"
      />
      <HomeResourcesSection />
      <PageFooter />
    </div>
  );
}
