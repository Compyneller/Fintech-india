import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import add from "../assets/additional.png";

const Additional = () => {
  return (
    <Container className="text-center">
      <h3>Additional Services</h3>
      <br />
      <h5>
        Check out the additional services of Fintech India. We have decided to
        fulfill all the web solution demands of our clients!
      </h5>
      <br />
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={add} height={70} alt="" />
              <br />
              <h5> Additional Services</h5>

              <Row className="g-3">
                <div className="col-auto">● Content Marketing</div>
                <div className="col-auto">● Social Media Marketing</div>
                <div className="col-auto">● Organic Marketing</div>
                <div className="col-auto">● Influencer Marketing</div>
                <div className="col-auto">● Affiliate Marketing</div>
                <div className="col-auto">● Advertising</div>
                <div className="col-auto">● Outbound Marketing</div>
                <div className="col-auto">● Inbound Marketing</div>
                <div className="col-auto">● Brand Marketing</div>
                <div className="col-auto">● Email Marketing</div>
                <div className="col-auto">● Acquisition Marketing</div>
                <div className="col-auto">● Referral Marketing</div>
                <div className="col-auto">● Public Relations</div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Additional;
