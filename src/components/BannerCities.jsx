import React from 'react';

export default function BannerCities() {
  return (
    <>
      <div className='w-full bg-cover'>
        <img src="https://img.freepik.com/foto-gratis/concepto-viaje-puntos-referencia-todo-mundo_23-2149153263.jpg?3&w=740&t=st=1692756598~exp=1692757198~hmac=4b19936c78ebc565fa3d509d3f4fc2afc9d63b081ff74f20039ce48c51d8a180" alt="banner" className='w-full h-[700px] overflow-hidden bg-cover'/>
      </div>
      <h1 className="text-8xl font-bold absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="bg-gradient-to-r from-red-400 via-fuchsia-300 to-sky-500 text-transparent bg-clip-text">
          City
        </span>
      </h1>
    </>
  )
}
