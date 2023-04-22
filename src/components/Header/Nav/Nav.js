import React, { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import "./Nav.scss";
import { navigations } from "./data";
const Nav = ({ isOpened }) => {
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const onClickHandler = (index) => {
    setCurrentDropdown(index);
    if (index === currentDropdown) {
      setCurrentDropdown(null);
    }
  };
  return (
    <nav className={isOpened ? "mobile-clicked" : ""}>
      <ul className="links">
        {navigations.map((el, index) => {
          return (
            <div key={el.id}>
              <li onClick={() => onClickHandler(index)} className="head-link">
                <Link to={el.head.slug}>{el.head.text}</Link>
                {el.child && (
                  <BsCaretDownFill
                    className={
                      currentDropdown === index
                        ? "arrowIcon-mobile clicked"
                        : "arrowIcon-mobile"
                    }
                  />
                )}
                <Dropdown data={el?.child} />
              </li>
              <Dropdown
                className="-mobile"
                data={el?.child}
                status={currentDropdown === index}
              />
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
