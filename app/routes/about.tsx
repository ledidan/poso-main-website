import type { Route } from "./+types/about";
import { PageHero } from "../components/PageHero";
import { SiteHeader } from "../components/SiteHeader";
import { PageFooter } from "../components/PageFooter";
import { Link } from "react-router";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Giới thiệu - POSO POS" },
    { name: "description", content: "Tìm hiểu về POSO POS và sứ mệnh của chúng tôi" },
  ];
}

export default function About() {
  const values = [
    {
      title: "Đổi mới",
      description: "Chúng tôi không ngừng đổi mới và cải tiến sản phẩm để đáp ứng nhu cầu của khách hàng.",
    },
    {
      title: "Tin cậy",
      description: "Uy tín và độ tin cậy là giá trị cốt lõi trong mọi hoạt động của chúng tôi.",
    },
    {
      title: "Hỗ trợ",
      description: "Chúng tôi cam kết hỗ trợ khách hàng 24/7 với đội ngũ chuyên nghiệp.",
    },
    {
      title: "Đơn giản",
      description: "Sản phẩm của chúng tôi được thiết kế đơn giản, dễ sử dụng cho mọi người.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Khách hàng" },
    { number: "50,000+", label: "Giao dịch/ngày" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Hỗ trợ" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      {/* Hero Section */}
      <PageHero
        title="Về POSO POS"
        subtitle="Giải pháp quản lý bán hàng hàng đầu Việt Nam"
      />

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#191b1e] mb-6">
              Sứ mệnh của chúng tôi
            </h2>
            <p className="text-[#4f5664] opacity-80 leading-relaxed mb-8 text-lg">
              POSO POS được thành lập với sứ mệnh giúp các nhà hàng, quán cafe, và doanh nghiệp F&B 
              quản lý hoạt động kinh doanh một cách hiệu quả và chuyên nghiệp. Chúng tôi tin rằng 
              công nghệ nên đơn giản, dễ sử dụng và giúp doanh nghiệp phát triển.
            </p>

            <h2 className="text-3xl font-bold text-[#191b1e] mb-6 mt-12">
              Câu chuyện của chúng tôi
            </h2>
            <p className="text-[#4f5664] opacity-80 leading-relaxed mb-4 text-lg">
              Bắt đầu từ năm 2020, POSO POS được ra đời từ nhu cầu thực tế của các chủ nhà hàng 
              muốn có một giải pháp quản lý toàn diện nhưng đơn giản và giá cả phải chăng. 
            </p>
            <p className="text-[#4f5664] opacity-80 leading-relaxed mb-8 text-lg">
              Sau nhiều năm phát triển, chúng tôi tự hào là một trong những nhà cung cấp giải pháp 
              POS hàng đầu tại Việt Nam, phục vụ hàng chục nghìn khách hàng từ quy mô nhỏ đến lớn.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#f8f9fc] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#fa7313] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#4f5664] opacity-80 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#191b1e] text-center mb-12">
            Giá trị cốt lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-[#191b1e] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#4f5664] opacity-80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fa7313] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Hãy tham gia cùng chúng tôi
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Bắt đầu hành trình số hóa nhà hàng của bạn ngay hôm nay
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#fa7313] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
