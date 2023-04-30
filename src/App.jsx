import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Mission from "./pages/Mission/Mission";
import Questions from "./pages/Questions/Questions";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import SingaporeMath from "./pages/SingaporeMath/SingaporeMath";
import { ToastContainer } from "react-toastify";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/singapore-math" element={<SingaporeMath />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
