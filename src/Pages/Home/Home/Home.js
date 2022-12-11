import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../AboutMe/Skills";
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
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Home;
