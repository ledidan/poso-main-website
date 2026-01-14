import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function HomeTestimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-poso-dark text-center mb-12">
          Khách hàng tiêu biểu
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {["JOURI", "TOMKIN Coffee", "AN AN GATEMA"].map((client, index) => (
            <div key={index} className="bg-poso-primary/10 px-8 py-4 rounded-lg">
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
                POSO POS đã giúp chúng tôi quản lý bán hàng hiệu quả hơn rất
                nhiều. Giao diện dễ sử dụng, tính năng đầy đủ và hỗ trợ khách
                hàng rất tốt.
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
                Từ khi sử dụng POSO Boss, tôi có thể quản lý quán từ xa một
                cách dễ dàng. Báo cáo chi tiết và chính xác giúp tôi ra quyết
                định kinh doanh tốt hơn.
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
                Tích hợp ShopeeFood rất tiện lợi, giúp chúng tôi quản lý đơn
                hàng giao hàng một cách tự động. Doanh thu tăng đáng kể nhờ
                tính năng này.
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
  );
}

