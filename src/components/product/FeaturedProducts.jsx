import { products } from "../../data/products";

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* ❤️ FAVORITE */}
                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                  ❤️
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                {/* NAME */}
                <h3 className="font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>

                {/* ⭐ RATING (fake) */}
                <div className="text-yellow-400 text-sm mb-2">★★★★☆</div>

                {/* PRICE + BTN */}
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">${item.price}</span>

                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-lg text-sm hover:scale-105 transition">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
