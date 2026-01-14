export function HomeHighlights() {
  const items = [
    {
      title: "Tích hợp với ShopeeFood",
      description: "Quản lý và tự động hóa giao hàng",
    },
    {
      title: "Truy cập mọi lúc, mọi nơi",
      description: "Cập nhật tình hình kinh doanh từ mọi thiết bị",
    },
    {
      title: "Báo cáo chính xác",
      description: "Báo cáo kinh doanh toàn diện chỉ trong thời gian ngắn",
    },
    {
      title: "Hỗ trợ tận tình",
      description: "Luôn sẵn sàng hỗ trợ bạn 7 ngày một tuần",
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="w-full max-w-[1340px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {items.map((item, index) => (
            <div key={index}>
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full border border-poso-primary/30 flex items-center justify-center text-3xl text-poso-primary">
                  {index === 0 && "🛵"}
                  {index === 1 && "🖥️"}
                  {index === 2 && "📊"}
                  {index === 3 && "💬"}
                </div>
              </div>
              <h3 className="font-semibold text-poso-dark mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-poso-gray opacity-80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

