import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="rounded-2xl bg-black text-white border border-slate-700 shadow-inner shadow-slate-700 px-5 sm:px-7 lg:px-10 py-6 sm:py-8 lg:py-10">
            <h1 className="text-yellow-600 font-bold font-poppins text-3xl sm:text-4xl lg:text-5xl mb-4">
              About Me
            </h1>

            <p className="font-poppins font-light text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-200">
              I am a skilled Full-Stack Web Developer specializing in the MERN
              stack (MongoDB, Express.js, React.js, Node.js), with hands-on
              experience building responsive, scalable, and user-friendly web
              applications. I focus on clean architectural design, secure and
              efficient backend systems, and intuitive frontend interfaces. My
              expertise includes developing Single Page Applications (SPAs),
              RESTful APIs, user authentication, real-time features using
              WebSockets, and advanced MongoDB aggregation pipelines. I leverage
              Tailwind CSS to craft modern, responsive UI components and adhere
              to best practices such as the MVC pattern, modular code structure,
              and Git version control.
            </p>

            {/* COUNTERS */}
            <div
              ref={ref}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8"
            >
              <div className="text-center rounded-xl p-5 bg-black border border-slate-700 shadow-inner shadow-slate-700">
                <h2 className="text-yellow-600 font-bold text-lg mb-1">
                  Projects
                </h2>
                {inView && (
                  <span className="text-white text-3xl font-semibold">
                    <CountUp start={0} end={20} duration={2} />+
                  </span>
                )}
              </div>

              <div className="text-center rounded-xl p-5 bg-black border border-slate-700 shadow-inner shadow-slate-700">
                <h2 className="text-yellow-600 font-bold text-lg mb-1">
                  Experience
                </h2>
                {inView && (
                  <span className="text-white text-3xl font-semibold">
                    <CountUp start={0} end={2} duration={2} />+
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-center ">
              <a
                href="#contact"
                className="mt-8 inline-block bg-black text-white text-base sm:text-lg font-bold px-6 py-2 rounded-lg border border-slate-700 shadow-inner shadow-slate-700 hover:shadow-white/20 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-inner shadow-slate-700 bg-black">
            <div className=" sm:aspect-[1/1] md:aspect-[2/1.8] lg:aspect-[2/3.6] xl:aspect-[2/2.3] w-full">
              <img
                src="About/rouhllah.JPG"
                alt="Raheb portrait"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
