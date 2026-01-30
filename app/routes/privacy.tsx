import type { Route } from "./+types/privacy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chính sách bảo mật - POSO" },
    {
      name: "description",
      content:
        "Chính sách bảo mật và quyền riêng tư khi sử dụng hệ thống POSO",
    },
  ];
}

export default function Privacy() {
  return (
    <div className="mx-4 max-w-4xl py-6 md:mx-auto">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Chính sách bảo mật & Quyền riêng tư
      </h1>

      <p className="mb-4">
        POSO (“chúng tôi”) cam kết bảo vệ quyền riêng tư và dữ liệu của người dùng.
        Chính sách này mô tả cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ
        thông tin khi bạn sử dụng nền tảng POSO, bao gồm website, ứng dụng và
        các dịch vụ liên quan.
      </p>

      <h2 className="mt-6 mb-2 font-semibold">
        1. Thông tin chúng tôi thu thập
      </h2>
      <p className="mb-2">
        Chúng tôi có thể thu thập các loại thông tin sau:
      </p>
      <ul className="mb-4 list-disc pl-6">
        <li>
          Thông tin tài khoản: tên, email, số điện thoại, thông tin đăng nhập.
        </li>
        <li>
          Thông tin cửa hàng/doanh nghiệp: tên cửa hàng, địa chỉ, cấu hình POS.
        </li>
        <li>
          Dữ liệu vận hành: đơn hàng, sản phẩm, hóa đơn, bàn, nhân viên, tồn kho.
        </li>
        <li>
          Dữ liệu kỹ thuật: địa chỉ IP, thiết bị, trình duyệt, log hệ thống.
        </li>
      </ul>

      <h2 className="mt-6 mb-2 font-semibold">
        2. Mục đích sử dụng thông tin
      </h2>
      <ul className="mb-4 list-disc pl-6">
        <li>Cung cấp và duy trì hoạt động của hệ thống POSO.</li>
        <li>Quản lý đơn hàng, thanh toán và báo cáo kinh doanh.</li>
        <li>Cải thiện trải nghiệm người dùng và hiệu suất hệ thống.</li>
        <li>Gửi thông báo hệ thống, cảnh báo hoặc cập nhật quan trọng.</li>
        <li>Hỗ trợ kỹ thuật và xử lý sự cố.</li>
      </ul>

      <h2 className="mt-6 mb-2 font-semibold">
        3. Chia sẻ và tiết lộ thông tin
      </h2>
      <p className="mb-4">
        POSO không bán hoặc trao đổi dữ liệu người dùng cho bên thứ ba. Thông tin
        chỉ được chia sẻ trong các trường hợp cần thiết để vận hành dịch vụ, tuân
        thủ yêu cầu pháp luật hoặc khi có sự đồng ý từ người dùng.
      </p>

      <h2 className="mt-6 mb-2 font-semibold">
        4. Lưu trữ và bảo mật dữ liệu
      </h2>
      <p className="mb-4">
        Dữ liệu được lưu trữ trên hệ thống máy chủ bảo mật. Chúng tôi áp dụng các
        biện pháp kỹ thuật như phân quyền truy cập, xác thực và sao lưu định kỳ để
        bảo vệ thông tin. Tuy nhiên, không có hệ thống nào an toàn tuyệt đối và
        chúng tôi không thể cam kết bảo mật 100%.
      </p>

      <h2 className="mt-6 mb-2 font-semibold">
        5. Cookies và lưu trữ cục bộ
      </h2>
      <p className="mb-4">
        POSO sử dụng cookies và local storage để duy trì trạng thái đăng nhập,
        lưu cấu hình hệ thống và tối ưu trải nghiệm người dùng. Bạn có thể tắt
        cookies trong trình duyệt, nhưng một số tính năng có thể hoạt động không
        chính xác.
      </p>

      <h2 className="mt-6 mb-2 font-semibold">
        6. Quyền của người dùng
      </h2>
      <ul className="mb-4 list-disc pl-6">
        <li>Yêu cầu truy cập, chỉnh sửa hoặc cập nhật thông tin cá nhân.</li>
        <li>Yêu cầu xóa dữ liệu khi ngừng sử dụng dịch vụ.</li>
        <li>Quản lý cài đặt thông báo và quyền truy cập.</li>
      </ul>

      <h2 className="mt-6 mb-2 font-semibold">
        7. Thay đổi chính sách
      </h2>
      <p className="mb-4">
        POSO có thể cập nhật Chính sách bảo mật này theo thời gian. Các thay đổi
        quan trọng sẽ được thông báo trên website hoặc trong ứng dụng.
      </p>

      <h2 className="mt-6 mb-2 font-semibold">
        8. Liên hệ
      </h2>
      <p>
        Nếu bạn có bất kỳ câu hỏi nào liên quan đến Chính sách bảo mật, vui lòng
        liên hệ với chúng tôi qua email:{" "}
        <strong>support@poso.vn</strong>
      </p>
    </div>
  );
}
