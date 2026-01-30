import type { Route } from "./+types/terms";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Điều khoản và Điều kiện - POSO" },
    {
      name: "description",
      content: "Điều khoản và điều kiện sử dụng hệ thống POSO",
    },
  ];
}

export default function Terms() {
  return (
    <div className="mx-4 max-w-4xl py-6 md:mx-auto">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Điều khoản và Điều kiện sử dụng
      </h1>

      <p className="mb-4">
        Khi truy cập hoặc sử dụng nền tảng POSO (“dịch vụ”), bạn xác nhận rằng bạn
        đã đọc, hiểu và đồng ý với các Điều khoản và Điều kiện này. Nếu bạn không
        đồng ý, vui lòng ngừng sử dụng dịch vụ.
      </p>

      <h2 className="mt-6 mb-2 font-semibold">1. Định nghĩa</h2>
      <ul className="mb-4 list-disc pl-6">
        <li>
          <strong>POSO</strong>: nền tảng phần mềm quản lý bán hàng (POS) do chúng
          tôi cung cấp.
        </li>
        <li>
          <strong>Người dùng</strong>: cá nhân hoặc tổ chức sử dụng POSO.
        </li>
        <li>
          <strong>Dữ liệu</strong>: mọi thông tin phát sinh trong quá trình sử
          dụng hệ thống.
        </li>
      </ul>

      <h2 className="mt-6 mb-2 font-semibold">
        2. Điều kiện sử dụng dịch vụ
      </h2>
      <ul className="mb-4 list-disc pl-6">
        <li>Người dùng phải cung cấp thông tin chính xác khi đăng ký.</li>
        <li>
          Chịu trách nhiệm bảo mật tài khoản và các hoạt động phát sinh từ tài
          khoản của mình.
        </li>
        <li>
          Không sử dụng POSO cho các mục đích trái pháp luật hoặc gian lận.
        </li>
      </ul>

      <h2 className="mt-6 mb-2 font-semibold">
        3. Quyền và nghĩa vụ của người dùng
      </h2>
      <ul className="mb-4 list-disc pl-6">
        <li>Sử dụng dịch vụ đúng mục đích kinh doanh hợp pháp.</li>
        <li>Tự chịu trách nhiệm về dữ liệu, hóa đơn và giao dịch.</li>
        <li>
          Không can thiệp, phá hoại hoặc truy cập trái phép vào hệ thống.
        </li>
      </ul>

      <h2 className="mt-6 mb-2 font-semibold">
        4. Quyền và trách nhiệm của POSO
      </h2>
      <ul className="mb-4 list-disc pl-6">
        <li>Duy trì và cải tiến chất lượng dịch vụ.</li>
        <li>
          Tạm ngưng hoặc chấm dứt cung cấp dịch vụ khi người dùng vi phạm điều
          khoản.
        </li>
        <li>
          Không chịu trách nhiệm đối với thiệt hại gián tiếp phát sinh trong quá
          trình sử dụng.
        </li>
      </ul>

      <h2 className="mt-6 mb-2 font-semibold">
        5. Dữ liệu và quyền sở hữu
      </h2>
      <p className="mb-4">
        Người dùng sở hữu toàn bộ dữ liệu phát sinh từ hoạt động kinh doanh của
        mình. POSO chỉ sử dụng dữ liệu này nhằm mục đích vận hành, cải thiện dịch
        vụ và tuân thủ quy định pháp luật.
      </p>

      <h2 className="mt-6 mb-2 font-semibold">
        6. Thanh toán và phí dịch vụ
      </h2>
      <p className="mb-4">
        Một số tính năng của POSO có thể yêu cầu trả phí. Mức phí, chu kỳ thanh
        toán và chính sách hoàn tiền (nếu có) sẽ được công bố rõ ràng trước khi
        người dùng đăng ký sử dụng.
      </p>

      <h2 className="mt-6 mb-2 font-semibold">
        7. Giới hạn trách nhiệm
      </h2>
      <p className="mb-4">
        POSO không chịu trách nhiệm đối với mất mát dữ liệu, gián đoạn kinh doanh
        hoặc thiệt hại phát sinh do lỗi kỹ thuật, sự cố mạng hoặc yếu tố ngoài tầm
        kiểm soát.
      </p>

      <h2 className="mt-6 mb-2 font-semibold">
        8. Chấm dứt dịch vụ
      </h2>
      <p className="mb-4">
        Người dùng có thể ngừng sử dụng dịch vụ bất kỳ lúc nào. POSO có quyền tạm
        khóa hoặc chấm dứt tài khoản nếu phát hiện vi phạm điều khoản.
      </p>

      <h2 className="mt-6 mb-2 font-semibold">
        9. Thay đổi điều khoản
      </h2>
      <p className="mb-4">
        POSO có quyền cập nhật các Điều khoản này theo thời gian. Việc tiếp tục
        sử dụng dịch vụ đồng nghĩa với việc bạn chấp nhận các thay đổi đó.
      </p>

      <h2 className="mt-6 mb-2 font-semibold">10. Liên hệ</h2>
      <p>
        Mọi thắc mắc liên quan đến Điều khoản sử dụng, vui lòng liên hệ:
        <br />
        <strong>Email:</strong> support@poso.vn
      </p>
    </div>
  );
}
