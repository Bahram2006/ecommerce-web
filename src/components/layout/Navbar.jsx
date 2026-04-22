import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Heart,
  Bell,
} from "lucide-react";
import { products } from "../../data/products";

export default function Navbar() {
  // 🔥 STATES
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const [cartItems] = useState([
    {
      id: 1,
      name: "Nike Shoes",
      price: 120,
      image: "/src/assets/images/1.jpg",
      qty: 1,
    },
    {
      id: 2,
      name: "Adidas Shoes",
      price: 95,
      image: "/src/assets/images/3.jpg",
      qty: 1,
    },
  ]);

  const categories = ["All", "Shoes", "Clothes", "Electronics"];

  // 🔍 SEARCH
  const handleSearch = (value) => {
    setSearch(value);

    if (!value.trim()) {
      setFiltered([]);
      return;
    }

    const results = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(results);
  };

  // 💰 TOTAL
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">

      {/* 🔝 TOP NAV */}
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-3xl font-extrabold tracking-tight">
          <span className="text-gray-900">Shop</span>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            X
          </span>
        </Link>

        {/* SEARCH */}
        <div className="flex-1 flex justify-center px-6">
          <div className="relative w-full max-w-2xl">

            <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md focus-within:shadow-md transition px-3 py-2">

              {/* CATEGORY */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-700 hover:text-blue-600">
                  {category}
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div className="absolute left-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-px h-5 bg-gray-300 mx-2"></div>

              <Search className="w-5 h-5 text-gray-400 mr-2" />

              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={`Search in ${category}...`}
                className="flex-1 outline-none text-sm"
              />

              <div className="w-px h-5 bg-gray-300 mx-3"></div>

              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold cursor-pointer">
                Gemini
              </span>
            </div>

            {/* LIVE SEARCH */}
            {filtered.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
                {filtered.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <button className="p-2 rounded-full hover:bg-gray-100">
            <Heart className="w-6 h-6 text-gray-700" />
          </button>

          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
              3
            </span>
          </button>

          {/* CART */}
          <div className="relative group">
            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] px-1.5 rounded-full">
                {cartItems.length}
              </span>
            </Link>

            <div className="absolute right-0 mt-3 w-80 bg-white border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">

              <div className="max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        ${item.price} × {item.qty}
                      </p>
                    </div>
                    <p className="text-sm font-semibold">
                      ${item.price * item.qty}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t p-4">
                <div className="flex justify-between text-sm mb-3">
                  <span>Total:</span>
                  <span className="text-blue-600 font-semibold">${total}</span>
                </div>

                <Link
                  to="/cart"
                  className="block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg text-sm"
                >
                  Go to Cart
                </Link>
              </div>
            </div>
          </div>

          <button className="p-2 rounded-full hover:bg-gray-100">
            <User className="w-6 h-6 text-gray-700" />
          </button>

          <button className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm">
            Sign In
          </button>

        </div>
      </div>

      {/* 🔽 BOTTOM MENU */}
      <div className="border-t border-gray-200 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-3 flex justify-center gap-10 text-sm font-medium">

          {["Home", "Products", "About", "Biz barada", "Habarlasmak"].map((item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="relative text-gray-700 hover:text-blue-600 transition group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}

        </div>
      </div>

    </nav>
    
  );
}
