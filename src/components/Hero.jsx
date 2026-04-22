export default function Hero() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-8">

        {/* 🔥 BIG BANNER */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <img
            src="/src/assets/images/f4279552.jpg"
            alt="banner"
            className="w-full h-[350px] object-cover"
          />

          {/* TEXT OVERLAY */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10">
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Big Sale is Live 🔥
            </h1>
            <p className="text-white/80 mb-6">
              Up to 50% discount on selected products
            </p>

            <button className="w-fit bg-white text-black px-6 py-2 rounded-lg font-medium hover:scale-105 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* 🔽 4 SMALL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src="/src/assets/images/f4276992.jpg"
                alt="card"
                className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-4">
                <h3 className="font-semibold mb-2">Category {item}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Explore products
                </p>

                <button className="text-blue-600 text-sm font-medium hover:underline">
                  Shop →
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}