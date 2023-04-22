import React from "react";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import "./Socials.scss";

const Socials = () => {
  return (
    <div className="social-icons">
      <a href="https://instagram.com/edufirst.az?igshid=YmMyMTA2M2Y=">
        <AiOutlineInstagram />
      </a>
      <a href="/">
        <FiFacebook />
      </a>
      <a href="/">
        <AiOutlineYoutube />
      </a>
      <a href="/">
        <AiOutlineTwitter />
      </a>
    </div>
  );
};

export default Socials;
