export function HomeSecuritySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h3 className="text-2xl font-bold text-poso-dark md:text-3xl">
          Quy trình phát triển nghiêm ngặt để bảo vệ dữ liệu cửa hàng
        </h3>
        <p className="mt-3 max-w-4xl leading-7 text-[#355b63]">
          POSO kiểm soát chặt chẽ các lớp dữ liệu vận hành quan trọng: bán hàng, tồn kho và giao dịch.
          Dữ liệu được theo dõi và đồng bộ theo chuẩn nội bộ để hạn chế rủi ro thất thoát thông tin.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-poso-primary">
          <span className="rounded-full bg-orange-50 px-4 py-2">Bảo mật nhiều lớp</span>
          <span className="rounded-full bg-orange-50 px-4 py-2">Theo dõi lịch sử thao tác</span>
          <span className="rounded-full bg-orange-50 px-4 py-2">Đồng bộ dữ liệu liên tục</span>
        </div>
      </div>
    </section>
  );
}
