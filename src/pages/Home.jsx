import React from "react";
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
      <Why />
    </>
  );
};

export default Home;
