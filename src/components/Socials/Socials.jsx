import React from "react";
import { Link } from "react-router-dom";
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
      <Link
        target="_blank"
        to={"https://instagram.com/edufirst.az?igshid=YmMyMTA2M2Y="}
      >
        <AiOutlineInstagram />
      </Link>
      <Link target="_blank" to={""}>
        <FiFacebook />
      </Link>
      <Link target="_blank" to={""}>
        <AiOutlineYoutube />
      </Link>
      <Link target="_blank" to={""}>
        <AiOutlineTwitter />
      </Link>
    </div>
  );
};

export default Socials;
