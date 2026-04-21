export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer">
      
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="text-gray-500 mt-1">
          ${product.price}
        </p>

        <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}