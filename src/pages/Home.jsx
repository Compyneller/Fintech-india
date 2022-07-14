import React from "react";
import Hero from "../components/Hero/Hero";
import OurServices from "../components/OurServices";
import ServicesContent from "../components/ServicesContent";

const Home = () => {
  return (
    <>
      <Hero />

      <br />
      <br />
      <ServicesContent />
      <OurServices />
    </>
  );
};

export default Home;
