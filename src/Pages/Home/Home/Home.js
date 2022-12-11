import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div
      style={{
        padding: "0 5%",
      }}
    >
      <Banner></Banner>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </div>
  );
};

export default Home;
