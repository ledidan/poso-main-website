export function HomeHighlights() {
  const items = [
    {
      title: "Tích hợp với ShopeeFood",
      description: "Quản lý và tự động hóa giao hàng",
      icon: "delivery",
    },
    {
      title: "Truy cập mọi lúc, mọi nơi",
      description: "Cập nhật tình hình kinh doanh từ mọi thiết bị",
      icon: "devices",
    },
    {
      title: "Báo cáo chính xác",
      description: "Báo cáo kinh doanh toàn diện chỉ trong thời gian ngắn",
      icon: "report",
    },
    {
      title: "Hỗ trợ tận tình",
      description: "Luôn sẵn sàng hỗ trợ bạn 7 ngày một tuần",
      icon: "support",
    },
  ] as const;

  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="w-full max-w-[1250px] mx-auto px-4">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 text-center">
          {items.map((item) => (
            <div key={item.title}>
              <div className="mb-4 flex justify-center">
                <div className="text-poso-primary">
                  {item.icon === "delivery" && (
                    <svg
                      className="w-20 h-20"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="6"
                        y="20"
                        width="26"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M32 24h10l8 8v6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="18"
                        cy="44"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="46"
                        cy="44"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M10 44h4M38 44h4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  {item.icon === "devices" && (
                    <svg
                      className="w-20 h-20"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="10"
                        y="14"
                        width="30"
                        height="24"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <rect
                        x="36"
                        y="24"
                        width="18"
                        height="22"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 40h14M24 46h6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  {item.icon === "report" && (
                    <svg
                      className="w-20 h-20"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="14"
                        y="10"
                        width="30"
                        height="40"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M20 38l6-10 6 7 7-14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 20h14M20 26h8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  {item.icon === "support" && (
                    <svg
                      className="w-20 h-20"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="24"
                        cy="22"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M14 38c2.5-4 6.5-6 10-6s7.5 2 10 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <rect
                        x="34"
                        y="18"
                        width="16"
                        height="12"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M42 30v4c0 2-1.5 3.5-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-poso-dark mb-1">
                {item.title}
              </h3>
              <p className=" text-poso-gray opacity-80 leading-relaxed w-[80%] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          {items.map((item) => (
            <div key={item.title} className="flex items-center-safe">
              <div className="flex justify-center">
                <div className="text-poso-primary">
                  {item.icon === "delivery" && (
                    <svg
                      className="w-28 h-28"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="6"
                        y="20"
                        width="26"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M32 24h10l8 8v6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="18"
                        cy="44"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="46"
                        cy="44"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M10 44h4M38 44h4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  {item.icon === "devices" && (
                    <svg
                      className="w-28 h-28"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="10"
                        y="14"
                        width="30"
                        height="24"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <rect
                        x="36"
                        y="24"
                        width="18"
                        height="22"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 40h14M24 46h6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  {item.icon === "report" && (
                    <svg
                      className="w-28 h-28"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="14"
                        y="10"
                        width="30"
                        height="40"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M20 38l6-10 6 7 7-14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 20h14M20 26h8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  {item.icon === "support" && (
                    <svg
                      className="w-28 h-28"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="24"
                        cy="22"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M14 38c2.5-4 6.5-6 10-6s7.5 2 10 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <rect
                        x="34"
                        y="18"
                        width="16"
                        height="12"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M42 30v4c0 2-1.5 3.5-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div className="items-start text-left">
                <h3 className="font-semibold text-md text-poso-dark mb-1">
                  {item.title}
                </h3>
                <p className=" font-stretch-50% text-poso-gray opacity-90 w-full mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
