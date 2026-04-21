import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
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

        {/* 🔥 GOOGLE STYLE SEARCH */}
        <div className="flex-1 flex justify-center px-6">
          <div className="flex items-center w-full max-w-xl bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md focus-within:shadow-md transition px-5 py-2">

            {/* 🔍 Icon */}
            <Search className="w-5 h-5 text-gray-400 mr-3" />

            {/* Input */}
            <input
              type="text"
              placeholder="Search products, brands..."
              className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
            />

            {/* Divider */}
            <div className="w-px h-5 bg-gray-300 mx-3"></div>

            {/* 🔥 Gemini */}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold cursor-pointer hover:opacity-80">
              Gemini
            </span>

          </div>
        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="flex items-center gap-5">

          {/* 🛒 Cart */}
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-1.5 rounded-full">
              0
            </span>
          </Link>

          {/* 👤 User */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <User className="w-6 h-6 text-gray-700" />
          </button>

          {/* 🔥 BUTTON */}
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
            Sign In
          </button>

        </div>

      </div>
    </nav>
  );
}