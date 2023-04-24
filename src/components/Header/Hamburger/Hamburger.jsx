import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ isOpened, setIsOpened }) => {
  const onClickHamburger = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <div onClick={onClickHamburger} className="hamburger-box">
      <div className={!isOpened ? "hamburger-btn" : "hamburger-btn opened"}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Hamburger;
