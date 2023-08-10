import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import links from '../utiles/links'
import ButtonAvatar from './ButtonAvatar'

export default function Header() {
  return (
    <>
      <header className="flex justify-between h-12 items-center bg-gradient-to-r from-teal-600 to-teal-300 p-4 md:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-map-pin-heart w-8 h-8 md:w-10 md:h-10 "
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 11a3 3 0 1 0 -3.973 2.839" />
            <path d="M11.76 21.47a1.991 1.991 0 0 1 -1.173 -.57l-4.244 -4.243a8 8 0 1 1 13.657 -5.588" />
            <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
          </svg>
          <h1 id='titleNavbar' className="text-2xl  md:text-2xl mt-2 ml-2 md:ml-4 font-bold text-white">
            MyTinerary
          </h1>
      </nav>
      </div>
      <nav className="hidden md:flex space-x-4">
      { 
          links.map((link) => (<LinkRouter key={link.title} to={link.to} className='navbar-link text-black hover:text-gray-200 transition-colors duration-300'> {link.title}
          </LinkRouter> ))
        }   
        </nav>     
        <ButtonAvatar className="md:hidden"/>
      </header>
    </>
  );
}
