import type { Route } from "./+types/about";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Giới thiệu - Ocha POS" },
    { name: "description", content: "Tìm hiểu về Ocha POS và sứ mệnh của chúng tôi" },
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
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-[#191b1e]">Ocha POS</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/products" className="text-[#4f5664] hover:text-[#00c94a] transition-colors">
                Sản phẩm
              </Link>
              <Link to="/features" className="text-[#4f5664] hover:text-[#00c94a] transition-colors">
                Tính năng
              </Link>
              <Link to="/faq" className="text-[#4f5664] hover:text-[#00c94a] transition-colors">
                FAQ
              </Link>
              <Link to="/news" className="text-[#4f5664] hover:text-[#00c94a] transition-colors">
                Tin tức
              </Link>
              <Link to="/contact" className="text-[#4f5664] hover:text-[#00c94a] transition-colors">
                Liên hệ
              </Link>
              <Link to="/about" className="text-[#00c94a] font-semibold">
                Giới thiệu
              </Link>
              <Link to="/contact" className="bg-[#00c94a] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b845] transition-colors">
                Dùng thử miễn phí
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f8f9fc] py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-[#191b1e] text-center mb-6">
            Về Ocha POS
          </h1>
          <p className="text-xl text-[#4f5664] text-center max-w-3xl mx-auto opacity-80">
            Giải pháp quản lý nhà hàng hàng đầu Việt Nam
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#191b1e] mb-6">
              Sứ mệnh của chúng tôi
            </h2>
            <p className="text-[#4f5664] opacity-80 leading-relaxed mb-8 text-lg">
              Ocha POS được thành lập với sứ mệnh giúp các nhà hàng, quán cafe, và doanh nghiệp F&B 
              quản lý hoạt động kinh doanh một cách hiệu quả và chuyên nghiệp. Chúng tôi tin rằng 
              công nghệ nên đơn giản, dễ sử dụng và giúp doanh nghiệp phát triển.
            </p>

            <h2 className="text-3xl font-bold text-[#191b1e] mb-6 mt-12">
              Câu chuyện của chúng tôi
            </h2>
            <p className="text-[#4f5664] opacity-80 leading-relaxed mb-4 text-lg">
              Bắt đầu từ năm 2020, Ocha POS được ra đời từ nhu cầu thực tế của các chủ nhà hàng 
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
                <div className="text-4xl md:text-5xl font-bold text-[#00c94a] mb-2">
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
      <section className="bg-[#00c94a] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Hãy tham gia cùng chúng tôi
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Bắt đầu hành trình số hóa nhà hàng của bạn ngay hôm nay
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#00c94a] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191b1e] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Ocha POS</h4>
              <p className="text-gray-400 text-sm">
                Giải pháp quản lý nhà hàng hàng đầu
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Sản phẩm</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/products" className="hover:text-white transition-colors">Sản phẩm</Link></li>
                <li><Link to="/features" className="hover:text-white transition-colors">Tính năng</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Hỗ trợ</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Liên hệ</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Công ty</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">Giới thiệu</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">Tin tức</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Ocha POS. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
