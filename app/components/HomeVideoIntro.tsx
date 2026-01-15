export function HomeVideoIntro() {
  return (
    <section className="bg-gradient-to-b from-[#f0f9f4] to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-poso-dark text-center mb-12">
          Video giới thiệu sản phẩm
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/25LVTNpTqmQ"
              title="Giới thiệu phần mềm quản lý bán hàng Poso 2026"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
