import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function HomeTestimonials() {
  const clientLogos = [
    { name: "Nâu Bùi", logo: "/partner/naubui-logo.jpg" },
    { name: "Phở Thìn", logo: "/partner/phothin-logo.png" },
    { name: "Mỹ Cay Sasin", logo: "/partner/sasin-logo.jpg" },
    { name: "Bánh mì huỳnh Hoa", logo: "/partner/banhmi-logo.png" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[980px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-poso-dark text-center mb-12">
          Khách hàng tiêu biểu
        </h2>
        <div className="mb-12 overflow-hidden">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={0}
            pagination={{ clickable: true }}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={8000}
            grabCursor={true}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            loopAdditionalSlides={clientLogos.length}
            className="w-full !overflow-visible"
          >
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className="flex items-center justify-center px-6">
                  <div className="rounded-xl px-6 py-4 min-w-[140px] max-w-[180px] h-56 flex items-center justify-center ">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
                POSO POS đã giúp chúng tôi quản lý bán hàng hiệu quả hơn rất
                nhiều. Giao diện dễ sử dụng, tính năng đầy đủ và hỗ trợ khách
                hàng rất tốt.
              </blockquote>
              <cite className="text-poso-gray font-semibold">
                - Quán Nâu Bùi - Anh Trung
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
                - Quán Phở Thìn - Chị Như
              </cite>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="text-6xl text-poso-primary mb-6">"</div>
              <blockquote className="text-xl text-poso-dark mb-6 leading-relaxed">
                Tích hợp ShopeeFood rất tiện lợi, giúp chúng tôi quản lý đơn
                hàng giao hàng một cách tự động. Doanh thu tăng đáng kể nhờ tính
                năng này.
              </blockquote>
              <cite className="text-poso-gray font-semibold">
                - Quán Bánh mì huỳnh Hoa - Anh Minh
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
                - Quán Mỹ Cay Sasin - Chị Hương
              </cite>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
