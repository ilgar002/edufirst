import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/edufirst-logo.png";
import "./Logo.scss";
const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoImg} className="logo" alt="logo"></img>
    </Link>
  );
};

export default Logo;
