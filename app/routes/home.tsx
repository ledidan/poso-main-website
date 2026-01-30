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
import { fetchPosts } from "../lib/wordpress-api";

export async function loader({}: Route.LoaderArgs) {
  try {
    const posts = await fetchPosts();
    return {
      posts: posts.slice(0, 4), // Only get first 4 posts for home page
    };
  } catch (error) {
    console.error("Error loading news for home:", error);
    return {
      posts: [],
    };
  }
}

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

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-white ">
      <SiteHeader variant="home" />

      <HomeHero />
      <HomeHighlights />
      <HomePOSSection />
      <HomeVideoIntro />
      <HomeTestimonials />
      <HomeNewsSection posts={loaderData.posts} />
      <HomeBottomCTA />
      <HomeFooter />
    </div>
  );
}
