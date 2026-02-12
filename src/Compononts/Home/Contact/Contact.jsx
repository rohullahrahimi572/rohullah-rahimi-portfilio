import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Icons from "./Icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./conact.css";
function Contact() {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // initialize AOS
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xesf5wp",
        "template_87pymfz",
        form.current,
        "g3e-iApIF2PfXsxLh",
      )
     .then(
  (result) => {
    // This clears the 'result is never read' warning
    console.log("EmailJS Success:", result.text); 
    alert("Message sent successfully!");
    form.current.reset();
  },
  (error) => {
    // This will tell you EXACTLY why it's failing (e.g., "The public key is invalid")
    alert(`Failed to send: ${error.text} (Status: ${error.status})`);
    console.error("Full Error Object:", error);
  },
);

  };

  return (
    <section id="contact" className="bg-black py-12 sm:py-16">
      <div className="max-w-[1350px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1
          data-aos="fade-right"
          className="text-yellow-600 font-poppins font-semibold mb-2 text-sm sm:text-base"
        >
          Contact
        </h1>

        <h2
          data-aos="fade-left"
          className="font-bold font-poppins text-white leading-tight mb-8 sm:mb-12 text-[clamp(32px,5vw,56px)] lg:text-[clamp(40px,5vw,72px)]"
        >
          Level Up your business
          <span className="plus-icon ml-1">+</span>
        </h2>

        {/* Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-0 sm:px-4 md:px-6 lg:gap-12 font-poppins">
          {/* Left: Info */}
          <div data-aos="fade-up">
            <p className="text-white/90 text-base sm:text-lg leading-relaxed xl:mt-8">
              Describe your challenges and needs. Within 24 hours, I will
              contact you to plan the strategy on how to improve your app or
              website.
              <br />
              <span className="text-yellow-500 font-semibold">
                Let's connect!
              </span>
            </p>

            <div className="mt-6 sm:mt-8">
              <Icons />
            </div>
          </div>

          {/* Right: Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-md sm:mx-auto px-4 container mx-auto"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label
                htmlFor="user_name"
                className="text-yellow-600 text-sm sm:text-base mb-1"
              >
                Name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="What's your name?"
                required
                className="h-10 sm:h-11 px-4 bg-slate-800 rounded-lg text-white w-full
                 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="user_email"
                className="text-yellow-600 text-sm sm:text-base mb-1"
              >
                Email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="example@gmail.com"
                required
                className="h-10 sm:h-11 px-4 bg-slate-800 rounded-lg text-white w-full
                 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-yellow-600 text-sm sm:text-base mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                required
                className="h-36 sm:h-40 p-4 bg-slate-800 rounded-lg text-white resize-none w-full
                 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="border border-slate-700 shadow-inner shadow-slate-700 text-white py-3 px-6 rounded-lg font-semibold
               hover:bg-white/5 hover:text-amber-400 transition w-full sm:w-auto text-center pulse-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
