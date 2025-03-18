"use client";
import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import PropTypes from "prop-types";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 150) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`hidden md:flex fixed inset-x-0 top-10 z-[5000] mx-auto max-w-fit items-center justify-center space-x-4 rounded-full border border-gray-800 bg-gray-900/90 px-8 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.3)] backdrop-blur-[8px] ${
          className || ""
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            onClick={(e) => handleClick(e, item.link)}
            className="relative px-4 py-2 text-sm text-gray-200 transition-colors hover:text-white"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

FloatingNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};
