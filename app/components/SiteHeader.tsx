import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";

type HeaderVariant = "home" | "page";

export function SiteHeader({ variant }: { variant: HeaderVariant }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const location = useLocation();

  // Auto-open dropdown when on features pages
  useEffect(() => {
    if (
      location.pathname === "/features" ||
      location.pathname === "/features/pos" ||
      location.pathname === "/features/boss"
    ) {
      setFeaturesDropdownOpen(true);
    }
  }, [location.pathname]);

  const navigationLinks = [
    { to: "/products", label: "Sản phẩm" },
    { to: "/faq", label: "FAQ" },
    { to: "/news", label: "Tin tức" },
    { to: "/contact", label: "Liên hệ" },
    { to: "/about", label: "Giới thiệu" },
  ];

  const featuresSubmenu = [
    { to: "/features", label: "Tất cả tính năng" },
    { to: "/features/pos", label: "POSO POS" },
    { to: "/features/boss", label: "POSO Boss" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-8">
            <Link to="/" className="flex items-center">
              {/* <h1 className="text-2xl font-bold text-poso-primary">POSO</h1> */}
              <img src="/logo.png" alt="POSO" className="w-full h-6" />
            </Link>

            <div className="hidden md:flex items-center justify-start space-x-4">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-poso-primary font-semibold text-sm font-medium"
                    : "text-poso-dark hover:text-poso-primary transition-colors text-sm"
                }
              >
                Sản phẩm
              </NavLink>

              {/* Features Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setFeaturesDropdownOpen(true)}
                onMouseLeave={() => setFeaturesDropdownOpen(false)}
              >
                <NavLink
                  to="/features"
                  className={({ isActive }) =>
                    isActive
                      ? "text-poso-primary flex items-center gap-1 text-sm font-medium"
                      : "text-poso-gray hover:text-poso-primary transition-colors flex items-center gap-1 text-sm font-medium"
                  }
                >
                  Tính năng
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      featuresDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </NavLink>

                {featuresDropdownOpen && (
                  <div className="absolute left-0 right-0 mx-auto bg-white rounded-xl shadow-xl border border-gray-200 p-6 w-[520px]">
                    <div className="grid grid-cols-2 gap-6">
                      <NavLink
                        to="/features/pos"
                        onClick={() => setFeaturesDropdownOpen(false)}
                        className="group rounded-lg p-4 hover:border-poso-primary hover:bg-poso-primary/5 transition"
                      >
                        <div className="mb-3">
                          {/* icon */}
                          <div className="w-full h-full text-poso-primary flex items-center justify-center rounded-md">
                            <img
                              src="/images/pos-staff.png"
                              alt="POSO POS"
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                        <h3 className="font-semibold text-center text-gray-900 group-hover:text-poso-primary">
                          POSO POS
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Dành cho Quản lý và Nhân viên
                        </p>
                      </NavLink>

                      <NavLink
                        to="/features/boss"
                        onClick={() => setFeaturesDropdownOpen(false)}
                        className="group rounded-lg  p-4 hover:border-poso-primary hover:bg-poso-primary/5 transition"
                      >
                        <div className="mb-3">
                          <div className="w-full h-full text-poso-primary flex items-center justify-center rounded-md">
                            <img
                              src="/images/pos-terminal-owner.png"
                              alt="POSO Boss"
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                        <h3 className="font-semibold text-center text-gray-900 group-hover:text-poso-primary">
                          POSO Boss
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Dành cho Chủ Nhà Hàng
                        </p>
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>

              {navigationLinks.slice(1).map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-poso-primary font-semibold text-sm font-medium"
                      : "text-poso-gray hover:text-poso-primary transition-colors text-sm font-medium"
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end space-x-4">
            {variant === "home" ? (
              <>
                <Link
                  to={`${import.meta.env.VITE_MERCHANT_URL}/register`}
                  className="border border-poso-primary text-poso-primary px-6 py-2 rounded-full font-semibold hover:text-white hover:bg-poso-primary-hover transition-colors"
                >
                  Đăng ký
                </Link>
              </>
            ) : (
              <Link
                to={`${import.meta.env.VITE_MERCHANT_URL}/register`}
                className="border border-poso-primary text-poso-primary px-6 py-2 rounded-full font-semibold hover:text-white hover:bg-poso-primary-hover transition-colors"
              >
                Dùng thử miễn phí
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden p-2 cursor-pointer text-poso-gray hover:text-poso-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Slide in from right */}
        <div className="md:hidden">
          <div
            className={`fixed inset-0 z-40 flex justify-end transform transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Overlay */}
            <button
              type="button"
              aria-label="Đóng menu"
              className="flex-1 bg-black/40"
              onClick={() => {
                setMobileMenuOpen(false);
                setFeaturesDropdownOpen(false);
              }}
            />

            {/* Panel */}
            <div className="w-80 max-w-[80%] h-full bg-white shadow-xl border-l border-gray-200 px-4 py-6 overflow-y-auto">
              <div className="flex flex-col space-y-4">
                <NavLink
                  to="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-poso-primary font-semibold transition-colors py-2"
                      : "text-poso-gray hover:text-poso-primary transition-colors py-2"
                  }
                >
                  Sản phẩm
                </NavLink>

                {/* Mobile Features Dropdown */}
                <div>
                  <button
                    onClick={() =>
                      setFeaturesDropdownOpen(!featuresDropdownOpen)
                    }
                    className="w-full text-left text-poso-gray hover:text-poso-primary transition-colors py-2 flex items-center justify-between"
                  >
                    Tính năng
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        featuresDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {featuresDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {featuresSubmenu.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setFeaturesDropdownOpen(false);
                          }}
                          className={({ isActive }) =>
                            `block py-2 transition-colors ${
                              isActive
                                ? "text-poso-primary font-semibold"
                                : "text-poso-gray hover:text-poso-primary"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>

                {navigationLinks.slice(1).map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-poso-primary font-semibold transition-colors py-2"
                        : "text-poso-gray hover:text-poso-primary transition-colors py-2"
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                  {variant === "home" ? (
                    <>
                      <Link
                        to={`${import.meta.env.VITE_MERCHANT_URL}/register`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-poso-primary text-white px-6 py-2 rounded-full font-semibold hover:text-white hover:bg-poso-primary-hover transition-colors text-center"
                      >
                        Đăng ký
                      </Link>
                    </>
                  ) : (
                    <Link
                      to={`${import.meta.env.VITE_MERCHANT_URL}/register`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="bg-poso-primary text-white px-6 py-2 rounded-full font-semibold hover:text-white hover:bg-poso-primary-hover transition-colors text-center"
                    >
                      Dùng thử miễn phí
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
