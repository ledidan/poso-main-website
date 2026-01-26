import type { Route } from "./+types/features";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { SiteHeader } from "../components/SiteHeader";
import { PageFooter } from "../components/PageFooter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tính năng - POSO POS" },
    { name: "description", content: "Khám phá các tính năng mạnh mẽ của POSO POS" },
  ];
}

export default function Features() {
  const features = [
    {
      category: "Quản lý bán hàng",
      items: [
        {
          title: "Bán hàng nhanh chóng",
          description: "Giao diện thân thiện, xử lý đơn hàng chỉ trong vài giây",
        },
        {
          title: "Quản lý đơn hàng",
          description: "Theo dõi trạng thái đơn hàng theo thời gian thực",
        },
        {
          title: "In hóa đơn",
          description: "In hóa đơn nhiệt nhanh chóng, hỗ trợ nhiều loại máy in",
        },
      ],
    },
    {
      category: "Quản lý kho",
      items: [
        {
          title: "Tồn kho thời gian thực",
          description: "Cập nhật tồn kho tự động sau mỗi giao dịch",
        },
        {
          title: "Cảnh báo hết hàng",
          description: "Nhận thông báo khi hàng hóa sắp hết",
        },
        {
          title: "Nhập xuất kho",
          description: "Quản lý nhập xuất hàng hóa chi tiết, có lịch sử đầy đủ",
        },
      ],
    },
    {
      category: "Báo cáo & Thống kê",
      items: [
        {
          title: "Báo cáo doanh thu",
          description: "Báo cáo doanh thu chi tiết theo ngày, tuần, tháng, năm",
        },
        {
          title: "Sản phẩm bán chạy",
          description: "Phân tích sản phẩm bán chạy, doanh thu theo từng món",
        },
        {
          title: "Thống kê nhân viên",
          description: "Theo dõi hiệu suất làm việc của từng nhân viên",
        },
      ],
    },
    {
      category: "Quản lý nhân viên",
      items: [
        {
          title: "Phân quyền chi tiết",
          description: "Cấu hình quyền truy cập cho từng nhân viên",
        },
        {
          title: "Chấm công",
          description: "Quản lý giờ làm việc, ca làm việc tự động",
        },
        {
          title: "Tính lương",
          description: "Tính lương tự động dựa trên giờ làm việc",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      {/* Hero Section */}
      <PageHero
        title="Tính năng POSO POS"
        subtitle="Khám phá các tính năng mạnh mẽ giúp quản lý bán hàng hiệu quả hơn"
      />

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-[#191b1e] mb-8 text-center">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-xl font-semibold text-[#191b1e] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#4f5664] opacity-80">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fa7313] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trải nghiệm tất cả tính năng ngay hôm nay
          </h2>
          <Link
            to={`${import.meta.env.VITE_MERCHANT_URL}`}
            className="bg-white text-[#fa7313] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block mt-4"
          >
            Dùng thử miễn phí
          </Link>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
