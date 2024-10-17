"use client";

import { FaCode, FaPalette, FaMobileAlt } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-16 px-6 bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-center"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        About Me
      </h2>

      {/* Introduction Text */}
      <p className="max-w-2xl text-center text-lg leading-relaxed mb-12">
        I&apos;m <span className="text-primary font-semibold">Aziz Khasyi</span>, a passionate developer who loves building
        beautiful web experiences. With a keen eye for detail and a deep interest in technology,
        I bridge the gap between code and design to craft exceptional projects.
      </p>

      {/* Skill Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="group p-6 rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="p-4 rounded-full bg-white text-indigo-600 group-hover:text-white group-hover:bg-indigo-700 transition-all duration-300">
                {skill.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {skill.title}
            </h3>
            <p className="text-center text-sm leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div> */}

      {/* Call to Action */}
      <a
        href="#contact"
        className="mt-12 px-8 py-4 bg-primary text-white font-medium rounded-full shadow-md hover:bg-primary/90 transition duration-300"
      >
        Let's Collaborate
      </a>
    </section>
  );
};

export default About;
