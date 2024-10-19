"use client";

import { navLinks } from "@/data"; // Import nav links data
import { useEffect, useState, useMemo, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  // Detect scroll to change active section
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      const scrollPosition = window.scrollY + navbarHeight;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeigh
          ) {
            setActive(link.id);
          }
        }
      });

      setScrolled(window.scrollY > 50); // Add shadow when scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const memoizedNavLinks = useMemo(
    () =>
      navLinks.map((link) => {
        const isExternal = link.link && !link.id;

        return (
          <a
            key={link.title}
            href={isExternal ? link.link : `#${link.id}`} // Ensure correct linking
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`${active === link.id ? "text-white" : "text-slate-500 hover:text-white/50"
              } text-sm font-medium ml-6 transition-colors duration-300`}
            aria-current={active === link.id ? "page" : undefined}
          >
            {link.title}
          </a>
        );
      }),
    [active]
  );

  return (
    <nav
      ref={navbarRef}
      className={`w-full fixed z-40 p-4 transition-all duration-300 ${scrolled ? "bg-black/80 shadow-md" : "bg-transparent"
        } pointer-events-auto`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h1 className="text-white text-lg sm:text-xl font-bold ml-2 sm:ml-3">
            Aziz Khasyi
          </h1>
        </div>

        <div className="hidden sm:flex">{memoizedNavLinks}</div>

        <button
          className="sm:hidden text-white focus:outline-none ml-auto"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {toggle && (
        <div className="sm:hidden mt-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => {
            const isExternal = link.link && !link.id;

            return (
              <a
                key={link.title}
                href={isExternal ? link.link : `#${link.id}`}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`${active === link.id ? "text-white" : "text-slate-500"
                  } text-sm font-medium`}
                onClick={() => setToggle(false)}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
