import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";

const Dropdown = ({ data }) => {
  console.log(data);
  return (
    <ul className="nav-dropdown">
      {data?.map((el, index) => {
        return (
          <li className="child-link" key={el.id ? el.id : index}>
            <Link to={el.slug}>{el.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
