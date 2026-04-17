import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link, NavLink } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
const meta$e = () => {
  return [{
    title: "POSO – Nền tảng POS quản lý bán hàng bất kỳ ngành nghề nào"
  }, {
    name: "description",
    content: "POSO giúp bất kỳ ngành nghề nào quản lý bán hàng một cách hiệu quả và tiện lợi."
  }];
};
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "vi",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/favicon.png"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  meta: meta$e
}, Symbol.toStringTag, { value: "Module" }));
const navItems = [
  { label: "Tính năng", href: "/#features", external: true },
  { label: "Giải pháp", href: "/#solutions", external: true },
  { label: "Bảng giá", href: "/#pricing", external: true },
  { label: "Khách hàng", href: "/#customers", external: true },
  { label: "Tài nguyên", href: "/tai-nguyen" },
  { label: "Hỗ trợ", href: "/ho-tro" }
];
function SiteHeader({ variant }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur", children: [
    /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsx("img", { src: "/branding/poso-logo-grocery.png", alt: "POSO", className: "h-8 w-auto" }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden items-center gap-6 text-sm md:flex", children: navItems.map(
        (item) => item.external ? /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: "font-medium text-poso-dark transition hover:text-poso-primary",
            children: item.label
          },
          item.label
        ) : /* @__PURE__ */ jsx(
          Link,
          {
            to: item.href,
            className: "font-medium text-poso-dark transition hover:text-poso-primary",
            children: item.label
          },
          item.label
        )
      ) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(
        Link,
        {
          to: `${"https://app.poso.vn"}`,
          className: `rounded-full px-5 py-2 font-semibold transition ${variant === "home" ? "bg-poso-primary text-white hover:bg-poso-primary-hover" : "border border-poso-primary text-poso-primary hover:bg-poso-primary hover:text-white"}`,
          children: "Dùng thử miễn phí"
        }
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setMobileMenuOpen((v) => !v),
          className: "p-2 md:hidden",
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: mobileMenuOpen ? /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
        }
      )
    ] }),
    mobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "border-t border-orange-100 bg-white px-4 py-4 md:hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      navItems.flatMap(
        (item) => item.external ? [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              onClick: () => setMobileMenuOpen(false),
              className: "rounded-lg px-3 py-2 font-medium text-poso-dark transition hover:bg-orange-50",
              children: item.label
            },
            item.label
          )
        ] : [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: item.href,
              onClick: () => setMobileMenuOpen(false),
              className: "rounded-lg px-3 py-2 font-medium text-poso-dark transition hover:bg-orange-50",
              children: item.label
            },
            item.label
          )
        ]
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: `${"https://app.poso.vn"}`,
          onClick: () => setMobileMenuOpen(false),
          className: "mt-2 rounded-full bg-poso-primary px-5 py-2 text-center font-semibold text-white",
          children: "Dùng thử miễn phí"
        }
      )
    ] }) })
  ] });
}
function HomeFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-poso-dark text-white py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "POSO POS", className: "w-20 h-6" }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400  leading-relaxed", children: "POSO xây dựng Mobile App và Web App giúp cửa hàng tạp hoá bán hàng nhanh, quản lý gọn và vận hành ổn định mỗi ngày." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-4", children: "Sản phẩm" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-400 ", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#features", className: "hover:text-white transition-colors", children: "Tính năng" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#solutions", className: "hover:text-white transition-colors", children: "Giải pháp" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#pricing", className: "hover:text-white transition-colors", children: "Bảng giá" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#customers", className: "hover:text-white transition-colors", children: "Khách hàng" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-4", children: "Tài nguyên" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-400 ", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/tai-nguyen", className: "hover:text-white transition-colors", children: "Blog & tài nguyên" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/news", className: "hover:text-white transition-colors", children: "Tin tức" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/faq", className: "hover:text-white transition-colors", children: "FAQ" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ho-tro", className: "hover:text-white transition-colors", children: "Trung tâm hỗ trợ" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-4", children: "Liên hệ" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-400 ", children: [
          /* @__PURE__ */ jsx("li", { children: "Email: poso@autuna.com" }),
          /* @__PURE__ */ jsx("li", { children: "Địa chỉ: 198 QL55, Xã Hàm Tân, Tỉnh Lâm Đồng Việt Nam" }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-white transition-colors", children: "Liên hệ tư vấn" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-white transition-colors", children: "Về POSO" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-4", children: "Xã hội" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-poso-primary transition-colors",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-5 h-5",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-poso-primary transition-colors",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-5 h-5",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
                }
              )
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-gray-700 pt-8 text-center text-gray-400 ", children: /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 ", children: [
      /* @__PURE__ */ jsx("p", { children: "© 2024 POSO POS. Tất cả quyền được bảo lưu." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/terms",
          className: "mx-2 text-amber-500 hover:text-white underline",
          children: "Điều khoản & Điều kiện"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/privacy",
          className: "mx-2 text-amber-500 hover:text-white underline",
          children: "Chính sách Quyền riêng tư"
        }
      )
    ] }) })
  ] }) });
}
const heroMetrics = [
  { label: "Nhà bán hàng tin dùng", value: "3.000+" },
  { label: "Đơn hàng xử lý mỗi ngày", value: "150.000+" },
  { label: "Tỷ lệ vận hành ổn định", value: "98%" }
];
const heroQuickLinks = [
  { title: "POSO Mobile App", href: "/#features" },
  { title: "POSO Web App", href: "/#features" },
  { title: "Bảng giá triển khai", href: "/#pricing" }
];
const businessSuite = [
  {
    key: "ban-hang",
    title: "Quản lý bán hàng",
    description: "Tối ưu bán hàng tại quầy trên Web App và kiểm soát doanh thu tức thời trên Mobile App.",
    bullets: [
      "Xử lý đơn nhanh, hạn chế sai sót giờ cao điểm",
      "Quản lý kho, thu chi, nhân viên trong cùng một hệ thống",
      "Theo dõi doanh thu/lợi nhuận theo ca và theo ngày"
    ],
    image: "/poso-screens/image-6.png"
  },
  {
    key: "hoa-don",
    title: "Hóa đơn điện tử",
    description: "Đồng bộ dữ liệu bán hàng để xuất hóa đơn nhanh và chuẩn theo quy trình vận hành cửa hàng.",
    bullets: [
      "Giảm thao tác thủ công khi phát hành hóa đơn",
      "Đối soát thông tin đơn hàng chính xác",
      "Rút ngắn thời gian xử lý cuối ngày"
    ],
    image: "/poso-screens/image-8.png"
  },
  {
    key: "bao-cao",
    title: "Báo cáo quản trị",
    description: "Cung cấp dashboard tổng quan cho chủ tiệm: doanh thu, hàng bán chạy, tồn kho và công nợ.",
    bullets: [
      "Nhìn toàn cảnh vận hành theo thời gian thực",
      "Theo dõi KPI cửa hàng theo ngày/tuần/tháng",
      "Hỗ trợ ra quyết định nhập hàng và dòng tiền"
    ],
    image: "/poso-mobile-screen/image-1.png"
  },
  {
    key: "mo-rong",
    title: "Mở rộng kinh doanh",
    description: "Sẵn sàng mở rộng thêm kênh bán và điểm bán mà vẫn giữ dữ liệu tập trung.",
    bullets: [
      "Đồng bộ giữa quầy bán và quản trị từ xa",
      "Chuẩn hóa quy trình cho nhiều nhân sự",
      "Dễ mở rộng quy mô mà không tăng độ phức tạp vận hành"
    ],
    image: "/poso-mobile-screen/image-5.png"
  }
];
const onlineChannels = [
  {
    title: "Mở rộng cơ hội tiếp cận khách hàng",
    description: "Kết hợp bán tại quầy, quản lý từ xa và đồng bộ dữ liệu để tối đa doanh thu mỗi ngày.",
    image: "/images/poso_sunmi_device.png"
  },
  {
    title: "Quản lý tập trung tại một nơi",
    description: "Hàng hóa, đơn hàng, tồn kho và báo cáo được quản lý tập trung trên hệ thống POSO.",
    image: "/poso-screens/image-10.png"
  },
  {
    title: "Trải nghiệm liền mạch cho chủ và nhân viên",
    description: "Nhân viên thao tác nhanh trên Web App, chủ tiệm giám sát tức thì trên Mobile App.",
    image: "/poso-mobile-screen/image-3.png"
  }
];
const industrySegments = [
  {
    title: "Tạp hoá dân sinh",
    description: "Quản lý hàng bán nhanh, thu ngân gọn, kiểm tồn mỗi ngày.",
    image: "/poso-screens/image-6.png"
  },
  {
    title: "Cửa hàng thực phẩm",
    description: "Theo dõi giá vốn và biên lợi nhuận theo nhóm hàng.",
    image: "/poso-screens/image-8.png"
  },
  {
    title: "Minimart quy mô nhỏ",
    description: "Đồng bộ dữ liệu quầy và quản trị từ xa trên điện thoại.",
    image: "/poso-mobile-screen/image-2.png"
  },
  {
    title: "Chuỗi cửa hàng địa phương",
    description: "Xem báo cáo hợp nhất, phân quyền theo vai trò nhân sự.",
    image: "/poso-mobile-screen/image-5.png"
  }
];
const customerLogos = [
  { name: "Phở Thìn", image: "/partner/phothin-logo.png" },
  { name: "Bánh mì", image: "/partner/banhmi-logo.png" },
  { name: "Sasin", image: "/partner/sasin-logo.jpg" },
  { name: "Nấu Bụi", image: "/partner/naubui-logo.jpg" }
];
const appProduct = {
  name: "POSO - Bán hàng tinh gọn cho tạp hoá",
  downloads: "10.000+ lượt tải",
  description: "Một ứng dụng duy nhất cho chủ tiệm tạp hoá, đồng bộ dữ liệu với hệ thống bán hàng của POSO."
};
const appReviews = [
  {
    quote: "Không còn lo sai lệch dữ liệu cuối ca. Mình xem được toàn bộ doanh thu ngay trên điện thoại.",
    author: "Cửa hàng Hương Việt"
  },
  {
    quote: "Web App chạy rất mượt khi đông khách, thao tác bán hàng nhanh và dễ đào tạo nhân viên mới.",
    author: "Tạp hoá An Phúc"
  },
  {
    quote: "Mobile App giúp mình đi ra ngoài vẫn theo dõi được tồn kho và dòng tiền trong ngày.",
    author: "Minimart Gia Hân"
  }
];
const featuredNews = [
  {
    title: "Cách setup POSO trong 1 ngày cho tạp hoá mới mở",
    description: "Checklist từng bước để cửa hàng vận hành ổn định ngay tuần đầu.",
    href: "/news"
  },
  {
    title: "5 chỉ số nên xem mỗi tối trên POSO Mobile App",
    description: "Doanh thu, lãi gộp, hàng bán nhanh, tồn thấp và công nợ phải trả.",
    href: "/news"
  },
  {
    title: "Quy trình chuẩn nhập hàng - bán hàng - kiểm kho",
    description: "Giảm sai lệch tồn và tiết kiệm thời gian đối soát cuối ngày.",
    href: "/news"
  }
];
const supportChannels = [
  {
    title: "Hotline tư vấn",
    detail: "1800 7777",
    note: "Hỗ trợ triển khai và tối ưu vận hành theo mô hình cửa hàng."
  },
  {
    title: "Chăm sóc khách hàng",
    detail: "1900 9999",
    note: "Đồng hành 365 ngày/năm từ 7:00 đến 22:00 kể cả cuối tuần."
  },
  {
    title: "Chat Web & Mobile",
    detail: "support@poso.vn",
    note: "Phản hồi nhanh các vấn đề thao tác và dữ liệu trong quá trình sử dụng."
  }
];
const painPoints = [
  {
    title: "Bán đông là dễ sai bill",
    description: "Giờ cao điểm dễ nhầm giá, nhầm số lượng và khó rà soát lại cuối ca."
  },
  {
    title: "Không theo kịp tồn kho hàng nhanh",
    description: "Nước ngọt, mì gói, gia vị quay vòng nhanh nhưng không có cảnh báo kịp thời."
  },
  {
    title: "Chủ tiệm đi vắng là thiếu dữ liệu",
    description: "Không có dashboard từ xa trên điện thoại để nắm doanh thu, thu chi theo ca."
  },
  {
    title: "Web bán hàng không đồng bộ quầy",
    description: "Đơn online và bán tại quầy tách rời, dẫn tới lệch tồn và xử lý chậm."
  }
];
const workflowSteps = [
  {
    title: "Nhập hàng",
    description: "Tạo phiếu nhập, cập nhật giá vốn và công nợ nhà cung cấp."
  },
  {
    title: "Bán hàng",
    description: "Thanh toán nhanh tại quầy, dữ liệu đẩy về hệ thống tức thì."
  },
  {
    title: "Đồng bộ online",
    description: "Đơn web app và dữ liệu quầy tự đồng bộ về cùng một nguồn."
  },
  {
    title: "Chốt sổ",
    description: "Chủ tiệm mở app xem toàn bộ báo cáo cuối ngày trong vài phút."
  }
];
const pricingPlans = [
  {
    name: "Mobile",
    price: "199.000đ/tháng",
    subtitle: "Cho cửa hàng cần quản lý nhanh trên điện thoại",
    features: [
      "Dashboard doanh thu theo ngày",
      "Cảnh báo tồn kho cơ bản",
      "Theo dõi công nợ nhà cung cấp"
    ]
  },
  {
    name: "Omni",
    price: "399.000đ/tháng",
    subtitle: "Mobile App + Web App cho vận hành đầy đủ",
    featured: true,
    features: [
      "Toàn bộ gói Mobile",
      "Bán hàng quầy trên Web App",
      "Quản lý nhập hàng và giá vốn chi tiết",
      "Báo cáo lãi gộp theo nhóm hàng"
    ]
  },
  {
    name: "Chain",
    price: "699.000đ/tháng",
    subtitle: "Cho nhiều điểm bán hoặc cửa hàng quy mô lớn",
    features: [
      "Toàn bộ gói Omni",
      "Dashboard đa chi nhánh",
      "Phân quyền nâng cao theo vai trò",
      "Onboarding và CSKH ưu tiên"
    ]
  }
];
const faqs = [
  {
    question: "POSO có bắt buộc mua máy mới không?",
    answer: "Không bắt buộc. Bạn có thể bắt đầu với Mobile App và Web App trên thiết bị sẵn có, rồi nâng cấp phần cứng khi cần."
  },
  {
    question: "Web App và Mobile App có đồng bộ dữ liệu không?",
    answer: "Có. Đơn hàng, tồn kho, thu chi và báo cáo được đồng bộ trong cùng một hệ thống dữ liệu."
  },
  {
    question: "Đội POSO có hỗ trợ đưa dữ liệu hàng hoá ban đầu không?",
    answer: "Có. POSO hỗ trợ onboarding và hướng dẫn nhập danh mục hàng để cửa hàng vận hành ổn định sớm."
  },
  {
    question: "Mất bao lâu để đội nhân viên làm quen?",
    answer: "Đa số cửa hàng có thể làm quen thao tác chính trong ngày đầu, đặc biệt phần thu ngân trên Web App."
  }
];
function HomeHeroSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -left-20 -top-20 h-80 w-80 rounded-full bg-orange-100 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -right-20 top-10 h-80 w-80 rounded-full bg-orange-50 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-4 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "inline-flex rounded-full bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-wide text-poso-primary", children: "Nền tảng quản lý bán hàng cho tạp hoá" }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-4 text-4xl font-extrabold leading-tight text-poso-dark md:text-5xl", children: [
            "Một nền tảng, mọi nghiệp vụ",
            /* @__PURE__ */ jsx("span", { className: "block text-poso-primary", children: "bán hàng và quản lý cửa hàng" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xl leading-7 text-[#355b63] md:text-lg", children: "POSO giúp chủ tiệm xử lý bán hàng tại quầy, đồng bộ tồn kho và theo dõi báo cáo tức thời trên Mobile App và Web App." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: `${"https://app.poso.vn"}`,
                className: "rounded-xl bg-poso-primary px-6 py-3 text-center font-semibold text-white transition hover:bg-poso-primary-hover",
                children: "Dùng thử miễn phí"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/#solutions",
                className: "rounded-xl bg-[#111827] px-6 py-3 text-center font-semibold text-white",
                children: "Xem giải pháp"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-3 gap-3 text-sm", children: heroMetrics.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-orange-50/60 p-3", children: [
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-extrabold text-poso-primary", children: item.value }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[#355b63]", children: item.label })
          ] }, item.label)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full max-w-lg", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/hero_poso_manager.png",
              alt: "POSO giao diện quản lý",
              className: "w-full object-contain drop-shadow-2xl"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/poso-mobile-screen/image-1.png",
              alt: "POSO mobile",
              className: "absolute -bottom-8 -left-10 hidden w-36 rounded-2xl bg-white p-2 shadow-lg md:block"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-3 md:grid-cols-3", children: heroQuickLinks.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.href,
          className: "rounded-xl bg-[#f8fafc] px-4 py-3 text-sm font-semibold text-poso-dark transition hover:text-poso-primary",
          children: item.title
        },
        item.title
      )) })
    ] })
  ] });
}
function HomeCustomersSection() {
  return /* @__PURE__ */ jsx("section", { id: "customers", className: "border-y border-[#f1f5f9] bg-[#f8fafc] py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-[#355b63]", children: "Được tin dùng bởi nhiều thương hiệu bán lẻ" }),
      /* @__PURE__ */ jsx(Link, { to: "/#pricing", className: "hidden text-sm font-bold text-poso-primary md:block", children: "Xem bảng giá" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4", children: customerLogos.map((logo) => /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-white px-4 py-3 text-center", children: /* @__PURE__ */ jsx("img", { src: logo.image, alt: logo.name, className: "mx-auto h-10 w-auto object-contain" }) }, logo.name)) })
  ] }) });
}
function HomeBusinessSuiteSection() {
  const primary = businessSuite[0];
  return /* @__PURE__ */ jsxs("section", { id: "solutions", className: "mx-auto max-w-6xl px-4 py-16", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-poso-primary", children: "Một nền tảng, mọi giải pháp" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold leading-tight md:text-4xl", children: "POSO cung cấp bộ công cụ vận hành toàn diện cho cửa hàng" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-3 md:grid-cols-4", children: businessSuite.map((item) => /* @__PURE__ */ jsxs("article", { className: "rounded-2xl bg-[#f8fafc] p-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-poso-dark", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-[#355b63]", children: item.description })
    ] }, item.key)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-8 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-[1fr_360px] md:items-center md:p-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-poso-dark", children: primary.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 leading-7 text-[#355b63]", children: primary.description }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-[#355b63]", children: primary.bullets.map((bullet) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1 inline-block h-2 w-2 rounded-full bg-poso-primary" }),
          /* @__PURE__ */ jsx("span", { children: bullet })
        ] }, bullet)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center md:justify-end", children: /* @__PURE__ */ jsx("img", { src: primary.image, alt: primary.title, className: "max-h-[340px] w-auto object-contain" }) })
    ] })
  ] });
}
function HomeOnlineSection() {
  return /* @__PURE__ */ jsx("section", { id: "features", className: "bg-[#f8fafc] py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-poso-primary", children: "Tính năng nổi bật" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold leading-tight text-poso-dark md:text-4xl", children: "Tăng trưởng doanh thu với bộ tính năng vận hành thực chiến" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-4", children: onlineChannels.map((item, idx) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "grid gap-6 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:items-center",
        children: [
          /* @__PURE__ */ jsxs("div", { className: idx % 2 === 1 ? "md:order-2" : "", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-poso-dark", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 leading-7 text-[#355b63]", children: item.description })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `flex justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`, children: /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "max-h-[280px] w-auto object-contain" }) })
        ]
      },
      item.title
    )) })
  ] }) });
}
function HomeIndustrySection() {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-poso-primary", children: "Giải pháp theo ngành hàng" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold leading-tight md:text-4xl", children: "Phù hợp nhiều mô hình bán lẻ từ tạp hoá đến chuỗi nhỏ" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-2", children: industrySegments.map((item) => /* @__PURE__ */ jsxs("article", { className: "grid gap-4 rounded-2xl bg-[#f8fafc] p-5 sm:grid-cols-[1fr_120px] sm:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-poso-dark", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 leading-7 text-[#355b63]", children: item.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center sm:justify-end", children: /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "h-28 w-auto object-contain" }) })
    ] }, item.title)) })
  ] });
}
function HomePainSection() {
  return /* @__PURE__ */ jsxs("section", { id: "solutions", className: "mx-auto max-w-6xl px-4 py-16", children: [
    /* @__PURE__ */ jsx(
      SectionHeader$3,
      {
        eyebrow: "Nỗi đau vận hành",
        title: "Các vấn đề tạp hoá gặp mỗi ngày",
        subtitle: "Copy tập trung vào tình huống thực tế để khách hàng thấy rõ POSO giải quyết đúng việc cần làm ngay."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-2", children: painPoints.map((item) => /* @__PURE__ */ jsxs("article", { className: "rounded-2xl bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-poso-dark", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 leading-7 text-[#355b63]", children: item.description })
    ] }, item.title)) })
  ] });
}
function SectionHeader$3({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxs("header", { children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-poso-primary", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold leading-tight md:text-4xl", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl leading-7 text-[#355b63]", children: subtitle })
  ] });
}
function HomeWorkflowSection() {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16", children: [
    /* @__PURE__ */ jsx(
      SectionHeader$2,
      {
        eyebrow: "Giải pháp theo luồng",
        title: "Quy trình tinh gọn cho tạp hoá",
        subtitle: "POSO chuẩn hoá 4 bước vận hành để cửa hàng đồng nhất dữ liệu giữa Web App và Mobile App."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-4", children: workflowSteps.map((step, idx) => /* @__PURE__ */ jsxs("article", { className: "rounded-2xl bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-poso-primary", children: String(idx + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-xl font-bold", children: step.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 leading-7 text-[#355b63]", children: step.description })
    ] }, step.title)) })
  ] });
}
function SectionHeader$2({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxs("header", { children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-poso-primary", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold leading-tight md:text-4xl", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl leading-7 text-[#355b63]", children: subtitle })
  ] });
}
function HomeAppStoreSection() {
  const appStoreUrl = "#";
  const chPlayUrl = "#";
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-poso-primary", children: "Tải ứng dụng POSO" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold leading-tight md:text-4xl", children: "Một app duy nhất cho cửa hàng tạp hoá trên App Store và CH Play" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-[120px_1fr] md:items-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/branding/poso-playstore-icon.png",
            alt: appProduct.name,
            className: "h-24 w-24 rounded-3xl bg-orange-50 p-2 object-contain"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-poso-dark", children: appProduct.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-semibold text-poso-primary", children: appProduct.downloads }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 leading-7 text-[#355b63]", children: appProduct.description })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: appStoreUrl,
            target: "_blank",
            rel: "noreferrer",
            className: "rounded-xl bg-[#111827] px-6 py-3 text-center font-semibold text-white",
            children: "Tải trên App Store"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: chPlayUrl,
            target: "_blank",
            rel: "noreferrer",
            className: "rounded-xl bg-poso-primary px-6 py-3 text-center font-semibold text-white",
            children: "Tải trên CH Play"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-3", children: appReviews.map((review) => /* @__PURE__ */ jsxs("article", { className: "rounded-2xl bg-white p-5 shadow-sm", children: [
      /* @__PURE__ */ jsxs("p", { className: "leading-7 text-[#355b63]", children: [
        '"',
        review.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm font-semibold text-poso-dark", children: review.author }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-amber-500", children: "★★★★★" })
    ] }, review.author)) })
  ] });
}
function HomePricingSection() {
  return /* @__PURE__ */ jsxs("section", { id: "pricing", className: "mx-auto max-w-6xl px-4 py-16", children: [
    /* @__PURE__ */ jsx(
      SectionHeader$1,
      {
        eyebrow: "Bảng giá",
        title: "Chọn gói theo mô hình vận hành thực tế",
        subtitle: "Production copy tối ưu chuyển đổi: mô tả rõ ai dùng gói nào, tránh thông điệp mơ hồ."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-3", children: pricingPlans.map((plan) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: `rounded-2xl p-6 shadow-sm ${plan.featured ? "bg-orange-50" : "bg-white"}`,
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: plan.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-3xl font-extrabold text-poso-primary", children: plan.price }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[#355b63]", children: plan.subtitle }),
          /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2 text-sm text-[#355b63]", children: plan.features.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1 inline-block h-2 w-2 rounded-full bg-poso-primary" }),
            /* @__PURE__ */ jsx("span", { children: feature })
          ] }, feature)) }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: `${"https://app.poso.vn"}`,
              className: "mt-6 inline-block w-full rounded-lg bg-poso-primary px-4 py-3 text-center font-semibold text-white transition hover:bg-poso-primary-hover",
              children: [
                "Dùng thử gói ",
                plan.name
              ]
            }
          )
        ]
      },
      plan.name
    )) })
  ] });
}
function SectionHeader$1({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxs("header", { children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-poso-primary", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold leading-tight md:text-4xl", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl leading-7 text-[#355b63]", children: subtitle })
  ] });
}
function HomeLandingCtaSection() {
  return /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-gradient-to-r from-poso-primary to-[#ff8f3f] p-8 text-white md:p-12", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold leading-tight md:text-4xl", children: "Sẵn sàng triển khai POSO cho cửa hàng của bạn?" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl leading-7 text-orange-50", children: "Dùng thử miễn phí để trải nghiệm đầy đủ luồng bán hàng trên Web App và quản lý từ xa trên Mobile App. Nếu cần tài liệu hoặc hỗ trợ triển khai, đội POSO luôn sẵn sàng đồng hành." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-3 sm:flex-row", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: `${"https://app.poso.vn"}`,
          className: "rounded-xl bg-white px-6 py-3 text-center font-semibold text-poso-primary",
          children: "Dùng thử miễn phí"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/tai-nguyen",
          className: "rounded-xl bg-white/20 px-6 py-3 text-center font-semibold text-white",
          children: "Xem tài nguyên blog"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/ho-tro",
          className: "rounded-xl bg-white/20 px-6 py-3 text-center font-semibold text-white",
          children: "Xem hỗ trợ"
        }
      )
    ] })
  ] }) }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-white text-poso-dark", children: [
    /* @__PURE__ */ jsx(HomeHeroSection, {}),
    /* @__PURE__ */ jsx(HomeCustomersSection, {}),
    /* @__PURE__ */ jsx(HomeBusinessSuiteSection, {}),
    /* @__PURE__ */ jsx(HomeOnlineSection, {}),
    /* @__PURE__ */ jsx(HomeIndustrySection, {}),
    /* @__PURE__ */ jsx(HomePainSection, {}),
    /* @__PURE__ */ jsx(HomeWorkflowSection, {}),
    /* @__PURE__ */ jsx(HomeAppStoreSection, {}),
    /* @__PURE__ */ jsx(HomePricingSection, {}),
    /* @__PURE__ */ jsx(HomeLandingCtaSection, {})
  ] });
}
function meta$d({}) {
  return [{
    title: "POSO | Bán hàng tinh gọn dành cho tạp hoá"
  }, {
    name: "description",
    content: "POSO giúp cửa hàng tạp hoá bán nhanh tại quầy, quản lý tồn kho chính xác và chốt sổ cuối ngày trong 5 phút."
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "home"
    }), /* @__PURE__ */ jsx(HomePage, {}), /* @__PURE__ */ jsx(HomeFooter, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$d
}, Symbol.toStringTag, { value: "Module" }));
function PageHero({ title, subtitle }) {
  return /* @__PURE__ */ jsx("section", { className: "page-hero py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-poso-dark mb-4", children: title }),
    subtitle ? /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-poso-gray opacity-80", children: subtitle }) : null
  ] }) }) });
}
function PageFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#191b1e] text-white py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "POSO POS", className: "w-20 h-6" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400  pt-4", children: "Giải pháp quản lý bán hàng hàng đầu" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-4", children: "Sản phẩm" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-400 ", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#features", className: "hover:text-white transition-colors", children: "Tính năng" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#solutions", className: "hover:text-white transition-colors", children: "Giải pháp" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#pricing", className: "hover:text-white transition-colors", children: "Bảng giá" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-4", children: "Tài nguyên" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-400 ", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/tai-nguyen",
              className: "hover:text-white transition-colors",
              children: "Blog & tài nguyên"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/news",
              className: "hover:text-white transition-colors",
              children: "Tin tức"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/faq", className: "hover:text-white transition-colors", children: "FAQ" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-4", children: "Hỗ trợ" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-400 ", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ho-tro", className: "hover:text-white transition-colors", children: "Trung tâm hỗ trợ" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-white transition-colors", children: "Liên hệ" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-4", children: "Công ty" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-400 ", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-white transition-colors", children: "Giới thiệu" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#customers", className: "hover:text-white transition-colors", children: "Khách hàng" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 ", children: [
      /* @__PURE__ */ jsx("p", { children: "© 2024 POSO POS. Tất cả quyền được bảo lưu." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/terms",
          className: "mx-2 text-amber-500 hover:text-white underline",
          children: "Điều khoản & Điều kiện"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/privacy",
          className: "mx-2 text-amber-500 hover:text-white underline",
          children: "Chính sách Quyền riêng tư"
        }
      )
    ] })
  ] }) });
}
function HomeResourcesSection() {
  return /* @__PURE__ */ jsxs("section", { id: "resources", className: "mx-auto max-w-6xl px-4 py-16", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-poso-primary", children: "Tin tức nổi bật" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold leading-tight md:text-4xl", children: "Cập nhật xu hướng và kinh nghiệm vận hành cửa hàng" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-3", children: featuredNews.map((news2) => /* @__PURE__ */ jsxs("a", { href: news2.href, className: "rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: news2.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 leading-7 text-[#355b63]", children: news2.description }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm font-semibold text-poso-primary", children: "Đọc tiếp" })
    ] }, news2.title)) })
  ] });
}
function meta$c({}) {
  return [{
    title: "Tài nguyên | POSO"
  }, {
    name: "description",
    content: "Kho tài nguyên vận hành cửa hàng tạp hoá: checklist triển khai, chỉ số cần theo dõi và quy trình tối ưu hằng ngày."
  }];
}
const taiNguyen = UNSAFE_withComponentProps(function TaiNguyenPage() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "page"
    }), /* @__PURE__ */ jsx(PageHero, {
      title: "Tài nguyên vận hành tạp hoá",
      subtitle: "Tài liệu thực chiến giúp đội cửa hàng triển khai POSO nhanh và đúng quy trình"
    }), /* @__PURE__ */ jsx(HomeResourcesSection, {}), /* @__PURE__ */ jsx(PageFooter, {})]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: taiNguyen,
  meta: meta$c
}, Symbol.toStringTag, { value: "Module" }));
function HomeFaqSection() {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-4xl px-4 py-16", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "FAQ",
        title: "Câu hỏi thường gặp trước khi triển khai POSO",
        subtitle: "Bản copy dạng trả lời ngắn, rõ và thực dụng để giảm rào cản đăng ký dùng thử."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-3", children: faqs.map((faq2) => /* @__PURE__ */ jsxs("details", { className: "rounded-xl bg-white p-5 shadow-sm", children: [
      /* @__PURE__ */ jsx("summary", { className: "cursor-pointer list-none font-semibold text-poso-dark", children: faq2.question }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 leading-7 text-[#355b63]", children: faq2.answer })
    ] }, faq2.question)) })
  ] });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxs("header", { children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-poso-primary", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold leading-tight md:text-4xl", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl leading-7 text-[#355b63]", children: subtitle })
  ] });
}
function HomeSupportSection() {
  return /* @__PURE__ */ jsx("section", { id: "support", className: "pb-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-gradient-to-r from-poso-primary to-[#ff8f3f] p-8 text-white md:p-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold leading-tight md:text-4xl", children: "Hãy để POSO đồng hành kinh doanh cùng bạn" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl leading-7 text-orange-50", children: "Dùng thử miễn phí để trải nghiệm đầy đủ POSO Mobile App và POSO Web App. Đội ngũ triển khai hỗ trợ từ setup ban đầu đến khi cửa hàng chạy ổn định." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: `${"https://app.poso.vn"}`,
            className: "rounded-xl bg-white px-6 py-3 text-center font-semibold text-poso-primary",
            children: "Dùng thử miễn phí"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/ho-tro",
            className: "rounded-xl bg-white/20 px-6 py-3 text-center font-semibold text-white",
            children: "Xem kênh hỗ trợ"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-3", children: supportChannels.map((channel) => /* @__PURE__ */ jsxs("article", { className: "rounded-2xl bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-poso-primary", children: channel.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-2xl font-bold text-poso-dark", children: channel.detail }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 leading-7 text-[#355b63]", children: channel.note })
    ] }, channel.title)) })
  ] }) });
}
function meta$b({}) {
  return [{
    title: "Hỗ trợ | POSO"
  }, {
    name: "description",
    content: "Hỗ trợ triển khai POSO cho cửa hàng tạp hoá: onboarding, FAQ, tư vấn vận hành Mobile App và Web App."
  }];
}
const hoTro = UNSAFE_withComponentProps(function HoTroPage() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "page"
    }), /* @__PURE__ */ jsx(PageHero, {
      title: "Hỗ trợ triển khai POSO",
      subtitle: "Đồng hành từ setup dữ liệu ban đầu đến vận hành ổn định mỗi ngày"
    }), /* @__PURE__ */ jsx(HomeFaqSection, {}), /* @__PURE__ */ jsx(HomeSupportSection, {}), /* @__PURE__ */ jsx(PageFooter, {})]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hoTro,
  meta: meta$b
}, Symbol.toStringTag, { value: "Module" }));
function meta$a({}) {
  return [{
    title: "Điều khoản và Điều kiện - POSO"
  }, {
    name: "description",
    content: "Điều khoản và điều kiện sử dụng hệ thống POSO"
  }];
}
const terms = UNSAFE_withComponentProps(function Terms() {
  return /* @__PURE__ */ jsxs("div", {
    className: "mx-4 max-w-4xl py-6 md:mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "mb-6 text-center text-2xl font-bold",
      children: "Điều khoản và Điều kiện sử dụng"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-4",
      children: "Khi truy cập hoặc sử dụng nền tảng POSO (“dịch vụ”), bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý với các Điều khoản và Điều kiện này. Nếu bạn không đồng ý, vui lòng ngừng sử dụng dịch vụ."
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "1. Định nghĩa"
    }), /* @__PURE__ */ jsxs("ul", {
      className: "mb-4 list-disc pl-6",
      children: [/* @__PURE__ */ jsxs("li", {
        children: [/* @__PURE__ */ jsx("strong", {
          children: "POSO"
        }), ": nền tảng phần mềm quản lý bán hàng (POS) do chúng tôi cung cấp."]
      }), /* @__PURE__ */ jsxs("li", {
        children: [/* @__PURE__ */ jsx("strong", {
          children: "Người dùng"
        }), ": cá nhân hoặc tổ chức sử dụng POSO."]
      }), /* @__PURE__ */ jsxs("li", {
        children: [/* @__PURE__ */ jsx("strong", {
          children: "Dữ liệu"
        }), ": mọi thông tin phát sinh trong quá trình sử dụng hệ thống."]
      })]
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "2. Điều kiện sử dụng dịch vụ"
    }), /* @__PURE__ */ jsxs("ul", {
      className: "mb-4 list-disc pl-6",
      children: [/* @__PURE__ */ jsx("li", {
        children: "Người dùng phải cung cấp thông tin chính xác khi đăng ký."
      }), /* @__PURE__ */ jsx("li", {
        children: "Chịu trách nhiệm bảo mật tài khoản và các hoạt động phát sinh từ tài khoản của mình."
      }), /* @__PURE__ */ jsx("li", {
        children: "Không sử dụng POSO cho các mục đích trái pháp luật hoặc gian lận."
      })]
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "3. Quyền và nghĩa vụ của người dùng"
    }), /* @__PURE__ */ jsxs("ul", {
      className: "mb-4 list-disc pl-6",
      children: [/* @__PURE__ */ jsx("li", {
        children: "Sử dụng dịch vụ đúng mục đích kinh doanh hợp pháp."
      }), /* @__PURE__ */ jsx("li", {
        children: "Tự chịu trách nhiệm về dữ liệu, hóa đơn và giao dịch."
      }), /* @__PURE__ */ jsx("li", {
        children: "Không can thiệp, phá hoại hoặc truy cập trái phép vào hệ thống."
      })]
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "4. Quyền và trách nhiệm của POSO"
    }), /* @__PURE__ */ jsxs("ul", {
      className: "mb-4 list-disc pl-6",
      children: [/* @__PURE__ */ jsx("li", {
        children: "Duy trì và cải tiến chất lượng dịch vụ."
      }), /* @__PURE__ */ jsx("li", {
        children: "Tạm ngưng hoặc chấm dứt cung cấp dịch vụ khi người dùng vi phạm điều khoản."
      }), /* @__PURE__ */ jsx("li", {
        children: "Không chịu trách nhiệm đối với thiệt hại gián tiếp phát sinh trong quá trình sử dụng."
      })]
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "5. Dữ liệu và quyền sở hữu"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-4",
      children: "Người dùng sở hữu toàn bộ dữ liệu phát sinh từ hoạt động kinh doanh của mình. POSO chỉ sử dụng dữ liệu này nhằm mục đích vận hành, cải thiện dịch vụ và tuân thủ quy định pháp luật."
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "6. Thanh toán và phí dịch vụ"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-4",
      children: "Một số tính năng của POSO có thể yêu cầu trả phí. Mức phí, chu kỳ thanh toán và chính sách hoàn tiền (nếu có) sẽ được công bố rõ ràng trước khi người dùng đăng ký sử dụng."
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "7. Giới hạn trách nhiệm"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-4",
      children: "POSO không chịu trách nhiệm đối với mất mát dữ liệu, gián đoạn kinh doanh hoặc thiệt hại phát sinh do lỗi kỹ thuật, sự cố mạng hoặc yếu tố ngoài tầm kiểm soát."
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "8. Chấm dứt dịch vụ"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-4",
      children: "Người dùng có thể ngừng sử dụng dịch vụ bất kỳ lúc nào. POSO có quyền tạm khóa hoặc chấm dứt tài khoản nếu phát hiện vi phạm điều khoản."
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "9. Thay đổi điều khoản"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-4",
      children: "POSO có quyền cập nhật các Điều khoản này theo thời gian. Việc tiếp tục sử dụng dịch vụ đồng nghĩa với việc bạn chấp nhận các thay đổi đó."
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "10. Liên hệ"
    }), /* @__PURE__ */ jsxs("p", {
      children: ["Mọi thắc mắc liên quan đến Điều khoản sử dụng, vui lòng liên hệ:", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
        children: "Email:"
      }), " support@poso.vn"]
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: terms,
  meta: meta$a
}, Symbol.toStringTag, { value: "Module" }));
function meta$9({}) {
  return [{
    title: "Chính sách bảo mật - POSO"
  }, {
    name: "description",
    content: "Chính sách bảo mật và quyền riêng tư khi sử dụng hệ thống POSO"
  }];
}
const privacy = UNSAFE_withComponentProps(function Privacy() {
  return /* @__PURE__ */ jsxs("div", {
    className: "mx-4 max-w-4xl py-6 md:mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "mb-6 text-center text-2xl font-bold",
      children: "Chính sách bảo mật & Quyền riêng tư"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-4",
      children: "POSO (“chúng tôi”) cam kết bảo vệ quyền riêng tư và dữ liệu của người dùng. Chính sách này mô tả cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin khi bạn sử dụng nền tảng POSO, bao gồm website, ứng dụng và các dịch vụ liên quan."
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "1. Thông tin chúng tôi thu thập"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-2",
      children: "Chúng tôi có thể thu thập các loại thông tin sau:"
    }), /* @__PURE__ */ jsxs("ul", {
      className: "mb-4 list-disc pl-6",
      children: [/* @__PURE__ */ jsx("li", {
        children: "Thông tin tài khoản: tên, email, số điện thoại, thông tin đăng nhập."
      }), /* @__PURE__ */ jsx("li", {
        children: "Thông tin cửa hàng/doanh nghiệp: tên cửa hàng, địa chỉ, cấu hình POS."
      }), /* @__PURE__ */ jsx("li", {
        children: "Dữ liệu vận hành: đơn hàng, sản phẩm, hóa đơn, bàn, nhân viên, tồn kho."
      }), /* @__PURE__ */ jsx("li", {
        children: "Dữ liệu kỹ thuật: địa chỉ IP, thiết bị, trình duyệt, log hệ thống."
      })]
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "2. Mục đích sử dụng thông tin"
    }), /* @__PURE__ */ jsxs("ul", {
      className: "mb-4 list-disc pl-6",
      children: [/* @__PURE__ */ jsx("li", {
        children: "Cung cấp và duy trì hoạt động của hệ thống POSO."
      }), /* @__PURE__ */ jsx("li", {
        children: "Quản lý đơn hàng, thanh toán và báo cáo kinh doanh."
      }), /* @__PURE__ */ jsx("li", {
        children: "Cải thiện trải nghiệm người dùng và hiệu suất hệ thống."
      }), /* @__PURE__ */ jsx("li", {
        children: "Gửi thông báo hệ thống, cảnh báo hoặc cập nhật quan trọng."
      }), /* @__PURE__ */ jsx("li", {
        children: "Hỗ trợ kỹ thuật và xử lý sự cố."
      })]
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "3. Chia sẻ và tiết lộ thông tin"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-4",
      children: "POSO không bán hoặc trao đổi dữ liệu người dùng cho bên thứ ba. Thông tin chỉ được chia sẻ trong các trường hợp cần thiết để vận hành dịch vụ, tuân thủ yêu cầu pháp luật hoặc khi có sự đồng ý từ người dùng."
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "4. Lưu trữ và bảo mật dữ liệu"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-4",
      children: "Dữ liệu được lưu trữ trên hệ thống máy chủ bảo mật. Chúng tôi áp dụng các biện pháp kỹ thuật như phân quyền truy cập, xác thực và sao lưu định kỳ để bảo vệ thông tin. Tuy nhiên, không có hệ thống nào an toàn tuyệt đối và chúng tôi không thể cam kết bảo mật 100%."
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "5. Cookies và lưu trữ cục bộ"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-4",
      children: "POSO sử dụng cookies và local storage để duy trì trạng thái đăng nhập, lưu cấu hình hệ thống và tối ưu trải nghiệm người dùng. Bạn có thể tắt cookies trong trình duyệt, nhưng một số tính năng có thể hoạt động không chính xác."
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "6. Quyền của người dùng"
    }), /* @__PURE__ */ jsxs("ul", {
      className: "mb-4 list-disc pl-6",
      children: [/* @__PURE__ */ jsx("li", {
        children: "Yêu cầu truy cập, chỉnh sửa hoặc cập nhật thông tin cá nhân."
      }), /* @__PURE__ */ jsx("li", {
        children: "Yêu cầu xóa dữ liệu khi ngừng sử dụng dịch vụ."
      }), /* @__PURE__ */ jsx("li", {
        children: "Quản lý cài đặt thông báo và quyền truy cập."
      })]
    }), /* @__PURE__ */ jsx("ul", {
      className: "mb-4 list-disc pl-6",
      children: /* @__PURE__ */ jsxs("p", {
        className: "mb-4",
        children: ["This app uses the device camera only to let users capture photos/videos for in-app features. We do not access the camera unless the user explicitly chooses a feature that requires it. Photos or videos captured by the user are only stored on the device or uploaded to our servers if the user chooses to do so. We do not sell personal data to third parties. If you have questions about privacy, contact us at: ", /* @__PURE__ */ jsx("strong", {
          children: "support@poso.vn"
        })]
      })
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "7. Thay đổi chính sách"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-4",
      children: "POSO có thể cập nhật Chính sách bảo mật này theo thời gian. Các thay đổi quan trọng sẽ được thông báo trên website hoặc trong ứng dụng."
    }), /* @__PURE__ */ jsx("h2", {
      className: "mt-6 mb-2 font-semibold",
      children: "8. Liên hệ"
    }), /* @__PURE__ */ jsxs("p", {
      children: ["Nếu bạn có bất kỳ câu hỏi nào liên quan đến Chính sách bảo mật, vui lòng liên hệ với chúng tôi qua email: ", /* @__PURE__ */ jsx("strong", {
        children: "support@poso.vn"
      })]
    })]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: privacy,
  meta: meta$9
}, Symbol.toStringTag, { value: "Module" }));
function meta$8({}) {
  return [{
    title: "Sản phẩm - POSO POS"
  }, {
    name: "description",
    content: "Khám phá các sản phẩm POSO POS - Giải pháp quản lý bán hàng toàn diện cho nhà hàng, quán cafe"
  }];
}
const products = UNSAFE_withComponentProps(function Products() {
  const [activeFeatureTab, setActiveFeatureTab] = useState("all");
  const featureCategories = [{
    id: "selling",
    label: "Bán hàng tại quầy",
    title: "Bán hàng nhanh, hạn chế sai sót",
    description: "Giao diện bán hàng đơn giản, thao tác chạm nhanh, hỗ trợ nhiều phương thức thanh toán.",
    bullets: ["Tạo hóa đơn chỉ với vài thao tác", "Quản lý bàn/khu vực phục vụ trực quan", "Tách/gộp bàn, chuyển món linh hoạt", "In hóa đơn cho quầy và bếp"]
  }, {
    id: "management",
    label: "Quản lý vận hành",
    title: "Quản lý menu, giá bán và nhân viên",
    description: "Dễ dàng cập nhật menu, giá bán và phân quyền cho nhân viên theo vai trò.",
    bullets: ["Quản lý danh mục món, topping, combo", "Thiết lập giá theo khung giờ hoặc chi nhánh", "Phân quyền nhân viên theo chức vụ", "Lịch sử thao tác để kiểm soát gian lận"]
  }, {
    id: "reports",
    label: "Báo cáo & số liệu",
    title: "Báo cáo doanh thu theo thời gian thực",
    description: "Theo dõi doanh thu, lợi nhuận và món bán chạy mọi lúc mọi nơi trên điện thoại.",
    bullets: ["Báo cáo doanh thu theo ca, ngày, tuần, tháng", "Thống kê món bán chạy, khung giờ cao điểm", "So sánh hiệu quả giữa các chi nhánh", "Xuất báo cáo để làm việc với kế toán"]
  }, {
    id: "integrations",
    label: "Tích hợp & mở rộng",
    title: "Kết nối với đối tác giao hàng và thiết bị",
    description: "Tích hợp sẵn với các thiết bị phổ biến và nền tảng giao hàng để tối ưu vận hành.",
    bullets: ["Kết nối máy in bill, két tiền, máy POS phổ biến", "Tự động đồng bộ đơn hàng từ kênh giao hàng (theo lộ trình)", "API mở để tích hợp hệ thống khác", "Đồng bộ dữ liệu an toàn, bảo mật"]
  }];
  const visibleFeatureCards = activeFeatureTab === "all" ? featureCategories : featureCategories.filter((item) => item.id === activeFeatureTab);
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "page"
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#f4f7ff] pt-20 md:pt-24 pb-12 md:pb-16",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex-1 text-center md:text-left",
            children: [/* @__PURE__ */ jsx("p", {
              className: " font-semibold text-poso-primary uppercase tracking-wide mb-3",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsx("h1", {
              className: "text-2xl md:text-5xl font-bold text-poso-dark mb-4 md:mb-6 leading-tight",
              children: "Hệ thống quản lý nhà hàng chuyên nghiệp"
            }), /* @__PURE__ */ jsx("p", {
              className: " md:text-lg text-poso-gray opacity-90 mb-6 md:mb-8",
              children: "POSO cung cấp phần mềm quản lý bán hàng chuyên nghiệp, tương thích với nhiều thiết bị POS và máy in phổ biến trên thị trường. Giải pháp linh hoạt giúp vận hành quán mượt mà, chính xác và hiệu quả."
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex md:flex-row gap-3 justify-center md:justify-start",
              children: [/* @__PURE__ */ jsx(Link, {
                to: "/contact",
                className: "md:text-[10px] lg:text-[10px] text-[11px] inline-flex items-center justify-center bg-poso-primary text-white px-8 py-3 rounded-full font-semibold  md: hover:bg-poso-primary-hover transition-colors",
                children: "Tư vấn miễn phí"
              }), /* @__PURE__ */ jsx(Link, {
                to: "/features",
                className: "md:text-[10px] lg:text-[10px] text-[11px] inline-flex items-center justify-center border border-poso-primary text-poso-primary px-8 py-3 rounded-full font-semibold  md: hover:bg-poso-primary/5 transition-colors",
                children: "Xem tính năng chi tiết"
              })]
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "flex-1 w-full",
            children: /* @__PURE__ */ jsxs("div", {
              className: "relative max-w-full mx-auto h-full",
              children: [/* @__PURE__ */ jsx("div", {
                className: "absolute -top-6 -left-10 w-24 h-24 bg-poso-primary/10 rounded-[32px]"
              }), /* @__PURE__ */ jsx("div", {
                className: "absolute -bottom-10 -right-8 w-28 h-28 bg-poso-primary/5 rounded-full"
              }), /* @__PURE__ */ jsx("div", {
                className: "relative rounded-md border border-gray-100",
                children: /* @__PURE__ */ jsx("img", {
                  src: "/poso-screens/image-7.png",
                  alt: "POSO POS",
                  className: "w-full h-auto object-contain"
                })
              })]
            })
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-white py-16 md:py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1060px] mx-auto",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl md:text-4xl font-bold text-poso-dark text-center mb-4",
            children: "Phần mềm POSO"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-center text-poso-gray opacity-80 mb-10",
            children: "Bộ đôi sản phẩm phần mềm giúp bạn quản lý bán hàng tại quầy và theo dõi hoạt động kinh doanh mọi lúc mọi nơi."
          }), /* @__PURE__ */ jsx("div", {
            className: "md:p-10",
            children: /* @__PURE__ */ jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-7 flex flex-col h-full",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "flex items-center gap-3 mb-4",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "w-8 h-8 rounded-full border border-poso-primary text-poso-primary flex items-center justify-center  font-semibold",
                    children: "01"
                  }), /* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("h3", {
                      className: "text-xl font-bold text-poso-dark",
                      children: "POSO POS"
                    }), /* @__PURE__ */ jsx("p", {
                      className: " text-poso-gray",
                      children: "Ứng dụng bán hàng tại quầy"
                    })]
                  })]
                }), /* @__PURE__ */ jsx("p", {
                  className: " text-poso-gray mb-4",
                  children: "Hệ thống điểm bán hàng chuyên nghiệp cho nhà hàng, quán cafe, bar với giao diện thân thiện và tốc độ xử lý nhanh."
                }), /* @__PURE__ */ jsxs("ul", {
                  className: "space-y-2  text-poso-gray mb-6 flex-1",
                  children: [/* @__PURE__ */ jsx("li", {
                    children: "• Bán hàng nhanh chóng, hạn chế sai sót"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• Quản lý bàn, khu vực phục vụ trực quan"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• In hóa đơn, tích hợp nhiều loại máy in"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• Báo cáo doanh thu và món bán chạy theo thời gian"
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                  children: [/* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("p", {
                      className: " text-poso-gray uppercase tracking-wide",
                      children: "Gói phần mềm"
                    }), /* @__PURE__ */ jsx("p", {
                      className: "text-xl font-bold text-poso-primary",
                      children: "123.000 VNĐ / tháng"
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "flex flex-wrap gap-2 justify-start sm:justify-end",
                    children: [/* @__PURE__ */ jsx(Link, {
                      to: "/contact",
                      className: "bg-poso-primary text-white px-5 py-2.5 rounded-md  font-semibold hover:bg-poso-primary-hover transition-colors",
                      children: "Trải nghiệm ngay"
                    }), /* @__PURE__ */ jsx("button", {
                      className: " sm: text-poso-primary underline decoration-dotted underline-offset-4",
                      children: "Phòng thử nghiệm POSO"
                    })]
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-7 flex flex-col h-full",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "flex items-center gap-3 mb-4",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "w-8 h-8 rounded-full border border-poso-primary text-poso-primary flex items-center justify-center  font-semibold",
                    children: "02"
                  }), /* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("h3", {
                      className: "text-xl font-bold text-poso-dark",
                      children: "POSO Boss / Điều hành"
                    }), /* @__PURE__ */ jsx("p", {
                      className: " text-poso-gray",
                      children: "Ứng dụng quản lý cho chủ quán"
                    })]
                  })]
                }), /* @__PURE__ */ jsx("p", {
                  className: " text-poso-gray mb-4",
                  children: "Theo dõi doanh thu, hoạt động cửa hàng và hiệu quả kinh doanh từ xa trên điện thoại di động, mọi lúc, mọi nơi."
                }), /* @__PURE__ */ jsxs("ul", {
                  className: "space-y-2  text-poso-gray mb-6 flex-1",
                  children: [/* @__PURE__ */ jsx("li", {
                    children: "• Xem tổng quan doanh thu theo ngày, tuần, tháng"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• Theo dõi hóa đơn hiện tại theo thời gian thực"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• Danh mục và mặt hàng bán chạy nhất"
                  }), /* @__PURE__ */ jsx("li", {
                    children: "• Hỗ trợ quản lý nhiều chi nhánh cùng lúc"
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                  children: [/* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("p", {
                      className: " text-poso-gray uppercase tracking-wide",
                      children: "Ứng dụng di động"
                    }), /* @__PURE__ */ jsx("p", {
                      className: "text-xl font-bold text-poso-primary",
                      children: "Miễn phí"
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "flex flex-wrap gap-2 justify-start sm:justify-end",
                    children: [/* @__PURE__ */ jsxs("button", {
                      className: "flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-md  sm: font-semibold hover:bg-gray-800 transition-colors",
                      children: [/* @__PURE__ */ jsx("span", {
                        className: "",
                        children: "▶︎"
                      }), /* @__PURE__ */ jsx("span", {
                        children: "Google Play"
                      })]
                    }), /* @__PURE__ */ jsxs("button", {
                      className: "flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-md  sm: font-semibold hover:bg-gray-800 transition-colors",
                      children: [/* @__PURE__ */ jsx("span", {
                        className: "",
                        children: ""
                      }), /* @__PURE__ */ jsx("span", {
                        children: "App Store"
                      })]
                    })]
                  })]
                })]
              })]
            })
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#f5f7fb] py-16 md:py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1060px] mx-auto",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl md:text-4xl font-bold text-poso-dark text-center mb-4",
            children: "Tính năng nổi bật của POSO POS"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-center text-poso-gray opacity-80 mb-6 max-w-2xl mx-auto",
            children: "Nhóm tính năng được thiết kế riêng cho nhà hàng, quán cafe, trà sữa, giúp bạn bán hàng nhanh hơn, quản lý chặt hơn và ra quyết định chính xác hơn."
          }), /* @__PURE__ */ jsx("div", {
            className: "flex flex-wrap justify-center gap-4 md:gap-6 border-b border-gray-200 pb-4 mb-8",
            children: [{
              id: "all",
              label: "Tất cả"
            }, {
              id: "selling",
              label: "Bán hàng"
            }, {
              id: "management",
              label: "Quản lý vận hành"
            }, {
              id: "reports",
              label: "Báo cáo"
            }, {
              id: "integrations",
              label: "Tích hợp"
            }].map((tab) => {
              const isActive = activeFeatureTab === tab.id;
              return /* @__PURE__ */ jsx("button", {
                onClick: () => setActiveFeatureTab(tab.id),
                className: `pb-3  md: font-medium transition-colors border-b-2 ${isActive ? "text-poso-primary border-poso-primary" : "text-poso-gray border-transparent hover:text-poso-primary"}`,
                children: tab.label
              }, tab.id);
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "space-y-6",
            children: visibleFeatureCards.map((feature) => /* @__PURE__ */ jsxs("div", {
              className: "flex flex-col ",
              children: [/* @__PURE__ */ jsx("h3", {
                className: "text-lg md:text-xl font-semibold text-poso-dark mb-1",
                children: feature.title
              }), /* @__PURE__ */ jsx("p", {
                className: " text-poso-gray mb-2",
                children: feature.description
              }), /* @__PURE__ */ jsx("ul", {
                className: "space-y-1  text-poso-gray mb-4 list-disc list-inside",
                children: feature.bullets.map((item, idx) => /* @__PURE__ */ jsxs("li", {
                  children: ["• ", item]
                }, idx))
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-auto",
                children: /* @__PURE__ */ jsxs("p", {
                  className: " text-poso-gray uppercase tracking-wide mb-3",
                  children: ["Thuộc nhóm:", " ", /* @__PURE__ */ jsx("span", {
                    className: "font-semibold text-poso-primary",
                    children: featureCategories.find((c) => c.id === feature.id)?.label
                  })]
                })
              })]
            }, feature.id))
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-poso-primary py-16",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4 text-center",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1250px] mx-auto",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-white mb-4",
            children: "Cần tư vấn về sản phẩm POSO?"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-white opacity-90 mb-8 text-lg",
            children: "Đội ngũ POSO luôn sẵn sàng hỗ trợ lựa chọn gói phần mềm và thiết bị phù hợp với mô hình kinh doanh của bạn."
          }), /* @__PURE__ */ jsx(Link, {
            to: "/contact",
            className: "bg-white text-poso-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block",
            children: "Liên hệ tư vấn miễn phí"
          })]
        })
      })
    }), /* @__PURE__ */ jsx(PageFooter, {})]
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: products,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
function meta$7({}) {
  return [{
    title: "Tính năng - POSO POS"
  }, {
    name: "description",
    content: "Khám phá các tính năng mạnh mẽ của POSO POS"
  }];
}
const features = UNSAFE_withComponentProps(function Features() {
  const features2 = [{
    category: "Quản lý bán hàng",
    items: [{
      title: "Bán hàng nhanh chóng",
      description: "Giao diện thân thiện, xử lý đơn hàng chỉ trong vài giây"
    }, {
      title: "Quản lý đơn hàng",
      description: "Theo dõi trạng thái đơn hàng theo thời gian thực"
    }, {
      title: "In hóa đơn",
      description: "In hóa đơn nhiệt nhanh chóng, hỗ trợ nhiều loại máy in"
    }]
  }, {
    category: "Quản lý kho",
    items: [{
      title: "Tồn kho thời gian thực",
      description: "Cập nhật tồn kho tự động sau mỗi giao dịch"
    }, {
      title: "Cảnh báo hết hàng",
      description: "Nhận thông báo khi hàng hóa sắp hết"
    }, {
      title: "Nhập xuất kho",
      description: "Quản lý nhập xuất hàng hóa chi tiết, có lịch sử đầy đủ"
    }]
  }, {
    category: "Báo cáo & Thống kê",
    items: [{
      title: "Báo cáo doanh thu",
      description: "Báo cáo doanh thu chi tiết theo ngày, tuần, tháng, năm"
    }, {
      title: "Sản phẩm bán chạy",
      description: "Phân tích sản phẩm bán chạy, doanh thu theo từng món"
    }, {
      title: "Thống kê nhân viên",
      description: "Theo dõi hiệu suất làm việc của từng nhân viên"
    }]
  }, {
    category: "Quản lý nhân viên",
    items: [{
      title: "Phân quyền chi tiết",
      description: "Cấu hình quyền truy cập cho từng nhân viên"
    }, {
      title: "Chấm công",
      description: "Quản lý giờ làm việc, ca làm việc tự động"
    }, {
      title: "Tính lương",
      description: "Tính lương tự động dựa trên giờ làm việc"
    }]
  }];
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "page"
    }), /* @__PURE__ */ jsx(PageHero, {
      title: "Tính năng POSO POS",
      subtitle: "Khám phá các tính năng mạnh mẽ giúp quản lý bán hàng hiệu quả hơn"
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsx("div", {
          className: "space-y-16",
          children: features2.map((category, categoryIndex) => /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-3xl font-bold text-[#191b1e] mb-8 text-center",
              children: category.category
            }), /* @__PURE__ */ jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: category.items.map((item, itemIndex) => /* @__PURE__ */ jsxs("div", {
                className: "bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow",
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold text-[#191b1e] mb-3",
                  children: item.title
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-[#4f5664] opacity-80",
                  children: item.description
                })]
              }, itemIndex))
            })]
          }, categoryIndex))
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#fa7313] py-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold text-white mb-4",
          children: "Trải nghiệm tất cả tính năng ngay hôm nay"
        }), /* @__PURE__ */ jsx(Link, {
          to: `${"https://app.poso.vn"}`,
          className: "bg-white text-[#fa7313] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block mt-4",
          children: "Dùng thử miễn phí"
        })]
      })
    }), /* @__PURE__ */ jsx(PageFooter, {})]
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: features,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
function meta$6({}) {
  return [{
    title: "Tính năng POSO POS - POSO POS"
  }, {
    name: "description",
    content: "Tính năng POSO POS - Hệ thống quản lý nhà hàng chuyên nghiệp, giải pháp nhà hàng toàn diện"
  }];
}
const pos = UNSAFE_withComponentProps(function FeaturesPOS() {
  const featureList = [{
    id: "cash",
    label: "Quản lý thu chi"
  }, {
    id: "table",
    label: "Quản lý bàn"
  }, {
    id: "order",
    label: "Quản lý đơn hàng"
  }, {
    id: "realtime",
    label: "Báo cáo thời gian thực"
  }, {
    id: "inventory",
    label: "Quản lý hàng tồn"
  }, {
    id: "staff",
    label: "Quản lý nhân viên"
  }, {
    id: "chain",
    label: "Quản lý chuỗi"
  }];
  const [activeFeatureId, setActiveFeatureId] = useState("cash");
  const featureScreens = {
    cash: "/poso-screens/image-6.png",
    table: "/poso-screens/image-11.png",
    order: "/poso-screens/image-9.png",
    realtime: "/poso-screens/image-3.png",
    inventory: "/poso-screens/image-5.png",
    staff: "/poso-screens/image-10.png",
    chain: "/poso-screens/image-10.png"
  };
  const activeScreen = featureScreens[activeFeatureId];
  const activeFeature = activeFeatureId === "cash" ? {
    title: "Quản lý Thu Chi",
    badge: "Mới",
    subtitle: "(Chỉ trên Poso)",
    summary: "Tích hợp quản lý thu chi tự động, không cần tính toán thủ công.",
    bullets: ["Quản lý thu chi tự động, không cần tính toán thủ công", "Quản lý thu chi theo ngày, tuần, tháng, năm", "Quản lý thu chi theo món, hóa đơn, nhân viên"]
  } : activeFeatureId === "table" ? {
    title: "Quản lý Bàn",
    summary: "Theo dõi sơ đồ bàn trực quan, cập nhật trạng thái theo thời gian thực để phục vụ khách nhanh hơn.",
    bullets: ["Thiết kế sơ đồ khu vực và bàn theo mặt bằng quán", "Theo dõi trạng thái bàn: trống, đang phục vụ, đã đặt trước", "Hỗ trợ gộp bàn, tách bàn và chuyển bàn linh hoạt"]
  } : activeFeatureId === "order" ? {
    title: "Quản lý Đơn Hàng",
    summary: "Tổng hợp đơn hàng từ nhiều kênh bán, xử lý tập trung trên một màn hình duy nhất.",
    bullets: ["Nhận đơn tại quán, đơn giao hàng và đơn đặt bàn", "Theo dõi trạng thái đơn: mới, đang pha chế, đang giao, hoàn tất", "Giảm sai sót nhờ quy trình xử lý đơn rõ ràng"]
  } : activeFeatureId === "realtime" ? {
    title: "Báo cáo Thời gian thực",
    summary: "Cập nhật doanh thu và hiệu quả kinh doanh liên tục giúp chủ quán ra quyết định nhanh chóng.",
    bullets: ["Xem doanh thu theo ca, theo ngày, tuần, tháng", "Theo dõi món bán chạy, khung giờ cao điểm", "Xuất báo cáo chi tiết để phân tích sâu hơn"]
  } : activeFeatureId === "inventory" ? {
    title: "Quản lý Hàng tồn",
    summary: "Quản lý nguyên vật liệu và hàng hóa chặt chẽ, hạn chế thất thoát.",
    bullets: ["Theo dõi tồn kho theo thời gian thực cho từng mặt hàng", "Cảnh báo khi sắp hết hàng hoặc vượt định mức", "Ghi nhận đầy đủ nhập kho, xuất kho và điều chỉnh tồn"]
  } : activeFeatureId === "staff" ? {
    title: "Quản lý Nhân viên",
    summary: "Kiểm soát hoạt động nhân viên trong ca làm việc và bảo vệ doanh thu.",
    bullets: ["Phân quyền chi tiết theo vai trò: thu ngân, phục vụ, quản lý", "Theo dõi doanh thu theo nhân viên, ca làm việc", "Hạn chế truy cập nhạy cảm bằng mật khẩu và phân quyền"]
  } : {
    title: "Quản lý Chuỗi",
    summary: "Hỗ trợ vận hành nhiều chi nhánh trong cùng một hệ thống POSO POS.",
    bullets: ["Xem báo cáo gộp toàn chuỗi hoặc từng chi nhánh", "Đồng bộ thực đơn và chương trình khuyến mãi cho toàn hệ thống", "So sánh hiệu quả kinh doanh giữa các chi nhánh"]
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "page"
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-gradient-to-r from-[#e5f6ff] via-[#f4fbff] to-[#e0ffe9] pt-0 md:pt-24 pb-16",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex-1 w-full mb-6 md:mb-0",
            children: /* @__PURE__ */ jsxs("div", {
              className: "relative max-w-md mx-auto",
              children: [/* @__PURE__ */ jsx("div", {
                className: "absolute -top-6 -left-10 w-24 h-24 bg-white/40 rounded-[32px]"
              }), /* @__PURE__ */ jsx("div", {
                className: "absolute -bottom-10 -right-8 w-28 h-28 bg-white/30 rounded-full"
              }), /* @__PURE__ */ jsxs("div", {
                className: "hidden md:block relative rounded-[32px] border border-gray-100",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "absolute top-2 left-2 rounded-[32px] w-[320px] lg:w-[430px] h-[240px] md:h-[240px]",
                  children: /* @__PURE__ */ jsx("img", {
                    src: "/poso-screens/image-12.png",
                    alt: "POSO POS",
                    className: "w-full h-auto object-contain"
                  })
                }), /* @__PURE__ */ jsx("img", {
                  src: "/images/poso_sunmi_device.png",
                  alt: "POSO POS",
                  className: "w-full h-auto object-contain"
                })]
              })]
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex-1 text-center md:text-left",
            children: [/* @__PURE__ */ jsx("p", {
              className: " font-semibold text-poso-primary uppercase tracking-wide mb-3",
              children: "POSO POS"
            }), /* @__PURE__ */ jsx("h1", {
              className: "text-2xl md:text-5xl font-bold text-poso-dark mb-4 md:mb-6 leading-tight",
              children: "Hệ thống quản lý nhà hàng chuyên nghiệp"
            }), /* @__PURE__ */ jsxs("ul", {
              className: " md:text-lg text-poso-gray opacity-90 space-y-1 mb-6 md:mb-8",
              children: [/* @__PURE__ */ jsx("li", {
                children: "• Hệ thống quản lý nhà hàng chuyên nghiệp"
              }), /* @__PURE__ */ jsx("li", {
                children: "• Giải pháp nhà hàng toàn diện cho quán cafe, trà sữa, F&B"
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "md:hidden flex items-center justify-center relative rounded-[32px] border border-gray-100 px-4 py-6 md:px-6 md:py-8",
              children: /* @__PURE__ */ jsx("div", {
                className: "md:w-full w-56 h-48 md:h-auto object-contain flex",
                children: /* @__PURE__ */ jsx("img", {
                  src: "/poso-screens/image-13.png",
                  alt: "POSO POS",
                  className: "w-full h-auto object-contain"
                })
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex flex-1 md:flex-grow sm:flex-row gap-3 justify-center md:justify-start",
              children: [/* @__PURE__ */ jsx(Link, {
                to: `${"https://app.poso.vn"}`,
                className: "text-[12px] md:text-[14px] inline-flex items-center justify-center bg-poso-primary text-white md:px-4 md:py-3 px-8 py-4 rounded-full font-semibold md: hover:bg-poso-primary-hover transition-colors",
                children: "Trải nghiệm ngay"
              }), /* @__PURE__ */ jsx(Link, {
                to: "/products",
                className: "text-[12px] md:text-[14px] inline-flex items-center justify-center border border-poso-primary text-poso-primary px-8 py-3 rounded-full font-semibold  md: hover:bg-poso-primary/5 transition-colors",
                children: "Xem sản phẩm POSO"
              })]
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-white py-16 md:py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1200px] mx-auto",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl md:text-4xl font-bold text-poso-dark text-center mb-4",
            children: "Tính năng của POSO POS"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-center text-poso-gray opacity-80 mb-10",
            children: "Bộ tính năng được thiết kế dành riêng cho nhà hàng, quán cafe và mô hình F&B hiện đại."
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col lg:flex-row gap-8",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-full lg:w-64",
              children: /* @__PURE__ */ jsx("ul", {
                className: "flex gap-2 overflow-x-auto lg:flex-col lg:space-y-1 lg:gap-0 lg:overflow-visible rounded-2xl p-1 lg:p-3",
                children: featureList.map((item) => {
                  const isActive = activeFeatureId === item.id;
                  return /* @__PURE__ */ jsx("li", {
                    children: /* @__PURE__ */ jsx("button", {
                      onClick: () => setActiveFeatureId(item.id),
                      className: `text-left px-4 py-2.5 rounded-full  md: whitespace-nowrap transition-colors lg:w-full ${isActive ? "bg-white text-poso-primary font-semibold shadow-sm border border-gray-200" : "text-poso-gray hover:bg-white"}`,
                      children: item.label
                    })
                  }, item.id);
                })
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "flex-1",
              children: /* @__PURE__ */ jsxs("div", {
                className: "rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "border-b border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between",
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-2  md: text-poso-gray",
                    children: [/* @__PURE__ */ jsx("span", {
                      className: "w-2 h-2 rounded-full bg-green-500"
                    }), /* @__PURE__ */ jsx("span", {
                      children: "POSO POS"
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-2 text-[10px] md: text-poso-gray",
                    children: [/* @__PURE__ */ jsx("span", {
                      className: "px-2 py-0.5 rounded-full bg-gray-100",
                      children: "Đơn tại quán"
                    }), /* @__PURE__ */ jsx("span", {
                      className: "px-2 py-0.5 rounded-full bg-gray-100",
                      children: "Đơn giao hàng"
                    })]
                  })]
                }), /* @__PURE__ */ jsx("div", {
                  className: "bg-gray-50 px-2 md:px-4 py-4",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "rounded-2xl bg-white border border-dashed border-gray-200 h-64 md:h-full flex items-center justify-center",
                    children: /* @__PURE__ */ jsx("img", {
                      src: activeScreen,
                      alt: "POSO POS",
                      className: "w-full h-auto object-contain"
                    })
                  })
                })]
              })
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-white pb-16 md:pb-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[900px] mx-auto",
          children: [/* @__PURE__ */ jsxs("h2", {
            className: "text-2xl md:text-3xl font-bold text-poso-dark mb-2",
            children: [activeFeature.title, " ", activeFeature.badge ? /* @__PURE__ */ jsx("span", {
              className: "ml-2 align-middle inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-poso-primary text-white uppercase",
              children: activeFeature.badge
            }) : null]
          }), activeFeature.subtitle ? /* @__PURE__ */ jsx("p", {
            className: " md: text-poso-gray mb-4",
            children: activeFeature.subtitle
          }) : null, /* @__PURE__ */ jsx("p", {
            className: " md: text-poso-gray mb-4",
            children: activeFeature.summary
          }), /* @__PURE__ */ jsx("ul", {
            className: "list-disc pl-5 space-y-2  md: text-poso-gray mb-6",
            children: activeFeature.bullets.map((item) => /* @__PURE__ */ jsx("li", {
              children: item
            }, item))
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-wrap gap-3",
            children: [/* @__PURE__ */ jsx("button", {
              className: "inline-flex items-center justify-center bg-[#16a34a] text-white px-4 md:px-5 py-2 rounded-full  md: font-semibold hover:bg-[#15803d] transition-colors",
              children: "Video hướng dẫn"
            }), /* @__PURE__ */ jsx("button", {
              className: "inline-flex items-center justify-center border border-[#16a34a] text-[#16a34a] px-4 md:px-5 py-2 rounded-full  md: font-semibold hover:bg-[#16a34a]/5 transition-colors",
              children: "Xem hướng dẫn"
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx(PageFooter, {})]
  });
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pos,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
function meta$5({}) {
  return [{
    title: "Tính năng POSO Boss - POSO POS"
  }, {
    name: "description",
    content: "Tính năng POSO Boss - Ứng dụng quản lý cho chủ quán, mọi báo cáo trong tầm tay"
  }];
}
const boss = UNSAFE_withComponentProps(function FeaturesBoss() {
  const featureList = [{
    id: "activity",
    label: "Hoạt động"
  }, {
    id: "currentBills",
    label: "Hóa đơn hiện tại"
  }, {
    id: "revenue",
    label: "Tổng quan doanh thu"
  }, {
    id: "categoryTop",
    label: "Danh mục bán chạy nhất"
  }, {
    id: "itemTop",
    label: "Mặt hàng bán chạy"
  }, {
    id: "otherReports",
    label: "Báo cáo khác"
  }];
  const [activeFeatureId, setActiveFeatureId] = useState("activity");
  const featureScreens = {
    activity: "/poso-mobile-screen/image-1.png",
    currentBills: "/poso-mobile-screen/image-3.png",
    revenue: "/poso-mobile-screen/image-2.png",
    categoryTop: "/poso-mobile-screen/image-4.png",
    itemTop: "/poso-mobile-screen/image-5.png",
    otherReports: "/poso-mobile-screen/image-7.png"
  };
  const activeScreen = featureScreens[activeFeatureId];
  const activeFeature = activeFeatureId === "activity" ? {
    title: "Hoạt động",
    summary: "Cập nhật tình hình kinh doanh theo thời gian thực, mọi biến động đều được hiển thị ngay trên ứng dụng.",
    bullets: ["Theo dõi và xem từng giao dịch theo: hóa đơn, thực đơn, nhân viên, phương thức thanh toán", "Xem chi tiết dòng tiền ra vào trong từng khung giờ", "Giúp theo dõi vận hành của quán sát sao hơn dù bạn ở bất cứ đâu"]
  } : activeFeatureId === "currentBills" ? {
    title: "Hóa đơn hiện tại",
    summary: "Nắm được tất cả hóa đơn đang mở và trạng thái thanh toán theo thời gian thực.",
    bullets: ["Xem danh sách hóa đơn đang phục vụ tại quán", "Kiểm tra nhanh giá trị hóa đơn và phương thức thanh toán", "Giảm thất thoát do bỏ sót hóa đơn hoặc thanh toán sai"]
  } : activeFeatureId === "revenue" ? {
    title: "Tổng quan doanh thu",
    summary: "Nắm toàn cảnh doanh thu cửa hàng trong ngày chỉ trong vài giây.",
    bullets: ["Xem doanh thu theo ngày, tuần, tháng với biểu đồ trực quan", "So sánh doanh thu giữa các khung giờ trong ngày", "Theo dõi doanh thu theo chi nhánh nếu vận hành chuỗi"]
  } : activeFeatureId === "categoryTop" ? {
    title: "Danh mục bán chạy nhất",
    summary: "Biết danh mục nào đang mang lại doanh thu chính để tối ưu thực đơn.",
    bullets: ["Xếp hạng danh mục theo doanh thu và số lượng bán", "Hỗ trợ quyết định tăng cường khuyến mãi cho danh mục chủ lực", "Phát hiện danh mục hoạt động kém để điều chỉnh"]
  } : activeFeatureId === "itemTop" ? {
    title: "Mặt hàng bán chạy",
    summary: "Theo dõi món bán chạy giúp tối ưu tồn kho và chiến dịch marketing.",
    bullets: ["Xếp hạng từng món theo số lượng và doanh thu", "Nhận biết món chủ lực để đưa lên vị trí nổi bật trong menu", "Phân tích hiệu quả giá bán và combo"]
  } : {
    title: "Các báo cáo khác",
    summary: "Bộ báo cáo đa dạng giúp chủ quán theo dõi sâu hơn về vận hành và tài chính.",
    bullets: ["Báo cáo chi phí, lợi nhuận và hiệu quả theo từng khoảng thời gian", "Báo cáo hiệu suất nhân viên, ca làm việc", "Xuất dữ liệu phục vụ kế toán và quản trị doanh nghiệp"]
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "page"
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-gradient-to-r from-[#e5f6ff] via-[#f4fbff] to-[#e0ffe9] md:pt-24 pb-16",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex-1 w-full mb-6 md:mb-0",
            children: /* @__PURE__ */ jsxs("div", {
              className: "relative max-w-xs mx-auto",
              children: [/* @__PURE__ */ jsx("div", {
                className: "absolute -top-6 -left-10 w-24 h-24 bg-white/40 rounded-[32px]"
              }), /* @__PURE__ */ jsx("div", {
                className: "absolute -bottom-10 -right-8 w-28 h-28 bg-white/30 rounded-full"
              }), /* @__PURE__ */ jsx("div", {
                className: "hidden md:block relative rounded-[32px]  shadow-xl border border-gray-100 px-4 py-6 md:px-6 md:py-8",
                children: /* @__PURE__ */ jsx("img", {
                  src: "/poso-mobile-screen/image-4.png",
                  alt: "POSO Boss",
                  className: "w-full h-auto object-contain"
                })
              })]
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex-1 text-center md:text-left",
            children: [/* @__PURE__ */ jsx("p", {
              className: " font-semibold text-poso-primary uppercase tracking-wide mb-3",
              children: "POSO Boss"
            }), /* @__PURE__ */ jsx("h1", {
              className: "text-2xl md:text-5xl font-bold text-poso-dark mb-4 md:mb-6 leading-tight",
              children: "Ứng dụng quản lý cho chủ quán"
            }), /* @__PURE__ */ jsxs("ul", {
              className: " md:text-lg text-poso-gray opacity-90 space-y-1 mb-6 md:mb-8",
              children: [/* @__PURE__ */ jsx("li", {
                children: "• Quản lý cửa hàng mọi lúc, mọi nơi dù bạn ở nơi đâu"
              }), /* @__PURE__ */ jsx("li", {
                children: "• Mọi báo cáo bạn cần ngay trong tầm tay"
              }), /* @__PURE__ */ jsx("li", {
                children: "• Tải miễn phí"
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "md:hidden relative rounded-[32px] px-4 py-6 md:px-6 md:py-8",
              children: /* @__PURE__ */ jsx("img", {
                src: "/poso-mobile-screen/image-4.png",
                alt: "POSO Boss",
                className: "w-full h-48 md:h-auto object-contain"
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex md:flex-grow sm:flex-row gap-3 justify-center md:justify-start",
              children: [/* @__PURE__ */ jsxs("button", {
                className: "flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold  md: hover:bg-gray-800 transition-colors",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "",
                  children: "▶︎"
                }), /* @__PURE__ */ jsx("span", {
                  children: "Google Play"
                })]
              }), /* @__PURE__ */ jsxs("button", {
                className: "flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold  md: hover:bg-gray-800 transition-colors",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "",
                  children: ""
                }), /* @__PURE__ */ jsx("span", {
                  children: "App Store"
                })]
              })]
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-white py-16 md:py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1200px] mx-auto",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl md:text-4xl font-bold text-poso-dark text-center mb-4",
            children: "Tính năng của POSO Boss"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-center text-poso-gray opacity-80 mb-10",
            children: "Mọi báo cáo và số liệu vận hành cửa hàng đều được cập nhật liên tục, giúp chủ quán kiểm soát kinh doanh dễ dàng."
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col lg:flex-row gap-8",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-full lg:w-64",
              children: /* @__PURE__ */ jsx("ul", {
                className: "flex gap-2 overflow-x-auto lg:flex-col lg:space-y-1 lg:gap-0 lg:overflow-visible rounded-2xl p-1 lg:p-3",
                children: featureList.map((item) => {
                  const isActive = activeFeatureId === item.id;
                  return /* @__PURE__ */ jsx("li", {
                    children: /* @__PURE__ */ jsx("button", {
                      onClick: () => setActiveFeatureId(item.id),
                      className: `text-left px-4 py-2.5 rounded-full  md: whitespace-nowrap transition-colors lg:w-full ${isActive ? "bg-white text-poso-primary font-semibold shadow-sm border border-gray-200" : "text-poso-gray hover:bg-white"}`,
                      children: item.label
                    })
                  }, item.id);
                })
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "flex-1",
              children: /* @__PURE__ */ jsxs("div", {
                className: "rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "border-b border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between",
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-2  md: text-poso-gray",
                    children: [/* @__PURE__ */ jsx("span", {
                      className: "w-2 h-2 rounded-full bg-green-500"
                    }), /* @__PURE__ */ jsx("span", {
                      children: "POSO Boss"
                    })]
                  })
                }), /* @__PURE__ */ jsx("div", {
                  className: "bg-gray-50 px-2 md:px-4 py-4",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "h-48 md:h-120 rounded-2xl bg-white border border-dashed border-gray-200 flex items-center justify-center",
                    children: /* @__PURE__ */ jsx("img", {
                      src: activeScreen,
                      alt: activeFeature.title,
                      className: "w-full h-full object-contain"
                    })
                  })
                })]
              })
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-white pb-16 md:pb-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[900px] mx-auto",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-2xl md:text-3xl font-bold text-poso-dark mb-3",
            children: activeFeature.title
          }), /* @__PURE__ */ jsx("p", {
            className: " md: text-poso-gray mb-4",
            children: activeFeature.summary
          }), /* @__PURE__ */ jsx("ul", {
            className: "list-disc pl-5 space-y-2  md: text-poso-gray mb-6",
            children: activeFeature.bullets.map((item) => /* @__PURE__ */ jsx("li", {
              children: item
            }, item))
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-poso-primary py-16",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4 text-center",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1250px] mx-auto",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-white mb-4",
            children: "Bắt đầu quản lý bán hàng ngay hôm nay"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-white opacity-90 mb-8 text-lg",
            children: "Tải ứng dụng POSO Boss miễn phí và theo dõi cửa hàng từ mọi nơi."
          }), /* @__PURE__ */ jsx(Link, {
            to: "/contact",
            className: "bg-white text-poso-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block",
            children: "Liên hệ tư vấn"
          })]
        })
      })
    }), /* @__PURE__ */ jsx(PageFooter, {})]
  });
});
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: boss,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
function meta$4({}) {
  return [{
    title: "FAQ - POSO POS"
  }, {
    name: "description",
    content: "Câu hỏi thường gặp về POSO POS"
  }];
}
const faq = UNSAFE_withComponentProps(function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs2 = [{
    question: "POSO POS có phù hợp với quán cafe nhỏ không?",
    answer: "Có, POSO POS được thiết kế để phù hợp với mọi quy mô nhà hàng, từ quán cafe nhỏ đến chuỗi nhà hàng lớn. Bạn có thể bắt đầu với gói cơ bản và nâng cấp khi cần."
  }, {
    question: "Tôi có cần kết nối internet để sử dụng không?",
    answer: "POSO POS có thể hoạt động offline và đồng bộ dữ liệu khi có kết nối internet. Điều này đảm bảo bạn không bị gián đoạn kinh doanh."
  }, {
    question: "Chi phí sử dụng POSO POS là bao nhiêu?",
    answer: "POSO POS có nhiều gói dịch vụ phù hợp với nhu cầu khác nhau. Chúng tôi có gói dùng thử miễn phí và các gói trả phí với tính năng nâng cao. Vui lòng liên hệ để được tư vấn chi tiết."
  }, {
    question: "Tôi có thể tích hợp với các hệ thống thanh toán khác không?",
    answer: "Có, POSO POS hỗ trợ tích hợp với nhiều cổng thanh toán phổ biến như Momo, ZaloPay, VNPay, và các hệ thống thanh toán quốc tế."
  }, {
    question: "Hỗ trợ kỹ thuật được cung cấp như thế nào?",
    answer: "Chúng tôi cung cấp hỗ trợ kỹ thuật 24/7 qua nhiều kênh: email, hotline, chat trực tuyến. Ngoài ra, chúng tôi có đội ngũ hỗ trợ tại chỗ cho khách hàng enterprise."
  }, {
    question: "Dữ liệu của tôi có được bảo mật không?",
    answer: "Tuyệt đối. Chúng tôi sử dụng mã hóa SSL/TLS và tuân thủ các tiêu chuẩn bảo mật quốc tế. Dữ liệu của bạn được sao lưu tự động và lưu trữ an toàn."
  }, {
    question: "Tôi có thể tùy chỉnh menu và sản phẩm không?",
    answer: "Có, bạn có thể dễ dàng tùy chỉnh menu, thêm/xóa/sửa sản phẩm, điều chỉnh giá cả, và tạo các combo menu theo nhu cầu."
  }, {
    question: "POSO POS hỗ trợ in hóa đơn như thế nào?",
    answer: "POSO POS hỗ trợ in hóa đơn với nhiều loại máy in nhiệt phổ biến. Bạn có thể tùy chỉnh mẫu hóa đơn, in nhiều bản, và gửi hóa đơn điện tử qua email/SMS."
  }];
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "page"
    }), /* @__PURE__ */ jsx(PageHero, {
      title: "Câu hỏi thường gặp",
      subtitle: "Tìm câu trả lời cho những thắc mắc phổ biến về POSO POS"
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4 max-w-4xl",
        children: /* @__PURE__ */ jsx("div", {
          className: "space-y-4",
          children: faqs2.map((faq2, index) => /* @__PURE__ */ jsxs("div", {
            className: "bg-white border border-gray-200 rounded-lg overflow-hidden",
            children: [/* @__PURE__ */ jsxs("button", {
              onClick: () => setOpenIndex(openIndex === index ? null : index),
              className: "w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-lg font-semibold text-[#191b1e] pr-4",
                children: faq2.question
              }), /* @__PURE__ */ jsx("span", {
                className: "text-[#fa7313] text-2xl flex-shrink-0",
                children: openIndex === index ? "−" : "+"
              })]
            }), openIndex === index && /* @__PURE__ */ jsx("div", {
              className: "px-6 pb-4",
              children: /* @__PURE__ */ jsx("p", {
                className: "text-[#4f5664] leading-relaxed",
                children: faq2.answer
              })
            })]
          }, index))
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#fa7313] py-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold text-white mb-4",
          children: "Không tìm thấy câu trả lời?"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-white mb-8 opacity-90",
          children: "Liên hệ với chúng tôi để được hỗ trợ"
        }), /* @__PURE__ */ jsx(Link, {
          to: "/contact",
          className: "bg-white text-[#fa7313] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block",
          children: "Liên hệ ngay"
        })]
      })
    }), /* @__PURE__ */ jsx(PageFooter, {})]
  });
});
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: faq,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const WORDPRESS_API_BASE = "https://public-api.wordpress.com/wp/v2/sites/252212907";
async function fetchPosts() {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/posts?per_page=100&_embed`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
    const posts = await response.json();
    return posts.filter((post) => post.status === "publish");
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
async function fetchPostById(id) {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/posts/${id}?_embed`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch post: ${response.statusText}`);
    }
    const post = await response.json();
    if (post.status !== "publish") {
      return null;
    }
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}
async function fetchCategories() {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/categories?per_page=100`);
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
function getCategoryName(categoryId, categories) {
  const category = categories.find((cat) => cat.id === categoryId);
  return category?.name || "Khác";
}
function formatDate(dateString) {
  const date = new Date(dateString);
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12"
  ];
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
}
function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "");
}
function decodeHtmlEntities(text) {
  const entities = {
    "&nbsp;": " ",
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
    "&copy;": "©",
    "&reg;": "®",
    "&trade;": "™",
    "&hellip;": "…",
    "&mdash;": "—",
    "&ndash;": "–"
  };
  let decoded = text;
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.replace(new RegExp(entity, "g"), char);
  }
  decoded = decoded.replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num, 10)));
  decoded = decoded.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  return decoded;
}
async function loader$1({}) {
  try {
    const [posts, categories] = await Promise.all([fetchPosts(), fetchCategories()]);
    return {
      posts,
      categories
    };
  } catch (error) {
    console.error("Error loading news:", error);
    return {
      posts: [],
      categories: []
    };
  }
}
function meta$3({}) {
  return [{
    title: "Tin tức - POSO POS"
  }, {
    name: "description",
    content: "Tin tức và cập nhật mới nhất về POSO POS"
  }];
}
const news = UNSAFE_withComponentProps(function News({
  loaderData
}) {
  const {
    posts,
    categories
  } = loaderData;
  const newsItems = posts.map((item) => ({
    ...item,
    formattedDate: formatDate(item.date),
    categoryName: getCategoryName(item.categories[0] || 0, categories),
    decodedTitle: decodeHtmlEntities(item.title.rendered),
    featuredImage: item.jetpack_featured_media_url || null
  }));
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "page"
    }), /* @__PURE__ */ jsx(PageHero, {
      title: "Tin tức & Cập nhật",
      subtitle: "Cập nhật mới nhất về POSO POS, tính năng mới, và các câu chuyện thành công"
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: newsItems.map((item) => /* @__PURE__ */ jsxs("article", {
            className: "bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow",
            children: [/* @__PURE__ */ jsx("div", {
              className: "h-48 overflow-hidden",
              children: /* @__PURE__ */ jsx("img", {
                src: item.featuredImage || "/image_placeholder.png",
                alt: item.decodedTitle,
                className: "w-full h-full object-cover"
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "p-6",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "font-semibold text-poso-primary bg-poso-primary/10 px-3 py-1 rounded-full",
                  children: item.categoryName
                }), /* @__PURE__ */ jsx("span", {
                  className: " text-poso-gray opacity-70",
                  children: item.formattedDate
                })]
              }), /* @__PURE__ */ jsx(NavLink, {
                to: `/news/${item.id}`,
                className: "cursor-pointer text-xl font-bold text-poso-dark mb-3 hover:text-poso-primary transition-colors",
                children: item.decodedTitle
              }), /* @__PURE__ */ jsxs("p", {
                className: "text-poso-gray opacity-80 leading-relaxed mb-4",
                children: [stripHtml(item.excerpt.rendered).substring(0, 150), "..."]
              }), /* @__PURE__ */ jsx(Link, {
                to: `/news/${item.id}`,
                className: "text-poso-primary font-semibold hover:underline inline-flex items-center",
                children: "Đọc thêm →"
              })]
            })]
          }, item.id))
        })
      })
    }), /* @__PURE__ */ jsx(PageFooter, {})]
  });
});
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: news,
  loader: loader$1,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
async function loader({
  params
}) {
  const postId = params.id;
  if (!postId) {
    return {
      post: null,
      relatedPosts: [],
      categories: []
    };
  }
  try {
    const [post, allPosts, categories] = await Promise.all([fetchPostById(postId), fetchPosts(), fetchCategories()]);
    if (!post) {
      return {
        post: null,
        relatedPosts: [],
        categories
      };
    }
    const relatedPosts = allPosts.filter((item) => item.id !== post.id && item.categories.some((catId) => post.categories.includes(catId))).slice(0, 3);
    return {
      post,
      relatedPosts,
      categories
    };
  } catch (error) {
    console.error("Error loading post:", error);
    return {
      post: null,
      relatedPosts: [],
      categories: []
    };
  }
}
function meta$2({
  loaderData
}) {
  const {
    post
  } = loaderData;
  if (!post) {
    return [{
      title: "Không tìm thấy - POSO POS"
    }, {
      name: "description",
      content: "Bài viết không tồn tại"
    }];
  }
  const excerpt = stripHtml(post.excerpt.rendered).substring(0, 160);
  const decodedTitle = decodeHtmlEntities(post.title.rendered);
  return [{
    title: `${decodedTitle} - POSO POS`
  }, {
    name: "description",
    content: excerpt
  }];
}
const news_$id = UNSAFE_withComponentProps(function NewsDetail({
  loaderData
}) {
  const {
    post,
    relatedPosts,
    categories
  } = loaderData;
  if (!post) {
    return /* @__PURE__ */ jsxs("div", {
      className: "min-h-screen bg-white",
      children: [/* @__PURE__ */ jsx(SiteHeader, {
        variant: "page"
      }), /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 py-20 text-center",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-4xl font-bold text-poso-dark mb-4",
          children: "Không tìm thấy bài viết"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-poso-gray mb-8",
          children: "Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa."
        }), /* @__PURE__ */ jsx(Link, {
          to: "/news",
          className: "bg-poso-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-poso-primary-hover transition-colors inline-block",
          children: "Quay lại trang tin tức"
        })]
      }), /* @__PURE__ */ jsx(PageFooter, {})]
    });
  }
  const categoryName = getCategoryName(post.categories[0] || 0, categories);
  const formattedDate = formatDate(post.date);
  const decodedTitle = decodeHtmlEntities(post.title.rendered);
  const featuredImage = post.jetpack_featured_media_url || null;
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "page"
    }), /* @__PURE__ */ jsx(PageHero, {
      title: decodedTitle,
      subtitle: `${categoryName} • ${formattedDate}`
    }), /* @__PURE__ */ jsx("article", {
      className: "py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [featuredImage && /* @__PURE__ */ jsx("div", {
            className: "mb-8 rounded-lg overflow-hidden",
            children: /* @__PURE__ */ jsx("img", {
              src: featuredImage,
              alt: decodedTitle,
              className: "w-full h-auto object-cover"
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "mb-6",
            children: /* @__PURE__ */ jsx("span", {
              className: " font-semibold text-poso-primary bg-poso-primary/10 px-3 py-1 rounded-full",
              children: categoryName
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "prose prose-lg max-w-none prose-headings:text-poso-dark prose-headings:font-bold prose-p:text-poso-gray prose-p:leading-relaxed prose-ul:text-poso-gray prose-li:text-poso-gray prose-strong:text-poso-dark prose-a:text-poso-primary prose-a:no-underline hover:prose-a:underline",
            dangerouslySetInnerHTML: {
              __html: post.content.rendered
            }
          }), /* @__PURE__ */ jsx("div", {
            className: "mt-12 pt-8 border-t border-gray-200",
            children: /* @__PURE__ */ jsx(Link, {
              to: "/news",
              className: "text-poso-primary font-semibold hover:underline inline-flex items-center",
              children: "← Quay lại trang tin tức"
            })
          }), relatedPosts.length > 0 && /* @__PURE__ */ jsxs("div", {
            className: "mt-16",
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-3xl font-bold text-poso-dark mb-8",
              children: "Bài viết liên quan"
            }), /* @__PURE__ */ jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6",
              children: relatedPosts.map((relatedPost) => {
                const relatedCategoryName = getCategoryName(relatedPost.categories[0] || 0, categories);
                const relatedFormattedDate = formatDate(relatedPost.date);
                const relatedDecodedTitle = decodeHtmlEntities(relatedPost.title.rendered);
                const relatedFeaturedImage = relatedPost.jetpack_featured_media_url || null;
                return /* @__PURE__ */ jsxs(Link, {
                  to: `/news/${relatedPost.id}`,
                  className: "bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow block",
                  children: [relatedFeaturedImage && /* @__PURE__ */ jsx("div", {
                    className: "h-40 overflow-hidden",
                    children: /* @__PURE__ */ jsx("img", {
                      src: relatedFeaturedImage,
                      alt: relatedDecodedTitle,
                      className: "w-full h-full object-cover"
                    })
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "p-6",
                    children: [/* @__PURE__ */ jsxs("div", {
                      className: "flex items-center justify-between mb-3",
                      children: [/* @__PURE__ */ jsx("span", {
                        className: " font-semibold text-poso-primary bg-poso-primary/10 px-2 py-1 rounded-full",
                        children: relatedCategoryName
                      }), /* @__PURE__ */ jsx("span", {
                        className: " text-poso-gray opacity-70",
                        children: relatedFormattedDate
                      })]
                    }), /* @__PURE__ */ jsx("h3", {
                      className: "text-lg font-bold text-poso-dark mb-2 line-clamp-2 hover:text-poso-primary transition-colors",
                      children: relatedDecodedTitle
                    }), /* @__PURE__ */ jsx("p", {
                      className: " text-poso-gray opacity-80 line-clamp-2",
                      children: stripHtml(relatedPost.excerpt.rendered)
                    })]
                  })]
                }, relatedPost.id);
              })
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx(PageFooter, {})]
  });
});
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: news_$id,
  loader,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function meta$1({}) {
  return [{
    title: "Liên hệ - POSO POS"
  }, {
    name: "description",
    content: "Liên hệ với POSO POS để được tư vấn và hỗ trợ"
  }];
}
const contact = UNSAFE_withComponentProps(function Contact() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "page"
    }), /* @__PURE__ */ jsx(PageHero, {
      title: "Liên hệ với chúng tôi",
      subtitle: "Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ để được tư vấn miễn phí"
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-3xl font-bold text-[#191b1e] mb-6",
              children: "Gửi tin nhắn cho chúng tôi"
            }), /* @__PURE__ */ jsxs("form", {
              className: "space-y-6",
              children: [/* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("label", {
                  htmlFor: "name",
                  className: "block  font-semibold text-[#191b1e] mb-2",
                  children: "Họ và tên *"
                }), /* @__PURE__ */ jsx("input", {
                  type: "text",
                  id: "name",
                  name: "name",
                  required: true,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fa7313] focus:border-transparent",
                  placeholder: "Nhập họ và tên của bạn"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("label", {
                  htmlFor: "email",
                  className: "block  font-semibold text-[#191b1e] mb-2",
                  children: "Email *"
                }), /* @__PURE__ */ jsx("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  required: true,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fa7313] focus:border-transparent",
                  placeholder: "your@email.com"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("label", {
                  htmlFor: "phone",
                  className: "block  font-semibold text-[#191b1e] mb-2",
                  children: "Số điện thoại *"
                }), /* @__PURE__ */ jsx("input", {
                  type: "tel",
                  id: "phone",
                  name: "phone",
                  required: true,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fa7313] focus:border-transparent",
                  placeholder: "0901234567"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("label", {
                  htmlFor: "message",
                  className: "block  font-semibold text-[#191b1e] mb-2",
                  children: "Tin nhắn *"
                }), /* @__PURE__ */ jsx("textarea", {
                  id: "message",
                  name: "message",
                  rows: 6,
                  required: true,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fa7313] focus:border-transparent",
                  placeholder: "Nhập tin nhắn của bạn..."
                })]
              }), /* @__PURE__ */ jsx("button", {
                type: "submit",
                className: "w-full bg-[#fa7313] text-white px-6 py-4 rounded-md font-semibold text-lg hover:bg-[#00b845] transition-colors",
                children: "Gửi tin nhắn"
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-3xl font-bold text-[#191b1e] mb-6",
              children: "Thông tin liên hệ"
            }), /* @__PURE__ */ jsxs("div", {
              className: "space-y-8",
              children: [/* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold text-[#191b1e] mb-3",
                  children: "Văn phòng"
                }), /* @__PURE__ */ jsxs("p", {
                  className: "text-[#4f5664] opacity-80",
                  children: ["198 QL55, Xã Hàm Tân, Tỉnh Lâm Đồng", /* @__PURE__ */ jsx("br", {}), "Việt Nam"]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold text-[#191b1e] mb-3",
                  children: "Điện thoại"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-[#4f5664] opacity-80",
                  children: /* @__PURE__ */ jsx("a", {
                    href: "tel:+84977140536",
                    className: "hover:text-[#fa7313] transition-colors",
                    children: "+84 977 140 536"
                  })
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold text-[#191b1e] mb-3",
                  children: "Email"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-[#4f5664] opacity-80",
                  children: /* @__PURE__ */ jsx("a", {
                    href: "mailto:poso@autuna.com",
                    className: "hover:text-[#fa7313] transition-colors",
                    children: "poso@autuna.com"
                  })
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold text-[#191b1e] mb-3",
                  children: "Giờ làm việc"
                }), /* @__PURE__ */ jsxs("p", {
                  className: "text-[#4f5664] opacity-80",
                  children: ["Thứ 2 - Thứ 6: 8:00 - 18:00", /* @__PURE__ */ jsx("br", {}), "Thứ 7: 8:00 - 12:00", /* @__PURE__ */ jsx("br", {}), "Chủ nhật: Nghỉ"]
                })]
              })]
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx(PageFooter, {})]
  });
});
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "Giới thiệu - POSO POS"
  }, {
    name: "description",
    content: "Tìm hiểu về POSO POS và sứ mệnh của chúng tôi"
  }];
}
const about = UNSAFE_withComponentProps(function About() {
  const values = [{
    title: "Đổi mới",
    description: "Chúng tôi không ngừng đổi mới và cải tiến sản phẩm để đáp ứng nhu cầu của khách hàng."
  }, {
    title: "Tin cậy",
    description: "Uy tín và độ tin cậy là giá trị cốt lõi trong mọi hoạt động của chúng tôi."
  }, {
    title: "Hỗ trợ",
    description: "Chúng tôi cam kết hỗ trợ khách hàng 24/7 với đội ngũ chuyên nghiệp."
  }, {
    title: "Đơn giản",
    description: "Sản phẩm của chúng tôi được thiết kế đơn giản, dễ sử dụng cho mọi người."
  }];
  const stats = [{
    number: "10,000+",
    label: "Khách hàng"
  }, {
    number: "50,000+",
    label: "Giao dịch/ngày"
  }, {
    number: "99.9%",
    label: "Uptime"
  }, {
    number: "24/7",
    label: "Hỗ trợ"
  }];
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx(SiteHeader, {
      variant: "page"
    }), /* @__PURE__ */ jsx(PageHero, {
      title: "Về POSO POS",
      subtitle: "Giải pháp quản lý bán hàng hàng đầu Việt Nam"
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4 max-w-4xl",
        children: /* @__PURE__ */ jsxs("div", {
          className: "prose prose-lg max-w-none",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-bold text-[#191b1e] mb-6",
            children: "Sứ mệnh của chúng tôi"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-[#4f5664] opacity-80 leading-relaxed mb-8 text-lg",
            children: "POSO POS được thành lập với sứ mệnh giúp các nhà hàng, quán cafe, và doanh nghiệp F&B quản lý hoạt động kinh doanh một cách hiệu quả và chuyên nghiệp. Chúng tôi tin rằng công nghệ nên đơn giản, dễ sử dụng và giúp doanh nghiệp phát triển."
          }), /* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-bold text-[#191b1e] mb-6 mt-12",
            children: "Câu chuyện của chúng tôi"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-[#4f5664] opacity-80 leading-relaxed mb-4 text-lg",
            children: "Bắt đầu từ năm 2020, POSO POS được ra đời từ nhu cầu thực tế của các chủ nhà hàng muốn có một giải pháp quản lý toàn diện nhưng đơn giản và giá cả phải chăng."
          }), /* @__PURE__ */ jsx("p", {
            className: "text-[#4f5664] opacity-80 leading-relaxed mb-8 text-lg",
            children: "Sau nhiều năm phát triển, chúng tôi tự hào là một trong những nhà cung cấp giải pháp POS hàng đầu tại Việt Nam, phục vụ hàng chục nghìn khách hàng từ quy mô nhỏ đến lớn."
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#f8f9fc] py-16",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-8",
          children: stats.map((stat, index) => /* @__PURE__ */ jsxs("div", {
            className: "text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-4xl md:text-5xl font-bold text-[#fa7313] mb-2",
              children: stat.number
            }), /* @__PURE__ */ jsx("div", {
              className: "text-[#4f5664] opacity-80 font-semibold",
              children: stat.label
            })]
          }, index))
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-3xl font-bold text-[#191b1e] text-center mb-12",
          children: "Giá trị cốt lõi"
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: values.map((value, index) => /* @__PURE__ */ jsxs("div", {
            className: "bg-white border border-gray-200 rounded-lg p-6 text-center",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-xl font-bold text-[#191b1e] mb-3",
              children: value.title
            }), /* @__PURE__ */ jsx("p", {
              className: "text-[#4f5664] opacity-80",
              children: value.description
            })]
          }, index))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#fa7313] py-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold text-white mb-4",
          children: "Hãy tham gia cùng chúng tôi"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-white mb-8 opacity-90",
          children: "Bắt đầu hành trình số hóa nhà hàng của bạn ngay hôm nay"
        }), /* @__PURE__ */ jsx(Link, {
          to: "/contact",
          className: "bg-white text-[#fa7313] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block",
          children: "Liên hệ ngay"
        })]
      })
    }), /* @__PURE__ */ jsx(PageFooter, {})]
  });
});
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DSq91AiY.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-CgJ49hVw.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js"], "css": ["/assets/root-Co-FSc9e.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-VwLb4Nmr.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/content-BZus4PMh.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/tai-nguyen": { "id": "routes/tai-nguyen", "parentId": "root", "path": "tai-nguyen", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/tai-nguyen-CYxXFKwa.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/PageHero-CZlLwED_.js", "/assets/PageFooter-BVmEeNxF.js", "/assets/content-BZus4PMh.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/ho-tro": { "id": "routes/ho-tro", "parentId": "root", "path": "ho-tro", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/ho-tro-4g4E6FFO.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/PageHero-CZlLwED_.js", "/assets/PageFooter-BVmEeNxF.js", "/assets/content-BZus4PMh.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/terms": { "id": "routes/terms", "parentId": "root", "path": "terms", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/terms-CIQ_gMYZ.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/privacy": { "id": "routes/privacy", "parentId": "root", "path": "privacy", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/privacy-CaAjWMNb.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/products": { "id": "routes/products", "parentId": "root", "path": "products", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/products-CupbZd63.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/PageFooter-BVmEeNxF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/features": { "id": "routes/features", "parentId": "root", "path": "features", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/features-Dbrrtl6a.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/PageHero-CZlLwED_.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/PageFooter-BVmEeNxF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/features/pos": { "id": "routes/features/pos", "parentId": "root", "path": "features/pos", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/pos-DvJm-Hax.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/PageFooter-BVmEeNxF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/features/boss": { "id": "routes/features/boss", "parentId": "root", "path": "features/boss", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/boss-CXMFAlz9.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/PageFooter-BVmEeNxF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/faq": { "id": "routes/faq", "parentId": "root", "path": "faq", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/faq-BGyAcC55.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/PageHero-CZlLwED_.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/PageFooter-BVmEeNxF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/news": { "id": "routes/news", "parentId": "root", "path": "news", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/news-CB1nVSRL.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/PageHero-CZlLwED_.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/PageFooter-BVmEeNxF.js", "/assets/wordpress-api-yzoM8uUh.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/news.$id": { "id": "routes/news.$id", "parentId": "root", "path": "news/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/news._id-CYLC66gx.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/PageHero-CZlLwED_.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/PageFooter-BVmEeNxF.js", "/assets/wordpress-api-yzoM8uUh.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/contact-t8BM4mAu.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/PageHero-CZlLwED_.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/PageFooter-BVmEeNxF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/about-BlMfiaal.js", "imports": ["/assets/chunk-EPOLDU6W-EYqwy2XP.js", "/assets/PageHero-CZlLwED_.js", "/assets/SiteHeader-BO7Q-oeO.js", "/assets/PageFooter-BVmEeNxF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-ee22c361.js", "version": "ee22c361", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "unstable_trailingSlashAwareDataRequests": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/tai-nguyen": {
    id: "routes/tai-nguyen",
    parentId: "root",
    path: "tai-nguyen",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/ho-tro": {
    id: "routes/ho-tro",
    parentId: "root",
    path: "ho-tro",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/terms": {
    id: "routes/terms",
    parentId: "root",
    path: "terms",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/privacy": {
    id: "routes/privacy",
    parentId: "root",
    path: "privacy",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/features": {
    id: "routes/features",
    parentId: "root",
    path: "features",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/features/pos": {
    id: "routes/features/pos",
    parentId: "root",
    path: "features/pos",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/features/boss": {
    id: "routes/features/boss",
    parentId: "root",
    path: "features/boss",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/faq": {
    id: "routes/faq",
    parentId: "root",
    path: "faq",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/news": {
    id: "routes/news",
    parentId: "root",
    path: "news",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/news.$id": {
    id: "routes/news.$id",
    parentId: "root",
    path: "news/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
