import React from "react";
import "./Hero.scss";
import svg from "../../assets/wave.svg";
import mobile from "../../assets/mobile.svg";
import { Container } from "react-bootstrap";
const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroBg">
        <img src={svg} alt="" />
      </div>
      <div className="heroContent w-100">
        <Container>
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3>
                Bring your Business to us and Get the Best Digital Marketing
                Strategy with technology needs!
              </h3>
              <p className="text-light">
                Accelerate the growth of your business and evolve into your full
                potential with digital marketing strategies of Fintech India.
                Our digital marketing team goes above and beyond to ensure our
                web marketing campaigns do not just drum up new business for our
                clients but also support sustainable success!
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Container className=" mobileHero">
        <img src={mobile} alt="" />
      </Container>
    </div>
  );
};

export default Hero;
