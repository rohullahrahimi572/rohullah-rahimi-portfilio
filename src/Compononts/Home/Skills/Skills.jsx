



import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaFigma,
  FaNodeJs,

} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiPostman } from "react-icons/si";

const iconClass = "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"; // scales icon sizes per breakpoint

const icons = [
  { icon: <RiTailwindCssFill className={`text-[#06B6D4] ${iconClass}`} /> },
  { icon: <FaCss3 className={`text-[#1572B6] ${iconClass}`} /> },
  { icon: <IoLogoJavascript className={`text-[#F7DF1E] ${iconClass}`} /> },
  { icon: <FaHtml5 className={`text-[#E34F26] ${iconClass}`} /> },
  { icon: <FaNodeJs className={`text-[#68A063] ${iconClass}`} /> },
  { icon: <FaBootstrap className={`text-[#7952B3] ${iconClass}`} /> },
  { icon: <FaReact className={`text-[#61DAFB] ${iconClass}`} /> },
  { icon: <SiTypescript className={`text-[#3178C6] ${iconClass}`} /> },
  { icon: <FaGithub className={`text-white ${iconClass}`} /> },
  { icon: <FaFigma className={`text-[#F24E1E] ${iconClass}`} /> },
  { icon: <GrMysql className={`text-[#4479A1] ${iconClass}`} /> },
  { icon: <SiPostman className={`text-[#FF6C37] ${iconClass}`} /> },

  {
    icon: (
      <img
        src="/Skills/Express.js.png"
        alt="Express"
        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
      />
    ),
  },
  { icon: <SiMongodb className={`text-[#47A248] ${iconClass}`} /> },
  { icon: <RiNextjsFill className={`text-white ${iconClass}`} /> },
];

function Skills() {
  return (
    <div className="bg-black py-10 sm:py-14">
      <div className="px-4 sm:px-8 lg:px-20 max-w-[1400px] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10">
          Skills
        </h1>  

        <div className="flex flex-col gap-8 sm:gap-10 rounded-lg py-8 sm:py-10 w-[99%]   border-zinc-900" >
          {["left", "right", "left"].map((dir, index) => (
            <Marquee
              key={index}
              speed={15}
              gradient={false}
              direction={dir}
              pauseOnHover
              className="w-full"
            >
              <div className="flex items-center gap-x-8 sm:gap-x-12  lg:gap-x-16 px-4 sm:px-6 lg:px-8">
                {icons.map((item, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-2 sm:py-3 shadow-inner shadow-slate-900 rounded-md"
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
            </Marquee>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
