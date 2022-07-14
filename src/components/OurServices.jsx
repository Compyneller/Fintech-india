import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import strat from "../assets/strat.png";
import spc from "../assets/spc.png";
import opti from "../assets/opti.png";
import marketing from "../assets/marketing.png";
import seo from "../assets/seo.png";
import web from "../assets/web.png";
const OurServices = () => {
  return (
    <Container>
      <h3 className="text-center">OUR SERVICES</h3>
      <br />
      <Row className="g-3 text-center">
        <Col sm={12} md={6} lg={4}>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={strat} height={70} alt="" />
              <br />
              <h5>Digital Strategy</h5>

              <p>
                Setting your digital strategy is one of the most crucial and
                complicated stages of your marketing actions. A perfect strategy
                must be a mix of design, technology and, of course, digital
                marketing. We can help you to define your internet marketing
                strategy and customize it as per your business goals.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={spc} height={70} alt="" />
              <br />
              <h5>SEM / PPC</h5>

              <p>
                Paid Advertising in search engines and social networks is the
                fastest way to increase your traffic and one of the most
                effective. We can increase the performance of your PPC
                campaigns, reduce your cost per acquisition and save your
                pockets every month. Acquire positive business outcomes with
                targeted PPC services.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={opti} height={70} alt="" />
              <br />
              <h5>Conversion Rate Optimization</h5>

              <p>
                Improve the performance of your website converting visits into
                better leads and those leads into sales. To grow your conversion
                rate, we'll identify your clients' needs, what they want to find
                when visiting your website. Then we'll adapt your copywriting to
                those needs looking for the right words that will convert
                better. Also, we'll create a conversion-focused design aligned
                with your brand.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={marketing} height={70} alt="" />
              <br />
              <h5>Martech & Marketing Automation</h5>

              <p>
                Did you know that one of the best ways to obtain rapid sales
                growth and effective lead generation is with marketing
                automation? If you are a company that has been in business for a
                long time, then you understand that the technology space comes
                with many challenges. That’s why you need proven marketing
                methods that are specifically designed for your company.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={seo} height={70} alt="" />
              <br />
              <h5> SEO</h5>

              <p>
                Search Engine Optimization (SEO) is the cheapest way to obtain
                traffic to your website, but it takes time and requires a clear
                strategy. Performing a comprehensive SEO audit of your website
                is the first step to improve your search engines rankings and
                generate more traffic to your website. The audit is not only
                about your content but also technical parameters and
                configuration.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={web} height={70} alt="" />
              <br />
              <h5> Web Analytics</h5>

              <p>
                We go way beyond conventional web analytics, offering in-depth
                insights across all of your data sources to find what's working,
                what's not, as well as how to boost your revenue. With all new
                methods to turn data right into new leads, and those leads mean
                ROI for your business. With us, optimize mobile and browser
                compatibility to transform it into a lead generation machine.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OurServices;
