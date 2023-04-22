import React from "react";
import "./Home.scss";
import Lessons from "./Lessons/Lessons";

const Home = () => {
  return (
    <div className="home container">
      <Lessons />
    </div>
  );
};

export default Home;
