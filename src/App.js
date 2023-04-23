import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Questions from "./pages/Questions/Questions";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
