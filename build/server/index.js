import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link } from "react-router";
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
  links
}, Symbol.toStringTag, { value: "Module" }));
function meta$6({}) {
  return [{
    title: "POSO POS"
  }, {
    name: "description",
    content: "POSO là Nhãn Hiệu Máy Bán Hàng Hàng Đầu Thế Giới. Giải pháp quản lý nhà hàng duy nhất bạn cần."
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx("header", {
      className: "bg-white border-b border-gray-200 sticky top-0 z-50",
      children: /* @__PURE__ */ jsxs("nav", {
        className: "container mx-auto px-4 py-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/",
            className: "flex items-center",
            children: /* @__PURE__ */ jsx("h1", {
              className: "text-2xl font-bold text-[#fa7313]",
              children: "POSO"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "hidden md:flex items-center space-x-8",
            children: [/* @__PURE__ */ jsx(Link, {
              to: "/products",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/features",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tính năng"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/faq",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "FAQ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/news",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tin tức"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Liên hệ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/about",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Giới thiệu"
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex items-center space-x-4",
              children: [/* @__PURE__ */ jsx(Link, {
                to: "/contact",
                className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
                children: "Đăng nhập"
              }), /* @__PURE__ */ jsx(Link, {
                to: "/contact",
                className: "bg-[#fa7313] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b845] transition-colors",
                children: "Đăng ký"
              })]
            })]
          }), /* @__PURE__ */ jsx("button", {
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            className: "md:hidden p-2 text-[#4f5664] hover:text-[#fa7313] transition-colors",
            "aria-label": "Toggle menu",
            children: /* @__PURE__ */ jsx("svg", {
              className: "w-6 h-6",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: mobileMenuOpen ? /* @__PURE__ */ jsx("path", {
                d: "M6 18L18 6M6 6l12 12"
              }) : /* @__PURE__ */ jsx("path", {
                d: "M4 6h16M4 12h16M4 18h16"
              })
            })
          })]
        }), mobileMenuOpen && /* @__PURE__ */ jsx("div", {
          className: "md:hidden mt-4 pb-4 border-t border-gray-200",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col space-y-4 pt-4",
            children: [/* @__PURE__ */ jsx(Link, {
              to: "/products",
              onClick: () => setMobileMenuOpen(false),
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors py-2",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/features",
              onClick: () => setMobileMenuOpen(false),
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors py-2",
              children: "Tính năng"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/faq",
              onClick: () => setMobileMenuOpen(false),
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors py-2",
              children: "FAQ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/news",
              onClick: () => setMobileMenuOpen(false),
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors py-2",
              children: "Tin tức"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              onClick: () => setMobileMenuOpen(false),
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors py-2",
              children: "Liên hệ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/about",
              onClick: () => setMobileMenuOpen(false),
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors py-2",
              children: "Giới thiệu"
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex flex-col space-y-2 pt-2 border-t border-gray-200",
              children: [/* @__PURE__ */ jsx(Link, {
                to: "/contact",
                onClick: () => setMobileMenuOpen(false),
                className: "text-[#4f5664] hover:text-[#fa7313] transition-colors py-2",
                children: "Đăng nhập"
              }), /* @__PURE__ */ jsx(Link, {
                to: "/contact",
                onClick: () => setMobileMenuOpen(false),
                className: "bg-[#fa7313] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b845] transition-colors text-center",
                children: "Đăng ký"
              })]
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "container mx-auto px-4 py-16 md:py-24",
      children: /* @__PURE__ */ jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
        children: [/* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-5xl md:text-6xl font-bold text-[#191b1e] mb-6 leading-tight",
            children: "POSO Boss"
          }), /* @__PURE__ */ jsxs("p", {
            className: "text-xl text-[#4f5664] mb-8 opacity-80 leading-relaxed",
            children: ["Quản lý quán mọi lúc, mọi nơi", /* @__PURE__ */ jsx("br", {}), "Ứng dụng quản lý cho chủ quán"]
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-wrap gap-4 mb-8",
            children: [/* @__PURE__ */ jsxs("button", {
              className: "flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors",
              children: [/* @__PURE__ */ jsx("svg", {
                className: "w-5 h-5",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx("path", {
                  d: "M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.19,15.12L14.96,12.85L17.19,10.58L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                })
              }), "Google Play"]
            }), /* @__PURE__ */ jsxs("button", {
              className: "flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors",
              children: [/* @__PURE__ */ jsx("svg", {
                className: "w-5 h-5",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx("path", {
                  d: "M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
                })
              }), "App Store"]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "grid grid-cols-2 gap-4",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-3",
              children: [/* @__PURE__ */ jsx("div", {
                className: "w-12 h-12 bg-[#fa7313]/10 rounded-full flex items-center justify-center flex-shrink-0",
                children: /* @__PURE__ */ jsx("span", {
                  className: "text-[#fa7313] text-xl",
                  children: "✓"
                })
              }), /* @__PURE__ */ jsx("span", {
                className: "text-[#4f5664] text-sm",
                children: "Tích hợp với Shopeefood"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-3",
              children: [/* @__PURE__ */ jsx("div", {
                className: "w-12 h-12 bg-[#fa7313]/10 rounded-full flex items-center justify-center flex-shrink-0",
                children: /* @__PURE__ */ jsx("span", {
                  className: "text-[#fa7313] text-xl",
                  children: "✓"
                })
              }), /* @__PURE__ */ jsx("span", {
                className: "text-[#4f5664] text-sm",
                children: "Truy cập mọi lúc, mọi nơi"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-3",
              children: [/* @__PURE__ */ jsx("div", {
                className: "w-12 h-12 bg-[#fa7313]/10 rounded-full flex items-center justify-center flex-shrink-0",
                children: /* @__PURE__ */ jsx("span", {
                  className: "text-[#fa7313] text-xl",
                  children: "✓"
                })
              }), /* @__PURE__ */ jsx("span", {
                className: "text-[#4f5664] text-sm",
                children: "Báo cáo chính xác"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-3",
              children: [/* @__PURE__ */ jsx("div", {
                className: "w-12 h-12 bg-[#fa7313]/10 rounded-full flex items-center justify-center flex-shrink-0",
                children: /* @__PURE__ */ jsx("span", {
                  className: "text-[#fa7313] text-xl",
                  children: "✓"
                })
              }), /* @__PURE__ */ jsx("span", {
                className: "text-[#4f5664] text-sm",
                children: "Hỗ trợ tận tình"
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "relative",
          children: /* @__PURE__ */ jsx("div", {
            className: "bg-gray-100 rounded-2xl p-8 aspect-[3/4] max-w-sm mx-auto flex items-center justify-center",
            children: /* @__PURE__ */ jsxs("div", {
              className: "text-center",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "w-32 h-56 bg-white rounded-2xl shadow-2xl mx-auto mb-4 p-4 border-4 border-gray-200",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "bg-[#fa7313] h-8 rounded-t-lg mb-2"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "space-y-2",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "h-2 bg-gray-200 rounded"
                  }), /* @__PURE__ */ jsx("div", {
                    className: "h-2 bg-gray-200 rounded w-3/4"
                  }), /* @__PURE__ */ jsx("div", {
                    className: "h-16 bg-gray-100 rounded mt-4"
                  }), /* @__PURE__ */ jsx("div", {
                    className: "h-2 bg-gray-200 rounded"
                  })]
                })]
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm text-gray-500",
                children: "POSO Boss App"
              })]
            })
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-white py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold text-[#191b1e] mb-12 text-center",
          children: "POSO POS"
        }), /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
          children: [/* @__PURE__ */ jsx("div", {
            className: "order-2 lg:order-1",
            children: /* @__PURE__ */ jsxs("div", {
              className: "bg-gray-900 rounded-2xl p-8 shadow-2xl max-w-md mx-auto",
              children: [/* @__PURE__ */ jsx("div", {
                className: "bg-white rounded-lg p-4 mb-4",
                children: /* @__PURE__ */ jsx("div", {
                  className: "h-48 bg-gray-100 rounded flex items-center justify-center",
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "text-center text-gray-400",
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "grid grid-cols-3 gap-2 mb-4",
                      children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsx("div", {
                        className: "h-16 bg-gray-200 rounded"
                      }, i))
                    }), /* @__PURE__ */ jsx("div", {
                      className: "h-20 bg-gray-200 rounded"
                    })]
                  })
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "text-white text-sm text-center",
                children: "POS Terminal"
              })]
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "order-1 lg:order-2",
            children: [/* @__PURE__ */ jsx("div", {
              className: "space-y-6",
              children: [{
                num: "01",
                title: "Quản lý giao hàng",
                desc: "Quản lý và theo dõi đơn hàng giao hàng một cách hiệu quả"
              }, {
                num: "02",
                title: "Quản lý thực đơn",
                desc: "Dễ dàng cập nhật và quản lý thực đơn của nhà hàng"
              }, {
                num: "03",
                title: "Quản lý bàn",
                desc: "Quản lý trạng thái bàn, đặt bàn và chuyển bàn linh hoạt"
              }, {
                num: "04",
                title: "Quản lý đơn hàng",
                desc: "Theo dõi và xử lý đơn hàng từ nhiều kênh khác nhau"
              }, {
                num: "05",
                title: "Báo cáo thời gian thực",
                desc: "Xem báo cáo doanh thu và thống kê theo thời gian thực"
              }, {
                num: "06",
                title: "Quản lý hàng tồn",
                desc: "Kiểm soát tồn kho và cảnh báo khi hàng sắp hết"
              }, {
                num: "07",
                title: "Quản lý nhân viên",
                desc: "Phân quyền và quản lý nhân viên một cách hiệu quả"
              }].map((feature, index) => /* @__PURE__ */ jsxs("div", {
                className: "flex gap-4",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "flex-shrink-0",
                  children: /* @__PURE__ */ jsx("span", {
                    className: "text-2xl font-bold text-[#fa7313]",
                    children: feature.num
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: "text-xl font-semibold text-[#191b1e] mb-1",
                    children: feature.title
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-[#4f5664] opacity-80",
                    children: feature.desc
                  })]
                })]
              }, index))
            }), /* @__PURE__ */ jsx("div", {
              className: "mt-8 text-right",
              children: /* @__PURE__ */ jsx(Link, {
                to: "/features",
                className: "text-[#fa7313] font-semibold hover:underline",
                children: "Xem thêm →"
              })
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-gradient-to-b from-[#f0f9f4] to-white py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold text-[#191b1e] text-center mb-12",
          children: "Video giới thiệu sản phẩm"
        }), /* @__PURE__ */ jsx("div", {
          className: "max-w-4xl mx-auto",
          children: /* @__PURE__ */ jsxs("div", {
            className: "relative bg-gray-900 rounded-2xl overflow-hidden aspect-video",
            children: [/* @__PURE__ */ jsx("div", {
              className: "absolute inset-0 flex items-center justify-center",
              children: /* @__PURE__ */ jsx("button", {
                className: "w-20 h-20 bg-[#fa7313] rounded-full flex items-center justify-center hover:bg-[#00b845] transition-colors shadow-2xl",
                children: /* @__PURE__ */ jsx("svg", {
                  className: "w-10 h-10 text-white ml-1",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", {
                    d: "M8 5v14l11-7z"
                  })
                })
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-white py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold text-[#191b1e] text-center mb-12",
          children: "Khách hàng tiêu biểu"
        }), /* @__PURE__ */ jsx("div", {
          className: "flex flex-wrap justify-center gap-8 mb-12",
          children: ["JOURI", "TOMKIN Coffee", "AN AN GATEMA"].map((client, index) => /* @__PURE__ */ jsx("div", {
            className: "bg-gray-100 px-8 py-4 rounded-lg",
            children: /* @__PURE__ */ jsx("span", {
              className: "text-xl font-semibold text-[#191b1e]",
              children: client
            })
          }, index))
        }), /* @__PURE__ */ jsxs("div", {
          className: "max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12",
          children: [/* @__PURE__ */ jsx("div", {
            className: "text-6xl text-[#fa7313] mb-6",
            children: '"'
          }), /* @__PURE__ */ jsx("blockquote", {
            className: "text-xl text-[#191b1e] mb-6 leading-relaxed",
            children: "POSO POS đã giúp chúng tôi quản lý nhà hàng hiệu quả hơn rất nhiều. Giao diện dễ sử dụng, tính năng đầy đủ và hỗ trợ khách hàng rất tốt."
          }), /* @__PURE__ */ jsx("cite", {
            className: "text-[#4f5664] font-semibold",
            children: "- Nhà hàng Mỹ Cay Naga Phú Nhuận - Anh Thái"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-white py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold text-[#191b1e] text-center mb-12",
          children: "Tin Tức"
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
          children: [{
            title: "POSO Cập Nhật Chính Sách Bán Hàng",
            date: "15/12/2024",
            views: "1.2K"
          }, {
            title: "POSO Cập Nhật Email Hỗ Trợ Quản",
            date: "10/12/2024",
            views: "890"
          }, {
            title: "POSO Chúc Mừng Năm Mới",
            date: "01/01/2024",
            views: "2.5K"
          }, {
            title: "Chương trình khuyến mãi tháng 02 năm 2021",
            date: "01/02/2021",
            views: "1.8K"
          }].map((news2, index) => /* @__PURE__ */ jsxs("article", {
            className: "bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow",
            children: [/* @__PURE__ */ jsx("div", {
              className: "h-48 bg-gray-200 flex items-center justify-center",
              children: /* @__PURE__ */ jsx("span", {
                className: "text-gray-400",
                children: "Image"
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "p-4",
              children: [/* @__PURE__ */ jsx("h3", {
                className: "font-semibold text-[#191b1e] mb-2 line-clamp-2",
                children: news2.title
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-center justify-between text-sm text-[#4f5664]",
                children: [/* @__PURE__ */ jsx("span", {
                  children: news2.date
                }), /* @__PURE__ */ jsxs("span", {
                  children: [news2.views, " lượt xem"]
                })]
              })]
            })]
          }, index))
        }), /* @__PURE__ */ jsx("div", {
          className: "text-center",
          children: /* @__PURE__ */ jsx(Link, {
            to: "/news",
            className: "text-[#fa7313] font-semibold hover:underline",
            children: "Xem thêm →"
          })
        })]
      })
    }), /* @__PURE__ */ jsxs("section", {
      className: "bg-[#fa7313] py-16 relative overflow-hidden",
      children: [/* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4 relative z-10",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-4xl mx-auto text-center text-white",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-4xl md:text-5xl font-bold mb-4",
            children: "POSO POS"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-xl mb-2 opacity-90",
            children: "Hệ thống quản lý nhà hàng chuyên nghiệp"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-lg mb-8 opacity-80",
            children: "Giải pháp nhà hàng toàn diện"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/contact",
            className: "bg-white text-[#fa7313] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block",
            children: "Đăng ký Ngay"
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute right-0 top-0 bottom-0 w-1/3 opacity-10",
        children: /* @__PURE__ */ jsx("div", {
          className: "h-full bg-gray-900 rounded-l-full"
        })
      })]
    }), /* @__PURE__ */ jsx("footer", {
      className: "bg-[#191b1e] text-white py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h4", {
              className: "text-xl font-bold text-[#fa7313] mb-4",
              children: "POSO"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-400 text-sm leading-relaxed",
              children: "Giải pháp quản lý nhà hàng hàng đầu Việt Nam. Chúng tôi cung cấp các sản phẩm và dịch vụ tốt nhất để giúp doanh nghiệp của bạn phát triển."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Liên hệ"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: "Email: contact@POSOpos.vn"
              }), /* @__PURE__ */ jsx("li", {
                children: "Địa chỉ: 123 Đường ABC, TP. Hồ Chí Minh"
              })]
            }), /* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4 mt-6",
              children: "Sitemap"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/products",
                  className: "hover:text-white transition-colors",
                  children: "Sản phẩm"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/features",
                  className: "hover:text-white transition-colors",
                  children: "Tính năng"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/faq",
                  className: "hover:text-white transition-colors",
                  children: "FAQ"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/news",
                  className: "hover:text-white transition-colors",
                  children: "Tin tức"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/contact",
                  className: "hover:text-white transition-colors",
                  children: "Liên hệ"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/about",
                  className: "hover:text-white transition-colors",
                  children: "Giới thiệu"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Xã hội"
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex gap-4",
              children: [/* @__PURE__ */ jsx("a", {
                href: "#",
                className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#fa7313] transition-colors",
                children: /* @__PURE__ */ jsx("svg", {
                  className: "w-5 h-5",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", {
                    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  })
                })
              }), /* @__PURE__ */ jsx("a", {
                href: "#",
                className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#fa7313] transition-colors",
                children: /* @__PURE__ */ jsx("svg", {
                  className: "w-5 h-5",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", {
                    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  })
                })
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "border-t border-gray-700 pt-8 text-center text-gray-400 text-sm",
          children: /* @__PURE__ */ jsx("p", {
            children: "© 2024 POSO POS. Tất cả quyền được bảo lưu."
          })
        })]
      })
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
function meta$5({}) {
  return [{
    title: "Sản phẩm - POSO POS"
  }, {
    name: "description",
    content: "Khám phá các sản phẩm POSO POS - Giải pháp quản lý nhà hàng toàn diện"
  }];
}
const products = UNSAFE_withComponentProps(function Products() {
  const products2 = [{
    id: 1,
    name: "POSO POS",
    description: "Hệ thống điểm bán hàng chuyên nghiệp cho nhà hàng, quán cafe, bar",
    features: ["Bán hàng nhanh chóng", "Quản lý đơn hàng", "In hóa đơn", "Báo cáo doanh thu"],
    price: "Liên hệ"
  }, {
    id: 2,
    name: "POSO Manager",
    description: "Phần mềm quản lý nhà hàng toàn diện từ xa",
    features: ["Quản lý từ xa", "Báo cáo chi tiết", "Quản lý nhân viên", "Theo dõi KPI"],
    price: "Liên hệ"
  }, {
    id: 3,
    name: "POSO Staff",
    description: "Ứng dụng dành cho nhân viên phục vụ",
    features: ["Nhận order", "Giao tiếp nội bộ", "Xem lịch làm việc", "Báo cáo ca làm"],
    price: "Miễn phí"
  }];
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx("header", {
      className: "bg-white border-b border-gray-200 sticky top-0 z-50",
      children: /* @__PURE__ */ jsx("nav", {
        className: "container mx-auto px-4 py-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/",
            className: "flex items-center",
            children: /* @__PURE__ */ jsx("h1", {
              className: "text-2xl font-bold text-[#191b1e]",
              children: "POSO POS"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "hidden md:flex items-center space-x-8",
            children: [/* @__PURE__ */ jsx(Link, {
              to: "/products",
              className: "text-[#fa7313] font-semibold",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/features",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tính năng"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/faq",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "FAQ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/news",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tin tức"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Liên hệ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/about",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Giới thiệu"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "bg-[#fa7313] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b845] transition-colors",
              children: "Dùng thử miễn phí"
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#f8f9fc] py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl font-bold text-[#191b1e] text-center mb-6",
          children: "Sản phẩm POSO POS"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-[#4f5664] text-center max-w-3xl mx-auto opacity-80",
          children: "Giải pháp quản lý nhà hàng toàn diện với bộ sản phẩm đa dạng, đáp ứng mọi nhu cầu của bạn"
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: products2.map((product) => /* @__PURE__ */ jsxs("div", {
            className: "bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-2xl font-bold text-[#191b1e] mb-4",
              children: product.name
            }), /* @__PURE__ */ jsx("p", {
              className: "text-[#4f5664] mb-6 opacity-80",
              children: product.description
            }), /* @__PURE__ */ jsx("ul", {
              className: "space-y-3 mb-8",
              children: product.features.map((feature, index) => /* @__PURE__ */ jsxs("li", {
                className: "flex items-start",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-[#fa7313] mr-2",
                  children: "✓"
                }), /* @__PURE__ */ jsx("span", {
                  className: "text-[#4f5664]",
                  children: feature
                })]
              }, index))
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex items-center justify-between",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-2xl font-bold text-[#191b1e]",
                children: product.price
              }), /* @__PURE__ */ jsx(Link, {
                to: "/contact",
                className: "bg-[#fa7313] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b845] transition-colors",
                children: "Liên hệ"
              })]
            })]
          }, product.id))
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#fa7313] py-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold text-white mb-4",
          children: "Cần tư vấn về sản phẩm?"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-white mb-8 opacity-90",
          children: "Đội ngũ của chúng tôi sẵn sàng hỗ trợ bạn"
        }), /* @__PURE__ */ jsx(Link, {
          to: "/contact",
          className: "bg-white text-[#fa7313] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block",
          children: "Liên hệ ngay"
        })]
      })
    }), /* @__PURE__ */ jsx("footer", {
      className: "bg-[#191b1e] text-white py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-8",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h4", {
              className: "text-xl font-bold mb-4",
              children: "POSO POS"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-400 text-sm",
              children: "Giải pháp quản lý nhà hàng hàng đầu"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/products",
                  className: "hover:text-white transition-colors",
                  children: "Sản phẩm"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/features",
                  className: "hover:text-white transition-colors",
                  children: "Tính năng"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Hỗ trợ"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/faq",
                  className: "hover:text-white transition-colors",
                  children: "FAQ"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/contact",
                  className: "hover:text-white transition-colors",
                  children: "Liên hệ"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Công ty"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/about",
                  className: "hover:text-white transition-colors",
                  children: "Giới thiệu"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/news",
                  className: "hover:text-white transition-colors",
                  children: "Tin tức"
                })
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm",
          children: /* @__PURE__ */ jsx("p", {
            children: "© 2024 POSO POS. Tất cả quyền được bảo lưu."
          })
        })]
      })
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: products,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
function meta$4({}) {
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
    children: [/* @__PURE__ */ jsx("header", {
      className: "bg-white border-b border-gray-200 sticky top-0 z-50",
      children: /* @__PURE__ */ jsx("nav", {
        className: "container mx-auto px-4 py-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/",
            className: "flex items-center",
            children: /* @__PURE__ */ jsx("h1", {
              className: "text-2xl font-bold text-[#191b1e]",
              children: "POSO POS"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "hidden md:flex items-center space-x-8",
            children: [/* @__PURE__ */ jsx(Link, {
              to: "/products",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/features",
              className: "text-[#fa7313] font-semibold",
              children: "Tính năng"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/faq",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "FAQ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/news",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tin tức"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Liên hệ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/about",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Giới thiệu"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "bg-[#fa7313] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b845] transition-colors",
              children: "Dùng thử miễn phí"
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#f8f9fc] py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl font-bold text-[#191b1e] text-center mb-6",
          children: "Tính năng POSO POS"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-[#4f5664] text-center max-w-3xl mx-auto opacity-80",
          children: "Khám phá các tính năng mạnh mẽ giúp quản lý nhà hàng hiệu quả hơn"
        })]
      })
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
          to: "/contact",
          className: "bg-white text-[#fa7313] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block mt-4",
          children: "Dùng thử miễn phí"
        })]
      })
    }), /* @__PURE__ */ jsx("footer", {
      className: "bg-[#191b1e] text-white py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-8",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h4", {
              className: "text-xl font-bold mb-4",
              children: "POSO POS"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-400 text-sm",
              children: "Giải pháp quản lý nhà hàng hàng đầu"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/products",
                  className: "hover:text-white transition-colors",
                  children: "Sản phẩm"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/features",
                  className: "hover:text-white transition-colors",
                  children: "Tính năng"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Hỗ trợ"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/faq",
                  className: "hover:text-white transition-colors",
                  children: "FAQ"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/contact",
                  className: "hover:text-white transition-colors",
                  children: "Liên hệ"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Công ty"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/about",
                  className: "hover:text-white transition-colors",
                  children: "Giới thiệu"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/news",
                  className: "hover:text-white transition-colors",
                  children: "Tin tức"
                })
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm",
          children: /* @__PURE__ */ jsx("p", {
            children: "© 2024 POSO POS. Tất cả quyền được bảo lưu."
          })
        })]
      })
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: features,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
function meta$3({}) {
  return [{
    title: "FAQ - POSO POS"
  }, {
    name: "description",
    content: "Câu hỏi thường gặp về POSO POS"
  }];
}
const faq = UNSAFE_withComponentProps(function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [{
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
    children: [/* @__PURE__ */ jsx("header", {
      className: "bg-white border-b border-gray-200 sticky top-0 z-50",
      children: /* @__PURE__ */ jsx("nav", {
        className: "container mx-auto px-4 py-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/",
            className: "flex items-center",
            children: /* @__PURE__ */ jsx("h1", {
              className: "text-2xl font-bold text-[#191b1e]",
              children: "POSO POS"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "hidden md:flex items-center space-x-8",
            children: [/* @__PURE__ */ jsx(Link, {
              to: "/products",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/features",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tính năng"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/faq",
              className: "text-[#fa7313] font-semibold",
              children: "FAQ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/news",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tin tức"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Liên hệ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/about",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Giới thiệu"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "bg-[#fa7313] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b845] transition-colors",
              children: "Dùng thử miễn phí"
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#f8f9fc] py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl font-bold text-[#191b1e] text-center mb-6",
          children: "Câu hỏi thường gặp"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-[#4f5664] text-center max-w-3xl mx-auto opacity-80",
          children: "Tìm câu trả lời cho những thắc mắc phổ biến về POSO POS"
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4 max-w-4xl",
        children: /* @__PURE__ */ jsx("div", {
          className: "space-y-4",
          children: faqs.map((faq2, index) => /* @__PURE__ */ jsxs("div", {
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
    }), /* @__PURE__ */ jsx("footer", {
      className: "bg-[#191b1e] text-white py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-8",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h4", {
              className: "text-xl font-bold mb-4",
              children: "POSO POS"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-400 text-sm",
              children: "Giải pháp quản lý nhà hàng hàng đầu"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/products",
                  className: "hover:text-white transition-colors",
                  children: "Sản phẩm"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/features",
                  className: "hover:text-white transition-colors",
                  children: "Tính năng"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Hỗ trợ"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/faq",
                  className: "hover:text-white transition-colors",
                  children: "FAQ"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/contact",
                  className: "hover:text-white transition-colors",
                  children: "Liên hệ"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Công ty"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/about",
                  className: "hover:text-white transition-colors",
                  children: "Giới thiệu"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/news",
                  className: "hover:text-white transition-colors",
                  children: "Tin tức"
                })
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm",
          children: /* @__PURE__ */ jsx("p", {
            children: "© 2024 POSO POS. Tất cả quyền được bảo lưu."
          })
        })]
      })
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: faq,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function meta$2({}) {
  return [{
    title: "Tin tức - POSO POS"
  }, {
    name: "description",
    content: "Tin tức và cập nhật mới nhất về POSO POS"
  }];
}
const news = UNSAFE_withComponentProps(function News() {
  const newsItems = [{
    id: 1,
    title: "POSO POS ra mắt tính năng quản lý đa chi nhánh",
    excerpt: "Giờ đây bạn có thể quản lý nhiều chi nhánh từ một tài khoản duy nhất, theo dõi doanh thu và hoạt động của từng chi nhánh trong thời gian thực.",
    date: "15 Tháng 12, 2024",
    category: "Cập nhật"
  }, {
    id: 2,
    title: "Hướng dẫn tối ưu hóa doanh thu với POSO POS",
    excerpt: "Khám phá các mẹo và chiến lược để tăng doanh thu nhà hàng của bạn bằng cách sử dụng các tính năng báo cáo và phân tích của POSO POS.",
    date: "10 Tháng 12, 2024",
    category: "Hướng dẫn"
  }, {
    id: 3,
    title: "POSO POS tích hợp với các cổng thanh toán mới",
    excerpt: "Chúng tôi vui mừng thông báo về việc tích hợp với thêm nhiều cổng thanh toán phổ biến, giúp khách hàng thanh toán dễ dàng hơn.",
    date: "5 Tháng 12, 2024",
    category: "Cập nhật"
  }, {
    id: 4,
    title: "Case study: Quán cafe tăng 30% doanh thu nhờ POSO POS",
    excerpt: "Câu chuyện thành công của một quán cafe tại TP.HCM đã tăng doanh thu đáng kể sau khi triển khai POSO POS.",
    date: "28 Tháng 11, 2024",
    category: "Case study"
  }, {
    id: 5,
    title: "Bảo mật dữ liệu: Ưu tiên hàng đầu tại POSO POS",
    excerpt: "Tìm hiểu về các biện pháp bảo mật mà chúng tôi áp dụng để bảo vệ dữ liệu của khách hàng.",
    date: "20 Tháng 11, 2024",
    category: "Bảo mật"
  }, {
    id: 6,
    title: "POSO POS phiên bản 2.0 - Nhiều cải tiến mới",
    excerpt: "Ra mắt phiên bản 2.0 với giao diện mới, hiệu năng tốt hơn và nhiều tính năng được yêu cầu bởi người dùng.",
    date: "15 Tháng 11, 2024",
    category: "Cập nhật"
  }];
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [/* @__PURE__ */ jsx("header", {
      className: "bg-white border-b border-gray-200 sticky top-0 z-50",
      children: /* @__PURE__ */ jsx("nav", {
        className: "container mx-auto px-4 py-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/",
            className: "flex items-center",
            children: /* @__PURE__ */ jsx("h1", {
              className: "text-2xl font-bold text-[#191b1e]",
              children: "POSO POS"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "hidden md:flex items-center space-x-8",
            children: [/* @__PURE__ */ jsx(Link, {
              to: "/products",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/features",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tính năng"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/faq",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "FAQ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/news",
              className: "text-[#fa7313] font-semibold",
              children: "Tin tức"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Liên hệ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/about",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Giới thiệu"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "bg-[#fa7313] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b845] transition-colors",
              children: "Dùng thử miễn phí"
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#f8f9fc] py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl font-bold text-[#191b1e] text-center mb-6",
          children: "Tin tức & Cập nhật"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-[#4f5664] text-center max-w-3xl mx-auto opacity-80",
          children: "Cập nhật mới nhất về POSO POS, tính năng mới, và các câu chuyện thành công"
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: newsItems.map((item) => /* @__PURE__ */ jsx("article", {
            className: "bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow",
            children: /* @__PURE__ */ jsxs("div", {
              className: "p-6",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-sm font-semibold text-[#fa7313] bg-[#fa7313]/10 px-3 py-1 rounded-full",
                  children: item.category
                }), /* @__PURE__ */ jsx("span", {
                  className: "text-sm text-[#4f5664] opacity-70",
                  children: item.date
                })]
              }), /* @__PURE__ */ jsx("h3", {
                className: "text-xl font-bold text-[#191b1e] mb-3 hover:text-[#fa7313] transition-colors",
                children: item.title
              }), /* @__PURE__ */ jsx("p", {
                className: "text-[#4f5664] opacity-80 leading-relaxed mb-4",
                children: item.excerpt
              }), /* @__PURE__ */ jsx(Link, {
                to: `/news/${item.id}`,
                className: "text-[#fa7313] font-semibold hover:underline inline-flex items-center",
                children: "Đọc thêm →"
              })]
            })
          }, item.id))
        })
      })
    }), /* @__PURE__ */ jsx("footer", {
      className: "bg-[#191b1e] text-white py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-8",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h4", {
              className: "text-xl font-bold mb-4",
              children: "POSO POS"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-400 text-sm",
              children: "Giải pháp quản lý nhà hàng hàng đầu"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/products",
                  className: "hover:text-white transition-colors",
                  children: "Sản phẩm"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/features",
                  className: "hover:text-white transition-colors",
                  children: "Tính năng"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Hỗ trợ"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/faq",
                  className: "hover:text-white transition-colors",
                  children: "FAQ"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/contact",
                  className: "hover:text-white transition-colors",
                  children: "Liên hệ"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Công ty"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/about",
                  className: "hover:text-white transition-colors",
                  children: "Giới thiệu"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/news",
                  className: "hover:text-white transition-colors",
                  children: "Tin tức"
                })
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm",
          children: /* @__PURE__ */ jsx("p", {
            children: "© 2024 POSO POS. Tất cả quyền được bảo lưu."
          })
        })]
      })
    })]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: news,
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
    children: [/* @__PURE__ */ jsx("header", {
      className: "bg-white border-b border-gray-200 sticky top-0 z-50",
      children: /* @__PURE__ */ jsx("nav", {
        className: "container mx-auto px-4 py-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/",
            className: "flex items-center",
            children: /* @__PURE__ */ jsx("h1", {
              className: "text-2xl font-bold text-[#191b1e]",
              children: "POSO POS"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "hidden md:flex items-center space-x-8",
            children: [/* @__PURE__ */ jsx(Link, {
              to: "/products",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/features",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tính năng"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/faq",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "FAQ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/news",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tin tức"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "text-[#fa7313] font-semibold",
              children: "Liên hệ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/about",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Giới thiệu"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "bg-[#fa7313] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b845] transition-colors",
              children: "Dùng thử miễn phí"
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#f8f9fc] py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl font-bold text-[#191b1e] text-center mb-6",
          children: "Liên hệ với chúng tôi"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-[#4f5664] text-center max-w-3xl mx-auto opacity-80",
          children: "Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ để được tư vấn miễn phí"
        })]
      })
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
                  className: "block text-sm font-semibold text-[#191b1e] mb-2",
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
                  className: "block text-sm font-semibold text-[#191b1e] mb-2",
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
                  className: "block text-sm font-semibold text-[#191b1e] mb-2",
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
                  className: "block text-sm font-semibold text-[#191b1e] mb-2",
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
                  children: ["123 Đường ABC, Phường XYZ", /* @__PURE__ */ jsx("br", {}), "Quận 1, TP. Hồ Chí Minh", /* @__PURE__ */ jsx("br", {}), "Việt Nam"]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold text-[#191b1e] mb-3",
                  children: "Điện thoại"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-[#4f5664] opacity-80",
                  children: /* @__PURE__ */ jsx("a", {
                    href: "tel:+84901234567",
                    className: "hover:text-[#fa7313] transition-colors",
                    children: "+84 90 123 4567"
                  })
                })]
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold text-[#191b1e] mb-3",
                  children: "Email"
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-[#4f5664] opacity-80",
                  children: /* @__PURE__ */ jsx("a", {
                    href: "mailto:contact@POSOpos.vn",
                    className: "hover:text-[#fa7313] transition-colors",
                    children: "contact@POSOpos.vn"
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
    }), /* @__PURE__ */ jsx("footer", {
      className: "bg-[#191b1e] text-white py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-8",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h4", {
              className: "text-xl font-bold mb-4",
              children: "POSO POS"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-400 text-sm",
              children: "Giải pháp quản lý nhà hàng hàng đầu"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/products",
                  className: "hover:text-white transition-colors",
                  children: "Sản phẩm"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/features",
                  className: "hover:text-white transition-colors",
                  children: "Tính năng"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Hỗ trợ"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/faq",
                  className: "hover:text-white transition-colors",
                  children: "FAQ"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/contact",
                  className: "hover:text-white transition-colors",
                  children: "Liên hệ"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Công ty"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/about",
                  className: "hover:text-white transition-colors",
                  children: "Giới thiệu"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/news",
                  className: "hover:text-white transition-colors",
                  children: "Tin tức"
                })
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm",
          children: /* @__PURE__ */ jsx("p", {
            children: "© 2024 POSO POS. Tất cả quyền được bảo lưu."
          })
        })]
      })
    })]
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    children: [/* @__PURE__ */ jsx("header", {
      className: "bg-white border-b border-gray-200 sticky top-0 z-50",
      children: /* @__PURE__ */ jsx("nav", {
        className: "container mx-auto px-4 py-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/",
            className: "flex items-center",
            children: /* @__PURE__ */ jsx("h1", {
              className: "text-2xl font-bold text-[#191b1e]",
              children: "POSO POS"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "hidden md:flex items-center space-x-8",
            children: [/* @__PURE__ */ jsx(Link, {
              to: "/products",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/features",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tính năng"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/faq",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "FAQ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/news",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Tin tức"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "text-[#4f5664] hover:text-[#fa7313] transition-colors",
              children: "Liên hệ"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/about",
              className: "text-[#fa7313] font-semibold",
              children: "Giới thiệu"
            }), /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "bg-[#fa7313] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b845] transition-colors",
              children: "Dùng thử miễn phí"
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-[#f8f9fc] py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl font-bold text-[#191b1e] text-center mb-6",
          children: "Về POSO POS"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-[#4f5664] text-center max-w-3xl mx-auto opacity-80",
          children: "Giải pháp quản lý nhà hàng hàng đầu Việt Nam"
        })]
      })
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
    }), /* @__PURE__ */ jsx("footer", {
      className: "bg-[#191b1e] text-white py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-8",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h4", {
              className: "text-xl font-bold mb-4",
              children: "POSO POS"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-400 text-sm",
              children: "Giải pháp quản lý nhà hàng hàng đầu"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Sản phẩm"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/products",
                  className: "hover:text-white transition-colors",
                  children: "Sản phẩm"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/features",
                  className: "hover:text-white transition-colors",
                  children: "Tính năng"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Hỗ trợ"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/faq",
                  className: "hover:text-white transition-colors",
                  children: "FAQ"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/contact",
                  className: "hover:text-white transition-colors",
                  children: "Liên hệ"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "font-semibold mb-4",
              children: "Công ty"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-2 text-gray-400 text-sm",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/about",
                  className: "hover:text-white transition-colors",
                  children: "Giới thiệu"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/news",
                  className: "hover:text-white transition-colors",
                  children: "Tin tức"
                })
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm",
          children: /* @__PURE__ */ jsx("p", {
            children: "© 2024 POSO POS. Tất cả quyền được bảo lưu."
          })
        })]
      })
    })]
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-qg_ElXZw.js", "imports": ["/assets/chunk-EPOLDU6W-DgUzZJuC.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-BAUrewNG.js", "imports": ["/assets/chunk-EPOLDU6W-DgUzZJuC.js"], "css": ["/assets/root-C1tHbhjT.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-4x-N2UN7.js", "imports": ["/assets/chunk-EPOLDU6W-DgUzZJuC.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/products": { "id": "routes/products", "parentId": "root", "path": "products", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/products-CEN6qdPC.js", "imports": ["/assets/chunk-EPOLDU6W-DgUzZJuC.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/features": { "id": "routes/features", "parentId": "root", "path": "features", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/features-BlFYXalv.js", "imports": ["/assets/chunk-EPOLDU6W-DgUzZJuC.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/faq": { "id": "routes/faq", "parentId": "root", "path": "faq", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/faq-DkDy7Htv.js", "imports": ["/assets/chunk-EPOLDU6W-DgUzZJuC.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/news": { "id": "routes/news", "parentId": "root", "path": "news", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/news-DKR4h8Cm.js", "imports": ["/assets/chunk-EPOLDU6W-DgUzZJuC.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/contact-Dd4g0dxO.js", "imports": ["/assets/chunk-EPOLDU6W-DgUzZJuC.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/about-BX5CQgJ0.js", "imports": ["/assets/chunk-EPOLDU6W-DgUzZJuC.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-fe414ae8.js", "version": "fe414ae8", "sri": void 0 };
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
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/features": {
    id: "routes/features",
    parentId: "root",
    path: "features",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/faq": {
    id: "routes/faq",
    parentId: "root",
    path: "faq",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/news": {
    id: "routes/news",
    parentId: "root",
    path: "news",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route7
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
