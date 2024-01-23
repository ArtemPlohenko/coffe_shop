import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Products from "../../Pages/Products";
import Beans from "../../Pages/Beans";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./App.scss";

const App = () => {
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
        </Routes>
      </div>

      <Footer navigationRoutes={routes.slice(1, 3)} />
    </>
  );
};

export default App;
