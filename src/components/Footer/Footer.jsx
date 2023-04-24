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
      <div className="navigation">
        <div className="container">
          <div className="box">
            <Logo />
            <Socials />
          </div>
          <div className="box">
            <h5 className="title">Menu</h5>
            <ul className="links">
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
          <div className="box">
            <h5 className="title">Kömək</h5>
            <ul className="links">
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
          <div className="box contact">
            <h5 className="title">Əlaqə</h5>
            <ul className="links">
              <li>
                <img src={Location} alt="location" />
                <div>
                  <Link
                    to={
                      "https://www.google.com/maps/place/Red+Academy/@40.4045876,49.8382521,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d90bad07153:0xc3b054619c8e9cb3!8m2!3d40.4045876!4d49.8382521!16s%2Fg%2F11rvfyw1yw"
                    }
                    target="_blank"
                  >
                    1. Bakı şəhəri, M.Qaşqay küçəsi 112
                  </Link>
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
                  <a href="tel:050-605-5998">050 605 59 98</a>
                  <a href="tel:055-529-6176">055 529 61 76</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rights">
        <div className="content">
          <span>
            <img src={Copyrigt} alt="copyrigt" />
            PeojectX 2021. Bütün hüquqlar qorunur.
          </span>
        </div>
        <div className="content">
          <span>Qaydalar və şərtlər</span>
          <span>Məxfilik siyasəti</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
