import React from "react";
import useForm from "../../../hooks/useForm";
import Input from "../../../components/Input/Input";
import InputPhone from "../../../components/Input/InputPhone";
import TextArea from "../../../components/Input/TextArea";
import { notify } from "../../../components/Toastify/Toastify";
import { sendMessage } from "../../../tools/telegram/Telegram";
import {
  validateFirstname,
  validateEmail,
  validateSubject,
  validateMessage,
  validateNumber,
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
  const {
    value: number,
    setValue: setPhoneNumber,
    isValid: numberIsValid,
    alertMsg: numberMsg,
    hasError: numberHasError,
    onFocus: onNumberFocus,
    onBlur: onNumberBlur,
  } = useForm(validateNumber);
  const {
    value: subject,
    alertMsg: subjectMsg,
    setValue: setSubject,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    onChange: onSubjectChange,
    onFocus: onSubjectFocus,
    onBlur: onSubjectBlur,
  } = useForm(validateSubject);
  const {
    value: message,
    alertMsg: messageMsg,
    setValue: setMessage,
    isValid: messageIsValid,
    hasError: messageHasError,
    onChange: onMessageChange,
    onFocus: onMessageFocus,
    onBlur: onMessageBlur,
  } = useForm(validateMessage);

  const formIsValid =
    firstnameIsValid &&
    emailIsValid &&
    subjectIsValid &&
    numberIsValid &&
    messageIsValid;
  const resetForm = () => {
    setFirstname("");
    setEmail("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      const msg = `Firstname: ${firstname}\nEmail: ${email}\nNumber: ${number}\nSubject: ${subject}\nMessage: ${message}`;
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
      <InputPhone
        name="phoneNumber"
        description="Phone number:"
        type="text"
        placeholder=""
        alertMsg={numberMsg}
        value={number}
        onChange={setPhoneNumber}
        onFocus={onNumberFocus}
        onBlur={onNumberBlur}
        hasError={numberHasError}
      />
      <Input
        name="subject"
        description="Subject:"
        type="text"
        placeholder=""
        alertMsg={subjectMsg}
        value={subject}
        onChange={onSubjectChange}
        onFocus={onSubjectFocus}
        onBlur={onSubjectBlur}
        hasError={subjectHasError}
      />
      <TextArea
        name="message"
        description="Message:"
        type="text"
        alertMsg={messageMsg}
        value={message}
        onChange={onMessageChange}
        onFocus={onMessageFocus}
        onBlur={onMessageBlur}
        hasError={messageHasError}
      />
      <button type="submit" className={formIsValid || "disabled"}>
        Submit
      </button>
    </form>
  );
};

export default Form;

