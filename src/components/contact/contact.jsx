import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { ContactForm } from "./contactForm";

export const Contact = () => {
  const formContact = useRef();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const service = import.meta.env.VITE_APP_YOUR_SERVICE_ID;
  const template = import.meta.env.VITE_APP_YOUR_TEMPLATE_ID;
  const apikey = import.meta.env.VITE_APP_YOUR_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(event);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      sendEmail();
    }
    setValidated(true);
  };

  const sendEmail = () => {
    emailjs.sendForm(service, template, formContact.current, apikey).then(
      (result) => {
        clearFields();
        Swal.fire({
          icon: "success",
          text: "The email has been sent successfully.",
          timer: 2500,
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "The email could not be sent correctly.",
          timer: 2500,
        });
      }
    );
  };

  const clearFields = () => {
    setFormData({
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    });
    setValidated(false);
  };

  return (
    <>
      <section className="d-flex align-items-center contact" id="contact">
        <div className="container d-flex justify-content-center">
          <div className="boxContact rounded shadow" data-aos="zoom-in">
            <h1>Want to get in touch?</h1>
            <ContactForm
              formContact={formContact}
              validated={validated}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>
    </>
  );
};
