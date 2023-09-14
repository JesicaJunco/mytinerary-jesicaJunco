import React from "react";
import Location from './svgs/Location.jsx'

export function Card({ city, country, image }) {
  return (
    <>
      <div className="backdrop-blur-sm py-12 min-h-[50vh] w-64 h-64 rounded-lg overflow-hidden shadow-md relative ">
      <img className= "w-full h-full object-cover" src={image} alt="City" />
        <p className="md:text-1xl text-center font-bold uppercase text-orange-500 absolute bottom-4 right-0.5">
          {city}
        </p>
        <div className="absolute -bottom-4 right-0.5 transform -translate-y-1/2 flex justify-center items-center">
          <svg
            className="h-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
          <Location/>
          <p className="md:text-1xl pl-1 text-black font-bold">{country}</p>
        </div>
        <button className="absolute bottom-2 left-2 px-1 py-1 bg-teal-500 hover:bg-blue text-white font-semibold hover:text-black border border-blue hover:border-transparent rounded">
          View more
        </button>
      
      </div>
    </>
  );
}
