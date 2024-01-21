import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Service from "../Services/Service";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div
      className="max-w-[1400px] mx-auto"
      style={{
        padding: "0 5%",
      }}
    >
      <Banner></Banner>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Service />
      <Contact></Contact>
    </div>
  );
};

export default Home;
