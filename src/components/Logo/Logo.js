import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/edufirst-logo.svg";
import "./Logo.scss";
const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <img src={LogoImg} className="logo" alt="logo"></img>
      <span className="logo-title">EduFirst</span>
    </Link>
  );
};

export default Logo;
