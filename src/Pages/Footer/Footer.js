import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="text-center py-4">
        <p>Copyright © {year} - All right reserved</p>
        <p>Developed By Rasel</p>
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
      </div>
    </footer>
  );
};

export default Footer;
