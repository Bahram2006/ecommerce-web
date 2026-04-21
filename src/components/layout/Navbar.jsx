import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 🔥 Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Shop<span className="text-blue-500">X</span>
        </Link>

        {/* 🔥 Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-500 transition">
            Products
          </Link>
          <Link to="/cart" className="hover:text-blue-500 transition">
            Cart
          </Link>
        </div>

        {/* 🔥 Right side */}
        <div className="flex items-center gap-4">
          
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Cart icon */}
          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-blue-500 text-xl"
          >
            🛒
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1 rounded-full">
              0
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}