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
              className="bg-gray-50 rounded-2xl p-4 shadow-sm hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              {/* NAME */}
              <h3 className="font-semibold mb-2">{item.name}</h3>

              {/* PRICE */}
              <p className="text-blue-600 font-bold mb-3">${item.price}</p>

              {/* BUTTON */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg text-sm hover:opacity-90 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
