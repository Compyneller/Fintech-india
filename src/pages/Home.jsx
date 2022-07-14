import React from "react";
import Additional from "../components/Additional";
import Hero from "../components/Hero/Hero";
import OurServices from "../components/OurServices";
import ServicesContent from "../components/ServicesContent";
import Why from "../components/Why";

const Home = () => {
  return (
    <>
      <Hero />

      <br />
      <br />
      <ServicesContent />
      <OurServices />
      <Additional />
      <Why />
    </>
  );
};

export default Home;
