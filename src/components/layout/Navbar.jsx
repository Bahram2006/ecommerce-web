import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      
      <Link to="/" className="text-xl font-bold">
        MyShop
      </Link>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/products" className="hover:text-blue-500">Products</Link>
        <Link to="/cart" className="hover:text-blue-500">Cart</Link>
      </div>

    </nav>
  );
}