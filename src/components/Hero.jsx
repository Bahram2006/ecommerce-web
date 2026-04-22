export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">

      {/* 🔥 SOFT LIGHT EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent)] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Discover Your Next <br />
            Favorite Product
          </h1>

          <p className="text-white/80 mb-8 text-lg">
            Explore premium quality items with modern design and best prices.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Shop Now
            </button>

            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-12 md:mt-0">
          <img
            src="/src/assets/images/f4279552.jpg"
            alt="hero"
            className="w-[400px] rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </section>
  );
}