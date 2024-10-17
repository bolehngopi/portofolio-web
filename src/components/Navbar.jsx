"use client";

import { navLinks } from "@/data";
import { useEffect, useState, useMemo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check scroll position to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      // Check which section is currently in view
      const sections = document.querySelectorAll("div[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollTop >= sectionTop - sectionHeight / 2 && scrollTop < sectionTop + sectionHeight / 2) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoize nav links to avoid unnecessary renders
  const memoizedNavLinks = useMemo(
    () =>
      navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`${active === link.id ? "text-white" : "text-slate-500"
            } text-sm font-medium ml-6 transition-colors duration-300`}
          aria-current={active === link.id ? "page" : undefined}
        >
          {link.title}
        </a>
      )),
    [active]
  );

  return (
    <nav
      className={`w-full fixed z-40 p-4 transition-all duration-300 ${scrolled ? "bg-black/80 shadow-md" : "bg-transparent"
        } pointer-events-auto`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h1 className="text-white text-lg sm:text-xl font-bold ml-2 sm:ml-3">
            Aziz Khasyi
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex">{memoizedNavLinks}</div>

        {/* Mobile Toggle Button */}
        <button
          className="sm:hidden text-white focus:outline-none ml-auto"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Links */}
      {toggle && (
        <div className="sm:hidden mt-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${active === link.id ? "text-white" : "text-slate-500"
                } text-sm font-medium`}
              onClick={() => setToggle(false)} // Close menu on click
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
