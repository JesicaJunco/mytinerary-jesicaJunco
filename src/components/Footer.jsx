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
      <div className="flex justify-center items-center w-full p-4 lg:p-10">
        <section className="flex flex-col lg:flex-row h-full items-center rounded-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 p-6 text-center text-white">
          <div className=" text-center sm:px-[20%]">
            <h2 className="mb-4 lg:mb-8 text-2xl lg:text-3xl font-bold">Let it surprise you</h2>
            <p className="mb-4 pb-2 lg:pb-0">
            Our app will guide you to discover the perfect path for your
            upcoming adventure. Featuring a user-friendly interface and a wide
            array of itinerary choices, crafting your next journey has never
            been more delightful.</p>
          <p className="mb-4 text-xl lg:text-2xl font-bold">
              Find your perfect trip, designed by insiders who know and love
              their cities.</p>
           </div>
        </section>
        </div>
       {/*  <div className="space-x-4">
        <a className="boton-home text-sm p-2 bg-black text-white" href="/">Go Home  <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></a>
        <a className="boton-home text-sm p-2 bg-black text-white" href="/cities">Go City  <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></a>
        </div> */}
        <div className="container pt-6 lg:pt-9">
          <div className="mb-5 flex justify-center space-x-4 [&_a:hover]:animate-bounce">
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
