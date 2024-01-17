import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./App.scss";

const App = (props) => {
  // const CardIds = [
  //   { src: "./images/bwst-1.png", label: "Solimo Coffee Beans 2 kg", price: "10.73$" },
  //   { src: "./images/bwst-2.png", label: "Presto Coffee Beans 1 kg", price: "15.99$" },
  //   { src: "./images/bwst-3.png", label: "AROMISTICO Coffee 1 kg", price: "6.99$" },
  // ];

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
