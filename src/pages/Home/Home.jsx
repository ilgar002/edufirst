import React from "react";
import "./Home.scss";
import Contact from "../Contact/Contact";
import Lessons from "./Lessons/Lessons";

const Home = () => {
  return (
    <div className="home container">
      <Lessons />
      <Contact />
    </div>
  );
};

export default Home;
