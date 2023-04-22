import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ isOpened, setIsOpened }) => {
  const onClickHamburger = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <div className="hamburger-box">
      <div
        onClick={onClickHamburger}
        className={!isOpened ? "hamburger-btn" : "hamburger-btn opened"}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Hamburger;
