import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./Input.scss";
const InputPhone = ({
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
    <div className={hasError ? "input-group phone-input invalid" : "input-group phone-input"}>
      <label htmlFor={name}>{description}</label>
      <PhoneInput
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultCountry="AZ"
      />
      <small className="alert">{alertMsg}</small>
    </div>
  );
};

export default InputPhone;
