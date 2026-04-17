import { useState } from "react";
import { Link } from "react-router";

type HeaderVariant = "home" | "page";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Tính năng", href: "/#features", external: true },
  { label: "Giải pháp", href: "/#solutions", external: true },
  { label: "Bảng giá", href: "/#pricing", external: true },
  { label: "Khách hàng", href: "/#customers", external: true },
  { label: "Tài nguyên", href: "/tai-nguyen" },
  { label: "Hỗ trợ", href: "/ho-tro" },
];

export function SiteHeader({ variant }: { variant: HeaderVariant }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center">
          <img src="/branding/poso-logo-grocery.png" alt="POSO" className="h-8 w-auto" />
        </Link>

        <div className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-poso-dark transition hover:text-poso-primary"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="font-medium text-poso-dark transition hover:text-poso-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:block">
          <Link
            to={`${import.meta.env.VITE_MERCHANT_URL}`}
            className={`rounded-full px-5 py-2 font-semibold transition ${
              variant === "home"
                ? "bg-poso-primary text-white hover:bg-poso-primary-hover"
                : "border border-poso-primary text-poso-primary hover:bg-poso-primary hover:text-white"
            }`}
          >
            Dùng thử miễn phí
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-orange-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.flatMap((item) =>
              item.external
                ? [
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg px-3 py-2 font-medium text-poso-dark transition hover:bg-orange-50"
                    >
                      {item.label}
                    </a>,
                  ]
                : [
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg px-3 py-2 font-medium text-poso-dark transition hover:bg-orange-50"
                    >
                      {item.label}
                    </Link>,
                  ]
            )}

            <Link
              to={`${import.meta.env.VITE_MERCHANT_URL}`}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-full bg-poso-primary px-5 py-2 text-center font-semibold text-white"
            >
              Dùng thử miễn phí
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
