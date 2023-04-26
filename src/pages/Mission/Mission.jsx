import React from "react";
import PageTitle from "../../components/Titles/PageTitle";
import "./Mission.scss";
import MissionImg from "../../images/mission.svg";
const Mission = () => {
  return (
    <div className="mission">
      <div className="container">
        <PageTitle title="Our Mission" />
        <div className="content">
          <div className="text">
            <p>
              Our mission at eSM is to develop your students’ understanding of
              math and increase their skills to mastery using the best math
              program in the world, Singapore Math. We also want to give
              teachers proven and time-tested pedagogy and better tools for
              assessing students’ performance. High quality instruction, better
              practice, more practice, and easy to access math learning, 24
              hours/day.
            </p>
            <p>
              <b>We love math.</b> We want your students to love math as much as
              we do. One of the biggest obstacles in learning to love math is
              fear of math and math test taking. That’s another reason we
              created this site. We help students get better math scores on
              tests, do better in math at school and eliminate or reduce the
              fear of math test taking. Benefitting from decades of exceptional
              commitment to improving and fine-tuning student comprehension of
              math, eSingapore Math is not just any math,{" "}
              <b className="green">IT’S THE ULTIMATE MATH MACHINE!</b>
            </p>
          </div>

          <div className="image-container">
            <img src={MissionImg} alt="MissionImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
