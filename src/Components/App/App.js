import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Products from "../../Pages/Products";
import Beans from "../../Pages/Beans";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="beans" element={<Beans />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
