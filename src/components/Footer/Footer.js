import React from "react";
import { Link } from "react-router-dom";
import Location from "../../images/location.svg";
import Mail from "../../images/mail.svg";
import Call from "../../images/call.svg";
import Copyrigt from "../../images/copyright.svg";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <footer>
      <div className="row container">
        <div className="column passage">
          <Logo />
          <Socials />
        </div>
        <div className="column">
          <h5 className="column-title">Menu</h5>
          <ul className="footer-column">
            <li className="link">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="link">
              <Link to={"/about"}>How it works</Link>
            </li>
            <li className="link">
              <Link to={"/about"}>Tutoring</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h5 className="column-title">Kömək</h5>
          <ul className="footer-column">
            <li>
              <Link to={"/questions"}>Tez-tez soruşulan suallar</Link>
            </li>
            <li>
              <Link to={"/questions"}>Tez-tez soruşulan suallar</Link>
            </li>
            <li>
              <Link to={"/questions"}>Tez-tez soruşulan suallar</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h5 className="column-title">Əlaqə</h5>
          <ul className="footer-column contact">
            <li>
              <img src={Location} alt="location" />
              <div className="">
                <Link to={"/"}>1. Bakı şəhəri, M.Qaşqay küçəsi 112</Link>
                <Link to={"/"}>2. Xırdalan şəhəri, Access Bankın arxası</Link>
              </div>
            </li>
            <li>
              <img src={Mail} alt="mail" />
              <a href="/">edufirst@gmail.com</a>
            </li>
            <li>
              <img src={Call} alt="call" />
              <div>
                <a href="/">050 605 59 98</a>
                <a href="/">055 529 61 76</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="row rights">
        <div className="left">
          <span>
            <img src={Copyrigt} alt="copyrigt" />
            PeojectX 2021. Bütün hüquqlar qorunur.
          </span>
        </div>
        <div className="right">
          <span>Qaydalar və şərtlər</span>
          <span>Məxfilik siyasəti</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
