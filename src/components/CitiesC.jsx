import { Link as LinkRouter }  from 'react-router-dom';
import {Card} from './Card.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NotFound from './NotFound.jsx';



export default function Cities() {
    const[cities, setCities]= useState();
    useEffect(()=>{
        axios.get('http://localhost:7000/api/cities')
        .then(response=>{setCities(response.data.cities)})
        .catch(error=>{console.log(error)})
    },[]);
    const handleInputChange = async(city) =>{
        console.log(city.target.value)

        try{
            await axios.get(`http://localhost:7000/api/cities?city=${city.target.value}`)
            .then((res)=>setCities(res.data.cities)) 
        }catch (error){
            console.log(error)
            setCities([]);
        }
    }
    
    return(
    <>
        <div className='bg-white flex flex-col justify-center items-center'>
  <div className="relative flex items-center">
    <svg className="w-4 h-4 text-gray-500 absolute left-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <input
      onChange={handleInputChange}
      type="text"
      className='rounded-md pl-10 h-8 self-center my-3'
      placeholder='Search your city'
    />
  </div>
  <div className='flex flex-wrap justify-center items-center gap-4'>
    {
      cities?.length > 0 ? 
      cities?.map((city) => (
        <LinkRouter key={city._id} to={`/cities/${city._id}`}>
          <Card city={city.city} country={city.country} url={city.url} />
        </LinkRouter>
      ))
      :
      <NotFound/>
    }
  </div>
</div>

    </>
)}