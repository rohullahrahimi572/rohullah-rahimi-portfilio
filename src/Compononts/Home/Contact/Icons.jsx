// src/components/ContactIcons.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

const whatsappNumber = "+93775618572";
const message = "";

const icons = [
  {
    icon: <FaGithub />,
    link: "https://github.com/rohullahrahimi",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/rohullahrahimi/",
    label: "LinkedIn",
  },

  {
    icon: <FaWhatsapp />,
    link: `https://wa.me/${whatsappNumber}`,
    label: "WhatsApp",
  },
];

const ContactIcons = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-10 justify-center">
      {icons.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="text-yellow-500 hover:text-white text-4xl transition-all duration-300"
          title={item.label}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default ContactIcons;
