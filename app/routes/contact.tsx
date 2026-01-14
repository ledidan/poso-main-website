import type { Route } from "./+types/contact";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { SiteHeader } from "../components/SiteHeader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Liên hệ - POSO POS" },
    {
      name: "description",
      content: "Liên hệ với POSO POS để được tư vấn và hỗ trợ",
    },
  ];
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />

      {/* Hero Section */}
      <PageHero
        title="Liên hệ với chúng tôi"
        subtitle="Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ để được tư vấn miễn phí"
      />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#191b1e] mb-6">
                Gửi tin nhắn cho chúng tôi
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#191b1e] mb-2"
                  >
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fa7313] focus:border-transparent"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#191b1e] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fa7313] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#191b1e] mb-2"
                  >
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fa7313] focus:border-transparent"
                    placeholder="0901234567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#191b1e] mb-2"
                  >
                    Tin nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fa7313] focus:border-transparent"
                    placeholder="Nhập tin nhắn của bạn..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#fa7313] text-white px-6 py-4 rounded-md font-semibold text-lg hover:bg-[#00b845] transition-colors"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#191b1e] mb-6">
                Thông tin liên hệ
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#191b1e] mb-3">
                    Văn phòng
                  </h3>
                  <p className="text-[#4f5664] opacity-80">
                    198 QL55, Xã Hàm Tân, Tỉnh Lâm Đồng
                    <br />
                    Việt Nam
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#191b1e] mb-3">
                    Điện thoại
                  </h3>
                  <p className="text-[#4f5664] opacity-80">
                    <a
                      href="tel:+84977140536"
                      className="hover:text-[#fa7313] transition-colors"
                    >
                      +84 977 140 536
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#191b1e] mb-3">
                    Email
                  </h3>
                  <p className="text-[#4f5664] opacity-80">
                    <a
                      href="mailto:poso@autuna.com"
                      className="hover:text-[#fa7313] transition-colors"
                    >
                      poso@autuna.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#191b1e] mb-3">
                    Giờ làm việc
                  </h3>
                  <p className="text-[#4f5664] opacity-80">
                    Thứ 2 - Thứ 6: 8:00 - 18:00
                    <br />
                    Thứ 7: 8:00 - 12:00
                    <br />
                    Chủ nhật: Nghỉ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191b1e] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">POSO POS</h4>
              <p className="text-gray-400 text-sm">
                Giải pháp quản lý nhà hàng hàng đầu
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Sản phẩm</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    to="/products"
                    className="hover:text-white transition-colors"
                  >
                    Sản phẩm
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="hover:text-white transition-colors"
                  >
                    Tính năng
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Hỗ trợ</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Công ty</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news"
                    className="hover:text-white transition-colors"
                  >
                    Tin tức
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 POSO POS. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
