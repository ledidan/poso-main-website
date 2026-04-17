export function HomeMarketSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-poso-primary">Góc nhìn thị trường</p>
        <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Tinh thần nội dung chính được biên soạn từ benchmark ngành
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-[#355b63]">
          POSO tổng hợp và viết lại theo định vị riêng: gọn, thực dụng và tập trung đúng bài toán tạp hoá.
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-poso-primary">Bài học từ nền tảng lớn</p>
          <h3 className="mt-2 text-xl font-bold">Đa kênh chỉ hiệu quả khi dữ liệu tập trung</h3>
          <p className="mt-2 leading-7 text-[#355b63]">
            Các hệ thống dẫn đầu đều đặt trọng tâm vào một nguồn dữ liệu duy nhất cho bán hàng, kho, khách hàng và báo cáo.
            POSO áp dụng nguyên tắc này nhưng tối giản cho mô hình tạp hoá để cửa hàng triển khai nhanh hơn.
          </p>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-poso-primary">Ứng dụng vào POSO</p>
          <h3 className="mt-2 text-xl font-bold">Ưu tiên trải nghiệm vận hành mỗi ngày</h3>
          <p className="mt-2 leading-7 text-[#355b63]">
            Thay vì dàn trải quá nhiều nghiệp vụ, POSO đẩy mạnh Mobile App cho chủ tiệm và Web App cho nhân viên quầy,
            giúp xử lý nhanh giờ cao điểm và vẫn chốt sổ rõ ràng cuối ngày.
          </p>
        </article>
      </div>
    </section>
  );
}
