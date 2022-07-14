import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import contact from "../assets/contact.svg";
const ContactUs = () => {
  return (
    <div className=" w-100">
      <Container>
        <h1 className="text-center">Contact Us</h1>
        <br />
        <br />
        <img
          src={contact}
          className="w-100"
          style={{ height: "50vh", objectFit: "contain" }}
          alt=""
        />
        <br />
        <br />
        <br />
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <h5 style={{ color: "#5000CA" }}>Contact</h5>
                <p>+91-75269 92290 , +91-8427910315</p>
                <br />
                <h5 style={{ color: "#5000CA" }}>Email</h5>
                <a href="mailto:info@fintechindia.net ">
                  info@fintechindia.net{" "}
                </a>
                ,
                <a className="ms-2" href="mailto:fintechindiapvtltd@gmail.com ">
                  fintechindiapvtltd@gmail.com
                </a>
                <br />
                <br />
                <h5 style={{ color: "#5000CA" }}>Address</h5>
                <p className="text-secondary">
                  Unit No. 6-7, Bedi Paradise, Opp. Residency Hotel, Near Bus
                  Stand Jalandhar (Punjab) – 144001
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={6}>
            <Card style={{ height: "100%" }}>
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <h3 style={{ color: "#5000CA" }}>Monday – Saturday</h3>
                <h5 className="text-secondary">10:00 AM – 06:00 PM</h5>
                {/* <div className="d-flex">icons</div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <h3>Leave Message Here</h3>
            <form action="" style={{ padding: "3rem ", background: "#5000CA" }}>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Name"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Email Address"
                />
              </InputGroup>
              <InputGroup>
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  aria-label="With textarea"
                />
              </InputGroup>
            </form>
          </Col>
          <Col sm={12} lg={6}>
            <img
              style={{ height: "70%" }}
              src="https://fintechindia.net/wp-content/uploads/2021/07/contact.jpg"
              className="w-100"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
