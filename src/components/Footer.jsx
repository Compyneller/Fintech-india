import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ background: "#5000CA", width: "100%" }}>
      <Container style={{ padding: "2rem 0" }}>
        <div className="row">
          <div className="col-12 text-center d-flex align-items-center justify-content-around">
            <Link
              to="/tc"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => window.scroll(0, 0)}
            >
              <h5>Terms & Condition</h5>
            </Link>
            <Link
              to="/privacy"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => window.scroll(0, 0)}
            >
              <h5>Privacy Policy</h5>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
