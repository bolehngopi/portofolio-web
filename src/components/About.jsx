"use client";

import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-16 px-6 bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-center"
    >
      {/* Title and Social Links Container */}
      <div className="w-full max-w-3xl flex flex-col md:flex-row md:justify-evenly items-center mb-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">
          About Me
        </h2>

        {/* Social Links */}
        <div className="flex mt-4 md:mt-0 gap-6">
          <a
            href="https://github.com/bolehngopi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-600 hover:text-black dark:hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-500 hover:text-black dark:hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Introduction Text */}
      <p className="max-w-2xl text-center text-lg leading-relaxed mb-12">
        I&apos;m <span className="text-primary font-semibold">Aziz Khasyi</span>, a passionate developer who loves building
        beautiful web experiences. With a keen eye for detail and a deep interest in technology,
        I bridge the gap between code and design to craft exceptional projects.
      </p>

      {/* Call to Action */}
      <a
        href="#contact"
        className="mt-8 px-8 py-4 bg-primary text-white font-medium rounded-full shadow-md hover:bg-primary/90 transition duration-300"
      >
        Let's Collaborate
      </a>
    </section>
  );
};

export default About;
