import React, { useEffect, useState } from 'react';
import UnderContruction from './UnderContruction.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link as LinkRouter } from 'react-router-dom'


export default function DetailsCard() {
  let{id} = useParams();
  const[cities, setCities]= useState();
  useEffect(()=>{
        axios.get(`http://localhost:7000/api/cities/${id}`)
        .then(response=>{setCities(response.data.city)})
        .catch(error=>{console.log(error)})
  },[]);
  return (
    <>
     <div className='bg-cover bg-center min-h-[80vh] text-white mt-12' style={{ backgroundImage: `url('${cities?.url}')` }}>
      <div className='backdrop-blur-sm py-12 min-h-[50vh] flex flex-col justify-center rounded-3xl'> 
      <h2 className='text-center text-4xl py-1 '>{cities?.city}</h2>
      <h3 className='text-center text-3xl py-1' >{cities?.country}</h3>
      <h4 className='text-center text-xl py-1'>Language:  {cities?.language}</h4>
      <h5 className='text-center text-lg py-1'>Currency:  {cities?.currency}</h5>
      <p className='px-4 md:px-52 text-center'>{cities?.description }</p>
      <LinkRouter to='/cities' className='navbar-link text-black bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm absolute bottom-2 left-2 px-4 py-2'> Go back </LinkRouter>
      </div>
      <UnderContruction/>
      </div>
    </>
  )
}
