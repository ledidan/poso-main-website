import type { Route } from "./+types/home";
import { SiteHeader } from "../components/SiteHeader";
import { HomeHero } from "../components/HomeHero";
import { HomeHighlights } from "../components/HomeHighlights";
import { HomePOSSection } from "../components/HomePOSSection";
import { HomeVideoIntro } from "../components/HomeVideoIntro";
import { HomeTestimonials } from "../components/HomeTestimonials";
import { HomeNewsSection } from "../components/HomeNewsSection";
import { HomeBottomCTA } from "../components/HomeBottomCTA";
import { HomeFooter } from "../components/HomeFooter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "POSO POS" },
    {
      name: "description",
      content:
        "POSO là Nhãn Hiệu Máy Bán Hàng Hàng Đầu Thế Giới. Giải pháp quản lý bán hàng duy nhất bạn cần.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white ">
      <SiteHeader variant="home" />

      <HomeHero />
      <HomeHighlights />
      <HomePOSSection />
      <HomeVideoIntro />
      <HomeTestimonials />
      <HomeNewsSection />
      <HomeBottomCTA />
      <HomeFooter />
    </div>
  );
}
