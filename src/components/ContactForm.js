import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <Form>
  <Form.Group>
   
    <Form.Control type="text" placeholder="Name" />
   
  </Form.Group>

  <Form.Group>
   
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group>
  <Form.Control as="textarea" rows="6" placeholder="Message"  />
  </Form.Group>
 
  <Button variant="dont-buy" type="submit">
    Submit
  </Button>
</Form>
  )
}

export default ContactForm
