import { useState } from "react";
import { Link } from "react-router";

export function HomePOSSection() {
  const [activeTab, setActiveTab] = useState<"pos" | "boss">("pos");
  const [selectedFeature, setSelectedFeature] = useState(0);

  const posFeatures = [
    {
      num: "01",
      title: "Quản lý giao hàng",
      desc: "Quản lý và theo dõi đơn hàng giao hàng một cách hiệu quả",
      detailDesc:
        "Tích hợp dịch vụ giao thức ăn trực tuyến ShopeeFood.vn giúp quản lý và tự động hóa giao hàng. Xem và xử lý đơn hàng giao hàng trong thời gian thực.",
    },
    {
      num: "02",
      title: "Quản lý thực đơn",
      desc: "Dễ dàng cập nhật và quản lý thực đơn của nhà hàng",
      detailDesc:
        "Quản lý thực đơn linh hoạt với khả năng thêm, sửa, xóa món ăn. Phân loại món theo danh mục và quản lý giá cả dễ dàng.",
    },
    {
      num: "03",
      title: "Quản lý bàn",
      desc: "Quản lý trạng thái bàn, đặt bàn và chuyển bàn linh hoạt",
      detailDesc:
        "Theo dõi trạng thái bàn theo thời gian thực. Quản lý đặt bàn, chuyển bàn và thanh toán một cách hiệu quả.",
    },
    {
      num: "04",
      title: "Quản lý đơn hàng",
      desc: "Theo dõi và xử lý đơn hàng từ nhiều kênh khác nhau",
      detailDesc:
        "Tổng hợp đơn hàng từ nhiều kênh: tại quán, giao hàng, đặt bàn. Xử lý và theo dõi trạng thái đơn hàng dễ dàng.",
    },
    {
      num: "05",
      title: "Báo cáo thời gian thực",
      desc: "Xem báo cáo doanh thu và thống kê theo thời gian thực",
      detailDesc:
        "Báo cáo doanh thu, sản phẩm bán chạy và nhiều chỉ số khác được cập nhật theo thời gian thực. Hỗ trợ ra quyết định nhanh chóng.",
    },
    {
      num: "06",
      title: "Quản lý hàng tồn",
      desc: "Kiểm soát tồn kho và cảnh báo khi hàng sắp hết",
      detailDesc:
        "Theo dõi tồn kho tự động, cảnh báo khi hàng sắp hết. Quản lý nhập xuất hàng hóa chi tiết với lịch sử đầy đủ.",
    },
    {
      num: "07",
      title: "Quản lý nhân viên",
      desc: "Phân quyền và quản lý nhân viên một cách hiệu quả",
      detailDesc:
        "Phân quyền chi tiết cho từng nhân viên. Quản lý ca làm việc, chấm công và tính lương tự động.",
    },
  ];

  const bossFeatures = [
    {
      num: "01",
      title: "Quản lý giao hàng MỚI",
      desc: "Tích hợp dịch vụ giao thức ăn trực tuyến ShopeeFood.vn",
      detailDesc:
        "Tích hợp dịch vụ giao thức ăn trực tuyến ShopeeFood.vn giúp quản lý và tự động hóa giao hàng. Xem và xử lý đơn hàng giao hàng từ xa.",
    },
    {
      num: "02",
      title: "Quản lý thực đơn",
      desc: "Dễ dàng cập nhật và quản lý thực đơn từ xa",
      detailDesc:
        "Quản lý thực đơn từ xa với khả năng thêm, sửa, xóa món ăn. Phân loại món theo danh mục và quản lý giá cả từ ứng dụng mobile.",
    },
    {
      num: "03",
      title: "Quản lý bàn",
      desc: "Quản lý trạng thái bàn và đặt bàn từ xa",
      detailDesc:
        "Theo dõi trạng thái bàn từ xa. Quản lý đặt bàn, chuyển bàn và thanh toán từ ứng dụng mobile.",
    },
    {
      num: "04",
      title: "Quản lý đơn hàng",
      desc: "Theo dõi và xử lý đơn hàng từ nhiều kênh",
      detailDesc:
        "Tổng hợp đơn hàng từ nhiều kênh: tại quán, giao hàng, đặt bàn. Xử lý và theo dõi trạng thái đơn hàng từ xa.",
    },
    {
      num: "05",
      title: "Báo cáo thời gian thực",
      desc: "Xem báo cáo doanh thu và thống kê mọi lúc",
      detailDesc:
        "Báo cáo doanh thu, sản phẩm bán chạy được cập nhật theo thời gian thực. Xem báo cáo từ mọi nơi trên ứng dụng mobile.",
    },
    {
      num: "06",
      title: "Quản lý hàng tồn",
      desc: "Kiểm soát tồn kho và cảnh báo từ xa",
      detailDesc:
        "Theo dõi tồn kho từ xa, cảnh báo khi hàng sắp hết. Quản lý nhập xuất hàng hóa từ ứng dụng mobile.",
    },
    {
      num: "07",
      title: "Quản lý nhân viên",
      desc: "Phân quyền và quản lý nhân viên từ xa",
      detailDesc:
        "Phân quyền chi tiết cho từng nhân viên. Quản lý ca làm việc, chấm công từ ứng dụng mobile.",
    },
  ];

  const features = activeTab === "pos" ? posFeatures : bossFeatures;

  const renderPOSScreen = () => {
    if (activeTab === "boss") {
      return (
        <div className="bg-white rounded-lg p-4 h-96 flex items-center justify-center">
          <div className="text-center w-full">
            <div className="mb-4">
              <div className="text-lg font-bold text-poso-dark mb-2">
                POSO Boss
              </div>
              <div className="space-y-2">
                {features.map((f, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded ${
                      selectedFeature === idx
                        ? "bg-poso-primary/10 border border-poso-primary"
                        : "bg-gray-50"
                    }`}
                  >
                    <div className="text-sm font-semibold text-poso-dark">
                      {f.num} {f.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    switch (selectedFeature) {
      case 0:
        return (
          <div className="rounded-2xl p-6 h-96 flex flex-col">
            <div className="flex-1 rounded-lg" />
          </div>
        );
      case 1:
        return (
          <div className="rounded-lg p-4 h-96 text-white">
            <div className="mb-4">
              <div className="flex gap-2 mb-4 text-xs">
                <div className="bg-poso-primary px-3 py-1 rounded">Drinks</div>
                <div className="px-3 py-1 rounded">Main</div>
                <div className="px-3 py-1 rounded">Dessert</div>
              </div>
            </div>
            <div className="space-y-2 overflow-y-auto max-h-64">
              {[
                "Strawberry popcorn latte",
                "Gong cha green tea",
                "Cappuccino",
                "Espresso",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded p-3 flex justify-between"
                >
                  <div>
                    <div className="font-semibold">{item}</div>
                    <div className="text-xs text-gray-400">53,000₫</div>
                  </div>
                  <button className="bg-poso-primary px-3 py-1 rounded text-xs">
                    Thêm
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="rounded-lg p-4 h-96 text-white">
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className={`h-16 rounded flex items-center justify-center text-xs ${
                    i === 1
                      ? "bg-poso-primary"
                      : i === 3
                        ? "bg-red-600"
                        : "bg-gray-700"
                  }`}
                >
                  Bàn {i}
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="rounded-lg p-4 h-96 text-white">
            <div className="mb-4">
              <div className="flex gap-2 mb-4 text-xs">
                <div className="bg-poso-primary px-3 py-1 rounded">Tất cả</div>
                <div className="px-3 py-1 rounded">Tại quán</div>
                <div className="px-3 py-1 rounded">Giao hàng</div>
                <div className="px-3 py-1 rounded">Đặt bàn</div>
              </div>
            </div>
            <div className="space-y-2 overflow-y-auto max-h-64">
              {[
                "#ORD001 - Đã xác nhận",
                "#ORD002 - Đang chuẩn bị",
                "#ORD003 - Đã hoàn thành",
              ].map((order, idx) => (
                <div key={idx} className="bg-gray-800 rounded p-3">
                  <div className="font-semibold">{order}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    96,000₫ • 2 món
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="rounded-lg p-4 h-96 text-white">
            <div className="mb-4">
              <div className="text-xs text-gray-400 mb-4">Báo cáo hôm nay</div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded p-4">
                <div className="text-xs text-gray-400 mb-1">Doanh thu</div>
                <div className="text-2xl font-bold">2,450,000₫</div>
              </div>
              <div className="bg-gray-800 rounded p-4">
                <div className="text-xs text-gray-400 mb-1">Đơn hàng</div>
                <div className="text-xl font-bold">48 đơn</div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="rounded-lg p-4 h-96 text-white">
            <div className="mb-4">
              <div className="rounded p-2 mb-2">
                <input
                  type="text"
                  placeholder="Tìm kiếm hàng hóa"
                  className="text-white w-full p-2 rounded text-sm"
                />
              </div>
            </div>
            <div className="space-y-2 overflow-y-auto max-h-64">
              {[
                { name: "Cà phê", stock: "50kg", status: "ok" },
                { name: "Sữa tươi", stock: "5l", status: "low" },
                { name: "Đường", stock: "20kg", status: "ok" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gray-800 rounded p-3 ${
                    item.status === "low" ? "border border-red-500" : ""
                  }`}
                >
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Tồn: {item.stock}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="rounded-lg p-4 h-96 text-white">
            <div className="space-y-2 overflow-y-auto max-h-64">
              {[
                { name: "Nguyễn Văn A", role: "Quản lý", status: "online" },
                { name: "Trần Thị B", role: "Nhân viên", status: "offline" },
                { name: "Lê Văn C", role: "Nhân viên", status: "online" },
              ].map((staff, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded p-3 flex justify-between items-center"
                >
                  <div>
                    <div className="font-semibold">{staff.name}</div>
                    <div className="text-xs text-gray-400">{staff.role}</div>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      staff.status === "online"
                        ? "bg-poso-primary"
                        : "bg-gray-500"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="rounded-lg p-4 h-96 text-white flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-poso-primary mb-2">
                POSO POS
              </div>
              <div className="text-gray-400">Feature Screen</div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="w-full max-w-[1340px] mx-auto px-4">
        <div className="flex justify-evenly mb-12">
          {/* POS TAB */}
          <button
            onClick={() => {
              setActiveTab("pos");
              setSelectedFeature(0);
            }}
            className="relative cursor-pointer"
          >
            <h2
              className={`text-4xl font-bold transition-colors ${
                activeTab === "pos" ? "text-poso-primary" : "text-poso-gray"
              } hover:text-poso-primary`}
            >
              Poso POS
            </h2>

            {/* underline */}
            <span
              className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-10 rounded-full bg-poso-dark transition-all duration-300 ${
                activeTab === "pos"
                  ? "opacity-100 scale-x-100"
                  : "opacity-0 scale-x-0"
              }`}
            />
          </button>

          <button
            onClick={() => {
              setActiveTab("boss");
              setSelectedFeature(0);
            }}
            className="relative cursor-pointer"
          >
            <h2
              className={`text-4xl font-bold transition-colors ${
                activeTab === "boss" ? "text-poso-primary" : "text-poso-gray"
              } hover:text-poso-primary`}
            >
              Poso Business
            </h2>

            <span
              className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-10 rounded-full bg-poso-dark transition-all duration-300 ${
                activeTab === "boss"
                  ? "opacity-100 scale-x-100"
                  : "opacity-0 scale-x-0"
              }`}
            />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          <div className="bg-order-2 lg:order-1">
            <div className="rounded-3xl p-6 max-w-xl mx-auto relative">
              {/* Device image */}
              <img
                src="/images/poso_sunmi_device.png"
                alt="POSO Terminal"
                className="w-full h-auto pointer-events-none"
              />
              <div className="text-md font-bold text-poso-primary mb-2 absolute bottom-12 left-[42%]">
                POSO POS
              </div>
              {/* Screen area */}
              <div
                className="
        absolute
        top-[12%]
        left-[7%]
        w-[85%]
        h-[55%]
        rounded-xl
        overflow-auto
      "
              >
                {renderPOSScreen()}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {features.map((feature, index) => {
                const isActive = selectedFeature === index;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setSelectedFeature(index)}
                    onFocus={() => setSelectedFeature(index)}
                    className={`flex gap-4 cursor-pointer rounded-lg border border-transparent transition-all duration-300 ease-out ${
                      isActive
                        ? "bg-poso-primary/10 border-poso-primary shadow-xl"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="shrink-0 pt-1 pl-2">
                      <span className="text-2xl font-bold text-poso-primary">
                        {feature.num}
                      </span>
                    </div>
                    <div className="flex-1 pr-4 py-3">
                      <h3 className="text-xl font-bold text-poso-dark mb-1 leading-tight transition-colors duration-300">
                        {feature.title}
                      </h3>
                      {/* <p
                        className={`${isActive ? 
                            "opacity-100 max-h-40 translate-y-0 " 
                            : "opacity-0 max-h-0 -translate-y-1 pointer-events-none"}
                             ease-out text-poso-gray leading-relaxed text-sm transition-colors duration-300`}
                      >
                        {feature.desc}
                      </p> */}
                      <p
                        className={`text-poso-gray text-sm max-w-md leading-relaxed transition-all duration-300 ease-out ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 max-h-0 pointer-events-none"
                        }`}
                      >
                        {feature.detailDesc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 text-right">
              <Link
                to="/features"
                className="text-poso-primary font-semibold hover:underline text-lg"
              >
                Xem thêm →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
