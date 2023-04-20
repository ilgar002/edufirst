import React from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import "./Nav.scss";
import { navigations } from "./data";
const Nav = () => {
  return (
    <nav>
      <ul className="links">
        {navigations.map((el) => {
          return (
            <li className="head-link" key={el.id}>
              <Link to={el.head.slug}>{el.head.text}</Link>
              {el.child && <BsCaretDownFill className="arrowIcon" />}
              <Dropdown data={el?.child} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
