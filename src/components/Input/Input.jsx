import React from "react";
import "./Input.scss";
const Input = ({
  name,
  description,
  type,
  placeholder,
  alertMsg,
  value,
  onBlur,
  onChange,
  hasError,
}) => {
  return (
    <div className={hasError ? "input-group invalid" : "input-group"}>
      <label htmlFor={name}>{description}</label>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
      <small className="alert">{alertMsg}</small>
    </div>
  );
};

export default Input;
{
  /* <Input
  name="firstname"
  description="Enter firstname"
  type="text"
  placeholder=""
  alertMsg={"invalid firstname"}
  value={firstname}
  onChange={onChange}
  onBlur={onBlur}
/>; */
}
