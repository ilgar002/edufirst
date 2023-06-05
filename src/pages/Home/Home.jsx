import React from "react";
import "./Home.scss";
import Contact from "../Contact/Contact";
import Lessons from "./Lessons/Lessons";
import MainBanner from "../../components/Slider/MainBanner";
import PageTitle from "../../components/Titles/PageTitle";
import BarModeling from "../../images/barmodeling.svg";
import "../SingaporeMath/SingaporeMath.scss";

const Home = () => {
  return (
    <div className="home container">
      <MainBanner />
      <div className="singapore-math-page">
        <PageTitle title="What is Singapore Math?" />
        <div className="section">
          <h2 className="title">About Singapore Math</h2>
          <div className="content">
            <div className="text-container">
              <p className="text">
                Interest in Singapore Math is high because over the last three
                decades Singaporean students have consistently scored at the top
                in mathematics and science on international benchmarks such as
                TIMSS and PISA. These students are some of the best prepared in
                the world.
              </p>
              <p className="text">
                Their success is attributed to the high quality of the{" "}
                <span className="highlighted">Singapore Math curriculum</span>{" "}
                and strong teacher preparation programs. The learning process
                focuses on visualization in the context of problem-solving as
                opposed to mere memorization of facts.
              </p>
              <p className="text">
                Interest in Singapore Math is high because over the last three
                decades Singaporean students have consistently scored at the top
                in mathematics and science on international benchmarks such as
                TIMSS and PISA. These students are some of the best prepared in
                the world.
              </p>
            </div>
            <div className="img-container">
              <img src={BarModeling} alt="BarModeling" />
            </div>
          </div>
        </div>
      </div>

      <Lessons />
      <Contact />
    </div>
  );
};

export default Home;
