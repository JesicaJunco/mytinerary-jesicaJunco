import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import links from "../utiles/links";
import ButtonAvatar from "./ButtonAvatar";

export default function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="md:hidden ms-auto md:ms-0 flex flex-col items-center justify-start">
        <button
          className="text-blue-600 hover:text-blue-800"
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
          <>
          <div className="bg-black bg-opacity-70 z-50 mt-4 rounded-lg px-4">
                  <ul className="flex flex-col text-center">
          {links.map((link, index) => (
            <li key={index} className="my-2">
              <LinkRouter
                to={link.to}
                className="navbar-link text-blue-300 hover:underline"
                onClick={() => setIsNavOpen(false)}
              >
                {link.title}
              </LinkRouter>
            </li>
          ))}
        </ul>
        <ButtonAvatar/>
        </div>
          </>
      )}
    </div>
  );
}
