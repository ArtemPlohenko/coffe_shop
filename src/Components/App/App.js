import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Products from "../../Pages/Products";
import Beans from "../../Pages/Beans";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductsGroup from "../ProductsGroup/ProductsGroup";

import "./App.scss";

const App = () => {
  const CardIds = [
    { id: 1, src: "./images/bwst-1.png", label: "Solimo Coffee Beans 2 kg", countryProducer: "", price: "10.73$" },
    { id: 2, src: "./images/best-2.png", label: "Presto Coffee Beans 1 kg", countryProducer: "", price: "15.99$" },
    { id: 3, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "", price: "6.99$" },
    //
    { id: 4, src: "./images/our-2.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "16.99$" },
    { id: 5, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Kenya", price: "6.99$" },
    { id: 6, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Columbia", price: "6.99$" },
    { id: 7, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "6.99$" },
    { id: 8, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "6.99$" },
    { id: 9, src: "./images/best-3.png", label: "AROMISTICO Coffee 1 kg", countryProducer: "Brazil", price: "6.99$" },
  ];

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/products", element: <Products /> },
    { path: "/beans/:id", element: <Beans /> },
  ];

  return (
    <>
      <Header navigationRoutes={routes.slice(1, 3)} />

      <div className="wrapper">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="/products" element={<ProductsGroup CardIds={CardIds} />} />
        </Routes>
      </div>

      <Footer navigationRoutes={routes.slice(1, 3)} />
    </>
  );
};

export default App;
