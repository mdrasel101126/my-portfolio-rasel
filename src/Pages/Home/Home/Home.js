import React from "react";
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
      <Contact></Contact>
    </div>
  );
};

export default Home;
