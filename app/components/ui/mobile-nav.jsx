"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PropTypes from "prop-types";

export const MobileNav = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[5001] p-4 rounded-full bg-gray-900/70 backdrop-blur-[8px] border border-gray-800"
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 relative flex items-center justify-center">
          <span
            className={`absolute w-6 h-0.5 bg-gray-200 transform transition-all duration-300 ${
              isOpen ? "rotate-45 top-2" : "rotate-0 top-0"
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-gray-200 top-2 transform transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-gray-200 transform transition-all duration-300 ${
              isOpen ? "-rotate-45 top-2" : "rotate-0 top-4"
            }`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[5000] bg-gray-900/95 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={(e) => handleClick(e, item.link)}
                  className="text-xl font-medium text-gray-200 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

MobileNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
