import React from "react";
import useForm from "../../../hooks/useForm";
import Input from "../../../components/Input/Input";
import { notify } from "../../../components/Toastify/Toastify";
import { sendMessage } from "../../../tools/telegram/Telegram";
import {
  validateFirstname,
  validateEmail,
} from "../../../tools/validation/Validate";
import "./Form.scss";

const Form = () => {
  const {
    value: firstname,
    alertMsg: firstnameMsg,
    isValid: firstnameIsValid,
    setValue: setFirstname,
    hasError: firstnameHasError,
    onChange: onFirstnameChange,
    onFocus: onFirstnameFocus,
    onBlur: onFirstnameBlur,
  } = useForm(validateFirstname);
  const {
    value: email,
    alertMsg: emailMsg,
    setValue: setEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    onChange: onEmailChange,
    onFocus: onEmailFocus,
    onBlur: onEmailBlur,
  } = useForm(validateEmail);

  const formIsValid = firstnameIsValid && emailIsValid;
  const resetForm = () => {
    setFirstname("");
    setEmail("");
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      const msg = `Firstname: ${firstname}\nEmail: ${email}`;
      sendMessage(msg);
      notify("Message sended!", "success");
      resetForm();
    } else {
      notify("Form is invalid!", "error");
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        name="firstname"
        description="Firstname:"
        type="text"
        placeholder=""
        alertMsg={firstnameMsg}
        value={firstname}
        onChange={onFirstnameChange}
        onFocus={onFirstnameFocus}
        onBlur={onFirstnameBlur}
        hasError={firstnameHasError}
      />
      <Input
        name="email"
        description="Email:"
        type="text"
        placeholder=""
        alertMsg={emailMsg}
        value={email}
        onChange={onEmailChange}
        onFocus={onEmailFocus}
        onBlur={onEmailBlur}
        hasError={emailHasError}
      />
      <button type="submit" className={formIsValid || "disabled"}>
        Subscribe
      </button>
    </form>
  );
};

export default Form;
