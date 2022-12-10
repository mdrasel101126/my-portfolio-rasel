import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const items = (
    <>
      <li>
        <Link to="/" className="text-white font-bold hover:text-primary">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-white font-bold hover:text-primary">
          About Me
        </Link>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1P_uEheOuk7WBFMaEmyyD1TaJneUjzFSr/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="text-white font-bold hover:text-primary"
        >
          Resume
        </a>
      </li>
      <li>
        <a
          href="#contact-me"
          className="text-white font-bold hover:text-primary"
        >
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div
      style={{ padding: "0 5%" }}
      className="navbar bg-slate-900 flex justify-between"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white font-bold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52"
          >
            {items}
          </ul>
        </div>
        <Link
          className="
       text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          RASEL MIAH
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal   px-1">{items}</ul>
      </div>
    </div>
  );
};

export default Header;
