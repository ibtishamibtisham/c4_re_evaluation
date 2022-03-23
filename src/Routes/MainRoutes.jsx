import { Navbar } from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Products } from "../components/ProductsDashboard";
import { SingleProductList } from "../components/SingleProduct";
export const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProductList />} />
      </Routes>
    </>
  );
};
