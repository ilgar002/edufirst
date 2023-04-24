import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Mission from "./pages/Mission/Mission";
import Questions from "./pages/Questions/Questions";
import Contact from "./pages/Contact/Contact";
const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
