import React from "react";
import { Link as LinkRouter } from 'react-router-dom'

export default function HeroCallToAction() {
  return (
    <>
    <div className="bg-hero-background w-full h-[700px] overflow-hidden bg-cover mt-12">
    <div className="grid justify-center mx-auto w-4/5 md:w-3/5 h-3/6 mt-24 border-double border border-teal-500 rounded-2xl bg-gray-100 bg-opacity-60">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16 xl:px-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 pt-6 md:mb-4">
        MyTinerary
        </h2>
        <p className="text-black text-lg md:text-lg mb-4 md:mb-8">
        Find your perfect trip, designed by insiders who know and love their
            cities!
        </p>
        <p className="text-black text-lg md:text-lg mb-4 md:mb-8">Find the perfect destination.</p>
        <LinkRouter to='/cities' className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
        Visit our destinations!
        </LinkRouter>
      </div>
    </div>
</div>
    </>
  );
}
