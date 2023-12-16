import React from "react";
import aboutMeImage from "../../../Images/about-me.jpg";

const AboutMe = () => {
  return (
    <div id="about-me" className="my-12">
      <h1 className="text-4xl text-center text-primary font-bold mb-8">
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 p-2">
        <div className="flex justify-center items-center p-5">
          <p className="text-justify">
            My name is Rasel Miah. I completed a Bachelor of Computer Science
            and Engineering degree from Sylhet Engineering College,Sylhet. I am
            passionate about web development. Now I am exploring modern web
            developmnent techonlogies. I want to become a software engineer. I
            love to read books in my free time. I love travelling also.
          </p>
        </div>
        <div className="md:content-end">
          <img
            className="w-full lg:max-w-sm m-4 mx-auto rounded-xl shadow-xl "
            src={aboutMeImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
