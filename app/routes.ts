import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products", "routes/products.tsx"),
  route("features", "routes/features.tsx"),
  route("features/pos", "routes/features/pos.tsx"),
  route("features/boss", "routes/features/boss.tsx"),
  route("faq", "routes/faq.tsx"),
  route("news", "routes/news.tsx"),
  route("contact", "routes/contact.tsx"),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
