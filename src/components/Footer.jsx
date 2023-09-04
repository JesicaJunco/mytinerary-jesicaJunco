import React from "react";
import Facebook from "./svgs/Facebook.jsx";
import Instagram from "./svgs/Instagram.jsx";
import Google from "./svgs/Google.jsx";
import Github from "./svgs/Github.jsx";
import Linkedin from "./svgs/Linkedin.jsx";
import X from "./svgs/X.jsx";


export default function Footer() {
  return (
    <>
      <footer className="text-center bg-white">
        <div className="text-center justify-center flex flex-col gap-3 p-3 mr-4 ml-4 ">
          <span className="mb-3 text-gray-800 text-lg leading-relaxed indent-2">
            Our app will guide you to discover the perfect path for your
            upcoming adventure. Featuring a user-friendly interface and a wide
            array of itinerary choices, crafting your next journey has never
            been more delightful.
          </span>
          <span className="relative inline-block">
            <span className="absolute inset-0 z-1 bg-gradient-to-r from-indigo-600 to-indigo-400 transform -skew-y-4"></span>
            <span className="relative text-white font-bold font-customFont1 text-xl">
              Find your perfect trip, designed by insiders who know and love
              their cities.
            </span>
          </span>
        </div>
        <div className="container pt-9">
          <div className="mb-5 flex justify-center [&_a:hover]:animate-bounce">
          <a href="https://www.facebook.com/" className="mr-9 text-black-800">
              <Facebook />
            </a>
            <a href="https://www.twitter.com/" className="mr-9 text-black-800">
              <X />
            </a>
            <a href="https://www.google.com/" className="mr-9 text-black-800">
              <Google />
            </a>
            <a href="https://www.instagram.com/" className="mr-9 text-black-800">
              <Instagram />
            </a>
            <a href="https://www.github.com/" className="mr-9 text-black-800">
              <Github />
            </a>
            <a href="https://www.linkedin.com/" className="mr-9 text-black-800">
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="bg-white font-customFont2 p-1 text-center text-neutral-700 dark:bg-neutral-700">
          © 2023 Developed by Jesica Junco
        </div>
      </footer>
    </>
  );
}
