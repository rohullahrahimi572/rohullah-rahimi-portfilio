import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
// import logo from "../../../assets/logo/rk.jpg";
import cv from "../../../assets//CV/Rohullah Rahimi_CV.pdf";

function Navbar() {
  const [Dropdown, setDropdown] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setDropdown(false);
    }
  };

  return (
    <div className="  flex justify-center items-center ">
      <div className=" container mx-auto  fixed top-4   flex justify-between items-center border border-slate-700 h-16  w-[92%] md:w[92%] px-3 sm:px-4 shadow-inner shadow-slate-700 rounded-full bg-black/70  z-50">
        <div className="">
          <Link to="/">
           <FaCode  className="text-white text-2xl"/>
          </Link>
        </div>

        <ul className="hidden md:flex gap-11 text-white font-bold font-poppins">
          <li className="hover:text-yellow-600 transition ease-out duration-1000 cursor-pointer">
            <a href="#home" onClick={(e) => handleScroll(e, "#Home")}>
              HOME
            </a>
          </li>
          <li className="hover:text-yellow-600 transition ease-out duration-1000 cursor-pointer">
            <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
              ABOUT
            </a>
          </li>
          <li className="hover:text-yellow-600 transition ease-out duration-1000 cursor-pointer">
            <a href="#project" onClick={(e) => handleScroll(e, "#project")}>
              PROJECT
            </a>
          </li>
          <li className="hover:text-yellow-600 transition ease-out duration-1000 cursor-pointer">
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
              CONTACT
            </a>
          </li>
        </ul>

        <span className="hidden md:flex shadow-inner shadow-slate-700 w-36 h-11 justify-center items-center text-white rounded-full cursor-pointer bg-black">
          <a href={cv} target="_blank" rel="noreferrer">
            Download CV
          </a>
        </span>

        <div className="relative md:hidden">
          <span
            className="border w-28 h-11 font-bold flex justify-center items-center text-white rounded-full cursor-pointer bg-black"
            onClick={() => setDropdown(!Dropdown)}
          >
            {Dropdown ? "Close" : "Menu"}
          </span>

          <div
            className={`fixed transition-all duration-500 ease-in-out ${
              Dropdown
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            } top-20 right-12 left-12   bg-black/50 text-white text-center rounded-lg shadow-md p-4 z-40`}
          >
            <ul className="space-y-4 font-semibold">
              <li className="hover:text-yellow-600 transition duration-300">
                <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
                  HOME
                </a>
              </li>
              <li className="hover:text-yellow-600 transition duration-300">
                <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
                  ABOUT
                </a>
              </li>
              <li className="hover:text-yellow-600 transition duration-300">
                <a href="#project" onClick={(e) => handleScroll(e, "#project")}>
                  PROJECT
                </a>
              </li>
              <li className="hover:text-yellow-600 transition duration-300">
                <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
                  CONTACT
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://drive.google.com/file/d/17LtV8jUaHO5Af-ipnzsIHCymPiBgML_8/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
