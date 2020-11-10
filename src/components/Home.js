
  import React from "react";
  import Navbar from "react-bootstrap/Navbar";
  import Form from "react-bootstrap/Form";
  import Jumbotron from "react-bootstrap/Jumbotron";
  import Container from "react-bootstrap/Container";
  import Row from "react-bootstrap/Row";
  import Col from "react-bootstrap/Col";  
  import ContactForm from "./ContactForm";
  import ContentTabs from "./ContentTabs";
import ContentAccordion from "./ContentAccordion";
  


  function Home(){
    return(
      <>
      <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Form inline className="form-search">
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
     
    </Form>
    </Container>
</Navbar>
<Jumbotron style={{ backgroundImage: "url(images/banner-home-desk.jpg)" }}>
<Container>
  <h1>Hello, world!</h1>
  </Container>
</Jumbotron>
<Container>
<h2>Sttop Buying Things</h2>
<p>Som text for paragraph</p>
<h3>Tell us something new</h3>
</Container>
<Container>
  <Row>
    <Col md={6}>
   <ContactForm/>
    </Col>
    <Col md={6}>
   <ContentAccordion />
<div className="d-none d-md-block">
  <ContentTabs/>
</div>
    </Col>
  </Row>
</Container>
      </>
    )
  }
  export default Home
