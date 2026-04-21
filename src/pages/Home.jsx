import ProductList from "../components/product/ProductList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Explore Products
      </h1>

      <ProductList />
    </div>
  );
}