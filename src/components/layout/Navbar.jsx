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
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const categories = ["All", "Shoes", "Clothes", "Electronics"];

  const handleSearch = (value) => {
    setSearch(value);

    if (value.trim() === "") {
      setFiltered([]);
      return;
    }

    const results = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(results);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* 🔥 LOGO */}
        <Link to="/" className="text-3xl font-extrabold tracking-tight">
          <span className="text-gray-900">Shop</span>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            X
          </span>
        </Link>

        {/* 🔥 SEARCH */}
        <div className="flex-1 flex justify-center px-6">
          <div className="relative w-full max-w-2xl">

            {/* SEARCH BAR */}
            <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md focus-within:shadow-md transition px-3 py-2">

              {/* CATEGORY */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-700 hover:text-blue-600 transition">
                  {category}
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div className="absolute left-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>

              {/* DIVIDER */}
              <div className="w-px h-5 bg-gray-300 mx-2"></div>

              {/* SEARCH ICON */}
              <Search className="w-5 h-5 text-gray-400 mr-2" />

              {/* INPUT */}
              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={`Search in ${category}...`}
                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
              />

              {/* DIVIDER */}
              <div className="w-px h-5 bg-gray-300 mx-3"></div>

              {/* GEMINI */}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold cursor-pointer hover:opacity-80 transition">
                Gemini
              </span>
            </div>

            {/* 🔥 LIVE SEARCH RESULTS */}
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
                      <p className="text-sm font-medium text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            )}
          </div>
        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* ❤️ FAVORITES */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <Heart className="w-6 h-6 text-gray-700" />
          </button>

          {/* 🔔 NOTIFICATIONS */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
              3
            </span>
          </button>

          {/* 🛒 CART */}
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] px-1.5 rounded-full">
              2
            </span>
          </Link>

          {/* 👤 PROFILE */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <User className="w-6 h-6 text-gray-700" />
          </button>

          {/* 🔥 BUTTON */}
          <button className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
            Sign In
          </button>

        </div>

      </div>
    </nav>
  );
}