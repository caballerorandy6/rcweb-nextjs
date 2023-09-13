"use client";
import React from "react";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import Heading from "./Heading";
import SocialLink from "./SocialLink";
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaTwitter, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { linkVariants } from "@/lib/framer-motion-animations";

const navbar = [
  { id: "home", icon: <HiHome />, url: "/", label: "Home" },
  { id: "about", icon: <HiUser />, url: "/about", label: "About" },
  {
    id: "projects",
    icon: <HiViewColumns />,
    url: "/projects",
    label: "Projects",
  },
  { id: "contact", icon: <HiEnvelope />, url: "/contact", label: "Contact" },
];

const social = [
  {
    id: "gitHub",
    icon: <FaGithub />,
    url: "https://github.com/caballerorandy6",
    label: "GitHub",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/caballerorandy",
    label: "LinkedIn",
  },
  {
    id: "twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/caballerorandy6",
    label: "Twitter",
  },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex fixed w-full items-center py-8 px-8">
      <div className="w-4/12">
        <NavLink href="/" className="hover:opacity-70">
          <Heading>Randy Caballero</Heading>
        </NavLink>
        <h2 className="text-gold/80">Software Engineer & Web Developer</h2>
      </div>
      <motion.div
        className="text-white/70 hover:text-bitter"
        variants={linkVariants}
        whileHover="hover"
      ></motion.div>

      <ul className="w-3/12 flex justify-end items-center gap-6 text-xl mx-auto text-white/90">
        {navbar.map((link) => (
          <motion.li
            key={link.id}
            className="text-white/70"
            variants={linkVariants}
            whileHover="hover"
          >
            <NavLink href={link.url}>
              {/* Tooltip */}
              <div className="absolute top-6 hidden group-hover:flex transition-all">
                <div className="relative bg-mineshaft text-white/70 items-center p-1 rounded-md mx-auto">
                  <div className="text-xs">{link.label}</div>
                </div>
              </div>

              {/* Icon */}
              <div>{link.icon}</div>
            </NavLink>
          </motion.li>
        ))}
      </ul>

      <ul className="w-3/12 flex justify-end items-center gap-6 text-xl text-white/90 px-8">
        {social.map((link) => (
          <motion.li
            key={link.id}
            className="text-white/70"
            variants={linkVariants}
            whileHover="hover"
          >
            <SocialLink href={link.url} target="_blank">
              {/* Tooltip */}
              <div className="absolute top-8 hidden group-hover:flex transition-all">
                <div className="relative bg-mineshaft text-white/70 items-center p-1 rounded-md mx-auto">
                  <div className="text-xs">{link.label}</div>
                </div>
              </div>

              {/* Icon */}
              <div>{link.icon}</div>
            </SocialLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
