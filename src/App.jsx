import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/product/FeaturedProducts";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;