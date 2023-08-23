import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import links from '../utiles/links'
import ButtonAvatar from './ButtonAvatar'
import HamburgerMenu from './HamburgerMenu.jsx'

export default function Header() {
  
  return (
    <>
      <header className="absolute top-0 left-0 w-full flex justify-between h-12  items-center p-4">
      
        <nav className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-map-pin-heart w-8 h-8"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="red"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 11a3 3 0 1 0 -3.973 2.839" />
            <path d="M11.76 21.47a1.991 1.991 0 0 1 -1.173 -.57l-4.244 -4.243a8 8 0 1 1 13.657 -5.588" />
            <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
          </svg>
          <h1 id='titleNavbar' className="mt-2 ml-2 font-bold text-sky-500">
            MyTinerary
          </h1>
      </nav>
      <div className='md:hidden'>
          <HamburgerMenu/>
        </div>
      <nav className="hidden md:flex md:justify-end mt-3 p-1 space-x-4">
      { 
          links.map((link, index) => (<LinkRouter key={index} to={link.to} className='navbar-link text-sky-500 font-bold hover:text-green-400 transition-colors duration-300 text-xl'> {link.title}
          </LinkRouter> ))
        }   
        <ButtonAvatar/>
        </nav>     
      </header>
    </>
  );
}