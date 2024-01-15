// import { Component } from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Header from "../Header/Header";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
