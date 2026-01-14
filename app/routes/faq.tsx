import type { Route } from "./+types/faq";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQ - Ocha POS" },
    { name: "description", content: "Câu hỏi thường gặp về Ocha POS" },
  ];
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Ocha POS có phù hợp với quán cafe nhỏ không?",
      answer: "Có, Ocha POS được thiết kế để phù hợp với mọi quy mô nhà hàng, từ quán cafe nhỏ đến chuỗi nhà hàng lớn. Bạn có thể bắt đầu với gói cơ bản và nâng cấp khi cần.",
    },
    {
      question: "Tôi có cần kết nối internet để sử dụng không?",
      answer: "Ocha POS có thể hoạt động offline và đồng bộ dữ liệu khi có kết nối internet. Điều này đảm bảo bạn không bị gián đoạn kinh doanh.",
    },
    {
      question: "Chi phí sử dụng Ocha POS là bao nhiêu?",
      answer: "Ocha POS có nhiều gói dịch vụ phù hợp với nhu cầu khác nhau. Chúng tôi có gói dùng thử miễn phí và các gói trả phí với tính năng nâng cao. Vui lòng liên hệ để được tư vấn chi tiết.",
    },
    {
      question: "Tôi có thể tích hợp với các hệ thống thanh toán khác không?",
      answer: "Có, Ocha POS hỗ trợ tích hợp với nhiều cổng thanh toán phổ biến như Momo, ZaloPay, VNPay, và các hệ thống thanh toán quốc tế.",
    },
    {
      question: "Hỗ trợ kỹ thuật được cung cấp như thế nào?",
      answer: "Chúng tôi cung cấp hỗ trợ kỹ thuật 24/7 qua nhiều kênh: email, hotline, chat trực tuyến. Ngoài ra, chúng tôi có đội ngũ hỗ trợ tại chỗ cho khách hàng enterprise.",
    },
    {
      question: "Dữ liệu của tôi có được bảo mật không?",
      answer: "Tuyệt đối. Chúng tôi sử dụng mã hóa SSL/TLS và tuân thủ các tiêu chuẩn bảo mật quốc tế. Dữ liệu của bạn được sao lưu tự động và lưu trữ an toàn.",
    },
    {
      question: "Tôi có thể tùy chỉnh menu và sản phẩm không?",
      answer: "Có, bạn có thể dễ dàng tùy chỉnh menu, thêm/xóa/sửa sản phẩm, điều chỉnh giá cả, và tạo các combo menu theo nhu cầu.",
    },
    {
      question: "Ocha POS hỗ trợ in hóa đơn như thế nào?",
      answer: "Ocha POS hỗ trợ in hóa đơn với nhiều loại máy in nhiệt phổ biến. Bạn có thể tùy chỉnh mẫu hóa đơn, in nhiều bản, và gửi hóa đơn điện tử qua email/SMS.",
    },
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
              <Link to="/faq" className="text-[#00c94a] font-semibold">
                FAQ
              </Link>
              <Link to="/news" className="text-[#4f5664] hover:text-[#00c94a] transition-colors">
                Tin tức
              </Link>
              <Link to="/contact" className="text-[#4f5664] hover:text-[#00c94a] transition-colors">
                Liên hệ
              </Link>
              <Link to="/about" className="text-[#4f5664] hover:text-[#00c94a] transition-colors">
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
            Câu hỏi thường gặp
          </h1>
          <p className="text-xl text-[#4f5664] text-center max-w-3xl mx-auto opacity-80">
            Tìm câu trả lời cho những thắc mắc phổ biến về Ocha POS
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#191b1e] pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#00c94a] text-2xl flex-shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#4f5664] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#00c94a] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Không tìm thấy câu trả lời?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Liên hệ với chúng tôi để được hỗ trợ
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
