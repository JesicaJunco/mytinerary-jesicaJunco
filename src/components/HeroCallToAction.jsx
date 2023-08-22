import React from "react";

export default function HeroCallToAction() {
  return (
    <>
    <div className="bg-hero-background bg-cover bg-center py-10 md:py-16">
    <div className="grid justify-center  mx-auto w-3/5 h-3/6 mb-4 pb-4 border-double border border-teal-500 rounded-2xl bg-gray-100 bg-opacity-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-600  mb-2 md:mb-4">
        MyTinerary
        </h2>
        <p className="text-black text-lg md:text-lg mb-4 md:mb-8">
        Find your perfect trip, designed by insiders who know and love their
            cities!
        </p>
        <p className="text-black text-lg md:text-lg mb-4 md:mb-8">Find the perfect destination.</p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
        Visit our destinations!
        </button>
      </div>
    </div>
</div>
    </>
  );
}
