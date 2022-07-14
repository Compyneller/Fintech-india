import { Container } from "react-bootstrap";
import about from "../assets/about2.svg";
const AboutUs = () => {
  return (
    <div className=" w-100">
      <Container>
        <h1 className="text-center">ABOUT US</h1>
        <br />
        <br />
        <img
          src={about}
          className="w-100"
          style={{ height: "50vh", objectFit: "contain" }}
          alt=""
        />
        <br />
        <br />
        <br />
        <h5>
          The best digital strategy for clients with fulfilling their business
          operations is offered by us. We are specialized in providing the full
          spectrum of data-driven digital marketing services to obtain the best
          outcome in the campaigns.{" "}
        </h5>
        <br />

        <p>
          Fintech India is an award-winning digital marketing company that
          covers the best of technology to give our clients the best web
          marketing services. We develop growth-oriented online marketing
          campaigns that make a positive impact on businesses, brands, or
          influencers. We help our clients in generating more leads and that
          converts into a strong relationship. Our highly-qualified & skilled
          team makes sure to properly analyze & put techniques that help you to
          generate revenue & gather a strong community of customers with
          potential engagement.
          <br />
          <br /> We have entered with a vision to become a top-leading company
          that provides a digital strategy for PPC, SEO, Marketing Automation,
          Conversion Rate Optimization, and more services with quality assurance
          & meticulous selection of talents that will help your business to
          evolve profitable assets. In other words, Fintech India is your
          one-stop solution for all your digital services needs. We look into
          your budget to create a preferable online marketing strategy to help
          you in achieving the goals of your business.
        </p>
      </Container>
    </div>
  );
};

export default AboutUs;
