import { Link } from "react-router";

export function PageFooter() {
  return (
    <footer className="bg-[#191b1e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* <h4 className="text-xl font-bold mb-4">POSO POS</h4> */}
            <img src="/logo.png" alt="POSO POS" className="w-20 h-6" />
            <p className="text-gray-400  pt-4">
              Giải pháp quản lý bán hàng hàng đầu
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Sản phẩm</h5>
            <ul className="space-y-2 text-gray-400 ">
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
            <ul className="space-y-2 text-gray-400 ">
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
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
            <ul className="space-y-2 text-gray-400 ">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  Tin tức
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 ">
          <p>© 2024 POSO POS. Tất cả quyền được bảo lưu.</p>
          <a
            href="/terms"
            className="mx-2 text-amber-500 hover:text-white underline"
          >
            Điều khoản & Điều kiện
          </a>
          <a
            href="/privacy"
            className="mx-2 text-amber-500 hover:text-white underline"
          >
            Chính sách Quyền riêng tư
          </a>
        </div>
      </div>
    </footer>
  );
}
