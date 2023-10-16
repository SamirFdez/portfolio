import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";

export const ContactForm = ({formContact, validated, formData, handleChange, handleSubmit}) => {

    
  return (
    <>
      <Form
        method="POST"
        noValidate
        validated={validated}
        ref={formContact}
        onSubmit={handleSubmit}
        autoComplete="off"
        className="formContact"
      >
        <FloatingLabel label="Your name" className="mb-4">
          <Form.Control
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </FloatingLabel>

        <FloatingLabel label="Email" className="mb-4">
          <Form.Control
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </FloatingLabel>

        <FloatingLabel label="Subject" className="mb-4">
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
        </FloatingLabel>

        <FloatingLabel label="Message" className="mb-4">
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ height: "150px" }}
            placeholder="Message"
            required
          />
        </FloatingLabel>

        <div className="text-center">
          <Button variant="outline-dark" className="btnSubmit" type="submit">
            Send Message
          </Button>
        </div>
      </Form>
    </>
  );
};
