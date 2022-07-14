import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import why from "../assets/why.svg";
import services from "../assets/services.png";
import result from "../assets/result.png";
import ethic from "../assets/ethic.png";
import client from "../assets/client.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
const Why = () => {
  return (
    <Container className="text-center">
      <h3>Why Choose Fintech Digital Marketing Services?</h3>
      <br />
      <h5>“We provide you with Full-Potential Marketing”</h5>
      <br />

      <div className="d-flex w-100 justify-content-center ">
        <img src={why} alt="" style={{ height: "20vw" }} />
      </div>
      <br />
      <br />
      <Row className="g-3">
        <Col sm={6} lg={6}>
          <Card style={{ height: "100%" }}>
            <Card.Body className="d-flex align-items-center flex-column">
              <img height={70} src={result} alt="" />
              <br />
              <h5>Get Proven Results</h5>
              <p>
                Get the best SEO results from Fintech India guaranteed for your
                business. We craft digital products that solve business needs
                and drive market differentiation.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={6}>
          <Card style={{ height: "100%" }}>
            <Card.Body className="d-flex align-items-center flex-column">
              <img height={70} src={ethic} alt="" />
              <br />
              <h5>We follow Ethics & Culture</h5>
              <p>
                At Fintech, we believe in honesty, integrity, and respecting our
                clients. We provide you with countless approaches to give your
                brand satisfaction in a minimum time!
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={6}>
          <Card style={{ height: "100%" }}>
            <Card.Body className="d-flex align-items-center flex-column">
              <img height={70} src={services} alt="" />
              <br />
              <h5>Exceptional Services</h5>
              <p>
                Working with a digital marketing company that actually knows
                digital marketing seems obvious and our marketing strategies are
                proven to work.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={6}>
          <Card style={{ height: "100%" }}>
            <Card.Body className="d-flex align-items-center flex-column">
              <img height={70} src={client} alt="" />
              <br />
              <h5>Client is first priority</h5>
              <p>
                Maintaining a relationship with our clients is our top priority.
                We have faith in building long-term relations with our
                customers. As an SEO Agency, Fintech is amazing.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row className="g-3">
        <Col sm={12} md={6} lg={4}>
          <img
            className="w-100"
            src={image1}
            alt=""
            style={{ height: "20vw", objectFit: "cover" }}
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img
            className="w-100"
            src={image2}
            alt=""
            style={{ height: "20vw", objectFit: "cover" }}
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img
            className="w-100"
            src={image3}
            alt=""
            style={{ height: "20vw", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Why;
