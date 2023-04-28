import React from "react";
import { Formik } from "formik";
import Input from "../../../components/Input/Input";
import TextArea from "../../../components/Input/TextArea";
import "./Form.scss";
import { notify } from "../../../components/Toastify/Toastify";

import { sendMessage } from "../../../tools/telegram/Telegram";

import {
  validateFirstname,
  validateEmail,
  validateSubject,
  validateMessage,
  validateNumber,
} from "./Validate";
const Form = () => (
  <Formik
    initialValues={{
      firstname: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    }}
    validate={(values) => {
      const errors = {};
      errors.firstname = validateFirstname(values.firstname).message;
      errors.email = validateEmail(values.email).message;
      errors.number = validateNumber(values.number).message;
      errors.subject = validateSubject(values.subject).message;
      errors.message = validateMessage(values.message).message;
      return errors;
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          if (
            validateFirstname(values.firstname).status &&
            validateEmail(values.email).status &&
            validateNumber(values.number).status &&
            validateSubject(values.subject).status &&
            validateMessage(values.message).status
          ) {
            const msg = `Firstname: ${values.firstname}\nEmail: ${values.email}\nNumber: ${values.number}\nSubject: ${values.subject}\nMessage: ${values.message},`;
            sendMessage(msg);
            notify("Message sended!");
          }
        }}
      >
        <Input
          name="firstname"
          description="Enter firstname"
          type="text"
          placeholder=""
          alertMsg={errors.firstname && touched.firstname && errors.firstname}
          value={values.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={Boolean(
            errors.firstname && touched.firstname && errors.firstname
          )}
        />
        <Input
          name="email"
          description="Enter email"
          type="text"
          placeholder=""
          alertMsg={errors.email && touched.email && errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={Boolean(errors.email && touched.email && errors.email)}
        />
        <Input
          name="number"
          description="Enter number"
          type="text"
          placeholder=""
          alertMsg={errors.number && touched.number && errors.number}
          value={values.number}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={Boolean(errors.number && touched.number && errors.number)}
        />
        <Input
          name="subject"
          description="Enter subject"
          type="text"
          placeholder=""
          alertMsg={errors.subject && touched.subject && errors.subject}
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={Boolean(
            errors.subject && touched.subject && errors.subject
          )}
        />
        <TextArea
          name="message"
          description="Enter message"
          placeholder=""
          alertMsg={errors.message && touched.message && errors.message}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={Boolean(
            errors.message && touched.message && errors.message
          )}
        />
        <button type="submit">Submit</button>
      </form>
    )}
  </Formik>
);

export default Form;
