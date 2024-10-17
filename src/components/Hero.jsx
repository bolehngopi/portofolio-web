"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = ["Web Developer", "Tech Enthusiast"];

  // Typewriter Effect
  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];
    const timeout = setTimeout(() => {
      setText((prev) =>
        prev.length < currentPhrase.length
          ? currentPhrase.slice(0, prev.length + 1)
          : ""
      );

      if (text === "") {
        setIndex((prev) => prev + 1);
      }
    }, text === currentPhrase ? 1500 : 150);

    return () => clearTimeout(timeout);
  }, [text, index]);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-900 via-gray-900 to-black overflow-hidden"
    >
      {/* Background Blob */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-800 via-transparent to-black opacity-30 blur-3xl" />

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Hi, I am <span className="text-primary">Aziz Khasyi</span>
      </h1>

      {/* Typewriter Effect */}
      <h2 className="text-2xl md:text-3xl text-secondary mt-4 h-8 text-white/60">
        {text}
        <span className="animate-blink">|</span>
      </h2>

      {/* Social Icons */}
      <div className="flex mt-8 gap-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:scale-110 transform transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:scale-110 transform transition-all duration-300"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* 3D Interactive Card (Optional) */}
      {/* <div className="mt-12 group relative w-64 h-80 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:rotate-6 hover:scale-105 transition-all duration-500 perspective-1000">
        <div className="absolute inset-0 rounded-lg bg-black/70 flex items-center justify-center text-white text-lg font-medium backface-hidden">
          Let&apos;s build something amazing!
        </div>
      </div> */}

      {/* Scroll Down Button */}
      <a
        href="#about"
        className="absolute bottom-8 animate-bounce text-white text-xl flex items-center gap-2"
      >
        Scroll Down <FaArrowDown />
      </a>
    </section>
  );
};

export default Hero;
