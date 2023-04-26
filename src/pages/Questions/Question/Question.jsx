import React, { useState } from "react";
import "./Question.scss";
import { HiOutlinePlus } from "react-icons/hi";
const Question = ({ question, answer }) => {
  const [answerVisibility, setAnswerVisibility] = useState(false);
  return (
    <div
      onClick={() => setAnswerVisibility((prev) => !prev)}
      className="question-item"
    >
      <div className="question">
        {question}
        <HiOutlinePlus
          className={answerVisibility ? "plus-icon opened" : "plus-icon"}
        />
      </div>
      {answerVisibility && <div className="answer">{answer}</div>}
    </div>
  );
};

export default Question;
