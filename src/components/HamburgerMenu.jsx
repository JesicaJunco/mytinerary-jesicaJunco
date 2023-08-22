import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import links from "../utiles/links";

export default function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="md:hidden">
      <button
        className="text-blue-600 hover:text-blue-600"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isNavOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isNavOpen && (
        <ul className="mt-4">
          {links.map((link, index) => (
            <li key={index} className="mb-4 last:mb-0">
              <LinkRouter
                to={link.to}
                className="navbar-link text-blue-600 hover:underline"
                onClick={() => setIsNavOpen(false)}
              >
                {link.title}
              </LinkRouter>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
