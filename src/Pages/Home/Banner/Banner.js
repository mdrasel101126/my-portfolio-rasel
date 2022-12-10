import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Banner.module.css";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../../../Images/profile-image.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto p-8 bg-slate-900 text-white">
      <div>
        <div className="flex justify-center">
          <Link className="m-2 text-white text-2xl">
            <FaFacebook></FaFacebook>
          </Link>
          <Link className="m-2  text-white text-2xl">
            <FaLinkedinIn></FaLinkedinIn>
          </Link>
          <Link className="m-2  text-white text-2xl">
            <FaTwitter></FaTwitter>
          </Link>
        </div>
        <div className="text-center ">
          <span className="text-xl font-bold">Hello, I am</span>{" "}
          <span className="text-orange-600 text-xl font-bold">Rasel Miah</span>
          <div>
            <h1 className="text-4xl font-bold">
              I am a{" "}
              <span className="text-orange-600">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Full Stack Dev",
                    "MERN Stack Dev",
                    "Frontend Dev",
                    "JavaScript Dev",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  /* onLoopDone={handleDone}
            onType={handleType} */
                />
              </span>
            </h1>
            <span className="text-gray-400">
              Create and design websites with frontend and backend operations
            </span>
          </div>
          <div className="my-4">
            <a
              href="#contact-me"
              className="btn btn-outline btn-primary rounded-3xl px-8  font-bold mr-4"
            >
              Hire Me
            </a>
            <button className="btn btn-primary rounded-3xl px-8 text-white font-bold">
              <a
                href="https://drive.google.com/file/d/1P_uEheOuk7WBFMaEmyyD1TaJneUjzFSr/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 mx-auto">
        <img
          className="w-3/5  bg-blue-400  rounded-full mx-auto"
          src={profileImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
