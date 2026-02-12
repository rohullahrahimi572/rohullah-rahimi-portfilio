// export default Hero;
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BackgroundLines } from "./background-lines";
import { icons } from "./icons";

// Floating animation
const float = (duration) => ({
  float: {
    y: [0, -20, 0],
    rotate: [0, 10, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

// Icons configuration (TOP/LEFT MUST BE INLINE STYLE)

function Hero() {
  return (
    <div className="relative w-full min-h-[100svh] bg-black overflow-hidden container mx-auto">
      {/* BACKGROUND LINES */}
      <div className="absolute inset-0 z-0">
        <BackgroundLines />
      </div>

      {/* FLOATING ICONS — FIXED */}
      {icons.map((item, index) => (
        <motion.div
          key={index}
          variants={float(item.duration)}
          animate="float"
          style={{
            position: "absolute",
            top: item.top,
            left: item.left,
            fontSize: item.size,
            color: item.color,
            opacity: 0.6,
            filter: "drop-shadow(0px 0px 8px rgba(255,255,255,0.3))",
            pointerEvents: "none",
            zIndex: 3,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* MAIN CONTENT */}
      <div
        id="Home"
        className="relative z-10 flex flex-col justify-center min-h-[100svh] w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
      >
        <div className="mx-auto w-full max-w-[1200px] text-white">
          {/* I'M */}
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-semibold font-poppins leading-tight text-[clamp(60px,8vw,72px)]"
          >
            I'M
          </motion.h1>

          {/* zzz */}
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-semibold font-poppins text-yellow-600 leading-tight text-[clamp(60px,8vw,72px)]"
          >
            Rohullah
          </motion.h1>

          {/* KAROKHIL + PLUS SIGN */}
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative font-semibold font-poppins leading-tight flex items-center gap-2 text-[clamp(60px,8vw,72px)]"
          >
            Rahimi
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="text-yellow-600 font-bold text-5xl md:text-7xl "
            >
              +
            </motion.span>
          </motion.h1>

          {/* TYPE ANIMATION */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-3"
          >
            <TypeAnimation
              className="text-yellow-600 font-poppins text-[clamp(14px,4vw,22px)]"
              sequence={[
                "FRONT-END DEVELOPER...",
                1000,
                "BACK-END DEVELOPER...",
                1000,
                "UI/UX DESIGNER...",
                1000,
                "FULL STACK DEVELOPER...",
                1000,
              ]}
              speed={10}
              repeat={Infinity}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
