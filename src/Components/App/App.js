import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Products from "../../Pages/Products";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
