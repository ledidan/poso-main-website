export function HomeVideoIntro() {
  return (
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

