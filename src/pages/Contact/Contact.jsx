import React from "react";
import "./Contact.scss";
import Form from "./Form/Form";
import PageTitle from "../../components/Titles/PageTitle";
import Comp from "../../images/contact-comp.svg";

const Contact = () => {
  return (
    <div className="contact-page container">
      <PageTitle title="Send us a Message" />
      <div className="content">
        <div className="img-container">
          <img src={Comp} alt="Computer" />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
