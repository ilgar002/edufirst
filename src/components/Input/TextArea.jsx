import React from "react";
import "./Input.scss";
const Input = ({
  name,
  description,
  placeholder,
  alertMsg,
  value,
  onBlur,
  onChange,
  hasError,
  onFocus,
}) => {
  return (
    <div
      className={
        hasError ? "input-group text-area invalid" : "input-group text-area"
      }
    >
      <label htmlFor={name}>{description}</label>
      <textarea
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        id={name}
        placeholder={placeholder}
        cols="30"
        rows="5"
        maxLength="1000"
      ></textarea>
      <small className="alert">{alertMsg}</small>
    </div>
  );
};

export default Input;
