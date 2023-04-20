import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
      </BrowserRouter>
    </>
  );
};

export default App;
