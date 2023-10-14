import React from "react";
import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { contactInputs } from "../../configs/contact.config";

export const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [contactData, setContactData] = useState({
    name: "", 
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = ({ target }) => {
    setContactData({ ...contactData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault(event);
    setValidated(true);
  };

  return (
    <>
      <section className="d-flex align-items-center contact" id="contact">
        <div className="container d-flex justify-content-center">
          <div className="boxContact rounded shadow" data-aos="zoom-in">
            <h1>Want to get in touch?</h1>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              autoComplete="off"
              className="formContact"
            >
              {contactInputs.map((input, index) => (
                <FloatingLabel
                  key={`input-${index}`}
                  label={input.label}
                  className={input.className}
                >
                  <Form.Control
                    {...input}
                    name={input.name}
                    onChange={handleChange}
                    style={input.style ? { height: input.style } : {}}
                    placeholder={input.placeholder}
                    required
                  />
                </FloatingLabel>
              ))}
              <div className="text-center">
                <Button
                  variant="outline-dark"
                  className="btnSubmit"
                  type="submit"
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};
