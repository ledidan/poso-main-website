import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SiteHeader } from "../components/SiteHeader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "POSO POS" },
    {
      name: "description",
      content:
        "POSO là Nhãn Hiệu Máy Bán Hàng Hàng Đầu Thế Giới. Giải pháp quản lý nhà hàng duy nhất bạn cần.",
    },
  ];
}

function POSOPOSSection() {
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
                    className={`p-2 rounded ${selectedFeature === idx ? "bg-poso-primary/10 border border-poso-primary" : "bg-gray-50"}`}
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

    // POS Screen variations based on selected feature
    switch (selectedFeature) {
      case 0: // Quản lý giao hàng
        return (
          <div className="bg-gray-100 rounded-2xl p-6 h-96 flex flex-col">
            <div className="flex-1 bg-white rounded-lg"></div>
          </div>
        );
      case 1: // Quản lý thực đơn
        return (
          <div className="bg-gray-900 rounded-lg p-4 h-96 text-white">
            <div className="mb-4">
              <div className="text-lg font-bold text-poso-primary mb-2">
                POSO POS
              </div>
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
      case 2: // Quản lý bàn
        return (
          <div className="bg-gray-900 rounded-lg p-4 h-96 text-white">
            <div className="mb-4">
              <div className="text-lg font-bold text-poso-primary mb-2">
                POSO POS
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className={`h-16 rounded flex items-center justify-center text-xs ${i === 1 ? "bg-poso-primary" : i === 3 ? "bg-red-600" : "bg-gray-700"}`}
                >
                  Bàn {i}
                </div>
              ))}
            </div>
          </div>
        );
      case 3: // Quản lý đơn hàng
        return (
          <div className="bg-gray-900 rounded-lg p-4 h-96 text-white">
            <div className="mb-4">
              <div className="text-lg font-bold text-poso-primary mb-2">
                POSO POS
              </div>
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
      case 4: // Báo cáo thời gian thực
        return (
          <div className="bg-gray-900 rounded-lg p-4 h-96 text-white">
            <div className="mb-4">
              <div className="text-lg font-bold text-poso-primary mb-2">
                POSO POS
              </div>
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
      case 5: // Quản lý hàng tồn
        return (
          <div className="bg-gray-900 rounded-lg p-4 h-96 text-white">
            <div className="mb-4">
              <div className="text-lg font-bold text-poso-primary mb-2">
                POSO POS
              </div>
              <div className="bg-gray-800 rounded p-2 mb-2">
                <input
                  type="text"
                  placeholder="Tìm kiếm hàng hóa"
                  className="bg-gray-700 text-white w-full p-2 rounded text-sm"
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
                  className={`bg-gray-800 rounded p-3 ${item.status === "low" ? "border border-red-500" : ""}`}
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
      case 6: // Quản lý nhân viên
        return (
          <div className="bg-gray-900 rounded-lg p-4 h-96 text-white">
            <div className="mb-4">
              <div className="text-lg font-bold text-poso-primary mb-2">
                POSO POS
              </div>
            </div>
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
                    className={`w-3 h-3 rounded-full ${staff.status === "online" ? "bg-poso-primary" : "bg-gray-500"}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-gray-900 rounded-lg p-4 h-96 text-white flex items-center justify-center">
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
        <h2 className="text-4xl font-bold text-poso-dark mb-8 text-center">
          POSO POS
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => {
              setActiveTab("pos");
              setSelectedFeature(0);
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "pos" ? "text-black" : "text-poso-gray"
            }`}
          >
            POSO POS
          </button>
          <button
            onClick={() => {
              setActiveTab("boss");
              setSelectedFeature(0);
            }}
            className={`px-6 py-3 text-lg rounded-lg font-semibold transition-colors ${
              activeTab === "boss" ? "text-black" : "text-poso-gray"
            }`}
          >
            POSO Boss
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-2xl max-w-md mx-auto">
              {renderPOSScreen()}
              <div className="text-white text-sm text-center mt-4 font-medium">
                POS Terminal
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedFeature(index)}
                  className={`flex gap-4 cursor-pointer transition-colors ${
                    selectedFeature === index
                      ? "bg-poso-primary/10 border-l-4 border-poso-primary pl-4 -ml-4"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex-shrink-0 pt-1">
                    <span className="text-2xl font-bold text-poso-primary">
                      {feature.num}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-poso-dark mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-poso-gray opacity-80 leading-relaxed">
                      {feature.desc}
                    </p>
                    {selectedFeature === index && (
                      <p className="text-poso-gray opacity-70 mt-3 text-sm leading-relaxed">
                        {feature.detailDesc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white ">
      <SiteHeader variant="home" />

      {/* Hero Section - POSO Boss with Swiper */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-poso-dark mb-6 leading-tight">
                  POSO Boss
                </h2>
                <p className="text-xl text-poso-gray mb-8 opacity-80 leading-relaxed">
                  Quản lý quán mọi lúc, mọi nơi
                  <br />
                  Ứng dụng quản lý cho chủ quán
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.19,15.12L14.96,12.85L17.19,10.58L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Google Play
                  </button>
                  <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    App Store
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-poso-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-poso-primary text-xl">✓</span>
                    </div>
                    <span className="text-poso-gray text-sm">
                      Tích hợp với Shopeefood
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-poso-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-poso-primary text-xl">✓</span>
                    </div>
                    <span className="text-poso-gray text-sm">
                      Truy cập mọi lúc, mọi nơi
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-poso-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-poso-primary text-xl">✓</span>
                    </div>
                    <span className="text-poso-gray text-sm">
                      Báo cáo chính xác
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-poso-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-poso-primary text-xl">✓</span>
                    </div>
                    <span className="text-poso-gray text-sm">Hỗ trợ tận tình</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-8 aspect-[3/4] max-w-sm mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-56 bg-white rounded-2xl shadow-2xl mx-auto mb-4 p-4 border-4 border-gray-200">
                      <div className="bg-poso-primary h-8 rounded-t-lg mb-2"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-16 bg-gray-100 rounded mt-4"></div>
                        <div className="h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">POSO Boss App</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-poso-dark mb-6 leading-tight">
                  POSO POS
                </h2>
                <p className="text-xl text-poso-gray mb-8 opacity-80 leading-relaxed">
                  Hệ thống quản lý nhà hàng chuyên nghiệp
                  <br />
                  Giải pháp nhà hàng toàn diện
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-poso-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-poso-primary-hover transition-colors inline-block"
                  >
                    Đăng ký Ngay
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-poso-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-poso-primary text-xl">✓</span>
                    </div>
                    <span className="text-poso-gray text-sm">
                      Quản lý đơn hàng
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-poso-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-poso-primary text-xl">✓</span>
                    </div>
                    <span className="text-poso-gray text-sm">
                      Báo cáo thời gian thực
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-poso-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-poso-primary text-xl">✓</span>
                    </div>
                    <span className="text-poso-gray text-sm">
                      Quản lý kho hàng
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-poso-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-poso-primary text-xl">✓</span>
                    </div>
                    <span className="text-poso-gray text-sm">Tích hợp ShopeeFood</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-8 aspect-[3/4] max-w-sm mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-56 bg-gray-900 rounded-2xl shadow-2xl mx-auto mb-4 p-4 border-4 border-gray-200">
                      <div className="bg-poso-primary h-8 rounded-t-lg mb-2"></div>
                      <div className="space-y-2 text-white text-xs">
                        <div className="h-2 bg-gray-700 rounded"></div>
                        <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                        <div className="h-16 bg-gray-800 rounded mt-4"></div>
                        <div className="h-2 bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">POSO POS Terminal</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* POSO POS Features Section */}
      <POSOPOSSection />

      {/* Video Introduction Section */}
      <section className="bg-gradient-to-b from-[#f0f9f4] to-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-poso-dark text-center mb-12">
            Video giới thiệu sản phẩm
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-poso-primary rounded-full flex items-center justify-center hover:bg-poso-primary-hover transition-colors shadow-2xl">
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section with Swiper */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-poso-dark text-center mb-12">
            Khách hàng tiêu biểu
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {["JOURI", "TOMKIN Coffee", "AN AN GATEMA"].map((client, index) => (
              <div key={index} className="bg-gray-100 px-8 py-4 rounded-lg">
                <span className="text-xl font-semibold text-poso-dark">
                  {client}
                </span>
              </div>
            ))}
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            
            pagination={{ clickable: true }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper max-w-4xl mx-auto"
          >
            <SwiperSlide>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="text-6xl text-poso-primary mb-6">"</div>
                <blockquote className="text-xl text-poso-dark mb-6 leading-relaxed">
                  POSO POS đã giúp chúng tôi quản lý nhà hàng hiệu quả hơn rất
                  nhiều. Giao diện dễ sử dụng, tính năng đầy đủ và hỗ trợ khách hàng
                  rất tốt.
                </blockquote>
                <cite className="text-poso-gray font-semibold">
                  - Nhà hàng Mỹ Cay Naga Phú Nhuận - Anh Thái
                </cite>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="text-6xl text-poso-primary mb-6">"</div>
                <blockquote className="text-xl text-poso-dark mb-6 leading-relaxed">
                  Từ khi sử dụng POSO Boss, tôi có thể quản lý quán từ xa một cách
                  dễ dàng. Báo cáo chi tiết và chính xác giúp tôi ra quyết định
                  kinh doanh tốt hơn.
                </blockquote>
                <cite className="text-poso-gray font-semibold">
                  - Quán Cafe JOURI - Chị Lan
                </cite>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="text-6xl text-poso-primary mb-6">"</div>
                <blockquote className="text-xl text-poso-dark mb-6 leading-relaxed">
                  Tích hợp ShopeeFood rất tiện lợi, giúp chúng tôi quản lý đơn hàng
                  giao hàng một cách tự động. Doanh thu tăng đáng kể nhờ tính năng
                  này.
                </blockquote>
                <cite className="text-poso-gray font-semibold">
                  - TOMKIN Coffee - Anh Minh
                </cite>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="text-6xl text-poso-primary mb-6">"</div>
                <blockquote className="text-xl text-poso-dark mb-6 leading-relaxed">
                  Hệ thống POSO POS rất ổn định và dễ sử dụng. Nhân viên học cách
                  sử dụng rất nhanh, giúp tiết kiệm thời gian đào tạo.
                </blockquote>
                <cite className="text-poso-gray font-semibold">
                  - AN AN GATEMA - Chị Hương
                </cite>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-poso-dark text-center mb-12">
            Tin Tức
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "POSO Cập Nhật Chính Sách Bán Hàng",
                date: "15/12/2024",
                views: "1.2K",
              },
              {
                title: "POSO Cập Nhật Email Hỗ Trợ Quản",
                date: "10/12/2024",
                views: "890",
              },
              {
                title: "POSO Chúc Mừng Năm Mới",
                date: "01/01/2024",
                views: "2.5K",
              },
              {
                title: "Chương trình khuyến mãi tháng 02 năm 2021",
                date: "01/02/2021",
                views: "1.8K",
              },
            ].map((news, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-poso-dark mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-poso-gray">
                    <span>{news.date}</span>
                    <span>{news.views} lượt xem</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/news"
              className="text-poso-primary font-semibold hover:underline"
            >
              Xem thêm →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-poso-primary py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">POSO POS</h2>
            <p className="text-xl mb-2 opacity-90">
              Hệ thống quản lý nhà hàng chuyên nghiệp
            </p>
            <p className="text-lg mb-8 opacity-80">
              Giải pháp nhà hàng toàn diện
            </p>
            <Link
              to="/contact"
              className="bg-white text-poso-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Đăng ký Ngay
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
          <div className="h-full bg-gray-900 rounded-l-full"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-poso-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-poso-primary mb-4">POSO</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Giải pháp quản lý nhà hàng hàng đầu Việt Nam. Chúng tôi cung cấp
                các sản phẩm và dịch vụ tốt nhất để giúp doanh nghiệp của bạn
                phát triển.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Liên hệ</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Email: contact@posopos.vn</li>
                <li>Địa chỉ: 123 Đường ABC, TP. Hồ Chí Minh</li>
              </ul>
              <h5 className="font-semibold mb-4 mt-6">Sitemap</h5>
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
                    to="/news"
                    className="hover:text-white transition-colors"
                  >
                    Tin tức
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
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    Giới thiệu
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Xã hội</h5>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-poso-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-poso-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 POSO POS. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
