import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import "./Lessons.scss";

const Lessons = () => {
  return (
    <div className="lessons">
      <h2 className="title">Singapore Math® Lessons</h2>
      <div className="columns">
        <div className="column">
          <span className="description">
            <FontAwesomeIcon className="video-icon" icon={faVideo} size="lg" />
            Do mental math
          </span>
          <div className="media">
            <img
              src="https://esingaporemath.com/assets/videos/make-and-break-numbers.jpg"
              alt="thumbnail"
            ></img>
          </div>
          <div className="footer">Learn mental math</div>
        </div>
        <div className="column">
          <span className="description">
            <FontAwesomeIcon className="video-icon" icon={faVideo} size="lg" />
            Solve word problems
          </span>
          <div className="media">
            <img
              src="https://esingaporemath.com/assets/videos/solve-word-problems.jpg"
              alt="thumbnail"
            ></img>
          </div>
          <div className="footer">Learn bar modeling</div>
        </div>
        <div className="column">
          <span className="description">
            <FontAwesomeIcon className="video-icon" icon={faVideo} size="lg" />
            Visualize numbers
          </span>
          <div className="media">
            <img
              src="	https://esingaporemath.com/assets/videos/visualize-numbers.jpg"
              alt="thumbnail"
            ></img>
          </div>
          <div className="footer">Learn place value</div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
