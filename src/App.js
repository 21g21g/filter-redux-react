import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Contact from "./components/Contact";
import About from "./components/About";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route />
          <Route path="/productdetail" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
