import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";

const Dropdown = ({ data, className = "", status, setIsOpened }) => {
  status = status ? "opened" : "";
  return (
    <ul className={"nav-dropdown" + className + " " + status}>
      {data?.map((el, index) => {
        return (
          <li className="child-link" key={el.id ? el.id : index}>
            <Link onClick={() => setIsOpened(false)} to={el.slug}>
              {el.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
