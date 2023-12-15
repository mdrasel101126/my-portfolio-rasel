import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="text-center py-4">
        <p>Copyright © {year} - All right reserved</p>
        <p>Developed By Rasel</p>
        <div className="flex justify-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100014968758892"
            className="m-2 text-white text-2xl"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rasel-miah26/"
            className="m-2  text-white text-2xl"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mdrasel101126"
            className="m-2  text-white text-2xl"
          >
            <FaGithub></FaGithub>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
