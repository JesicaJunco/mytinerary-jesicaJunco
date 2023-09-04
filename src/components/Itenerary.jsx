import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UnderContruction from './UnderContruction.jsx'
//import { Card , CardHeader , CardBody , CardFooter } from "@nextui-org/react" ;   


export default function ItineraryCity() {
    let{id} = useParams();
    const[cities, setCities]= useState();
    useEffect(()=>{
          axios.get(`http://localhost:7000/api/cities/${id}`)
          .then(response=>{setCities(response.data.city)})
          .catch(error=>{console.log(error)})
    },[]);
    return (
    <>
    <div className='flex justify-center'>
        <div className='min-h-[30vh] w-[60vw]'>
            <div className='min-h-[10vh] flex justify-center bg-cyan-300 my-2 rounded-lg p-2'>
                <h2>Name of the Itinerary</h2>
            </div>
            <div className='min-h-[15vh] flex justify-center bg-cyan-400 my-2 rounded-lg p-2'>
                <div className='w-[30vw] flex justify-center' > <h2> Price Duration </h2> </div>
                <div className='w-[30vw] flex justify-center' > <h2> User and Photo </h2></div>
                <div className='w-[30vw] flex justify-center' > 
                    <h2>Hashtags</h2> 
                    <div className="btn"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-red-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>      
                </div>
            </div>
            <div className='min-h-[15vh] bg-cyan-500 my-2 rounded-lg p-2'>
                <div className="collapse">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-xl font-medium text-center">
                        Click here to see the comments
                        {/* <button>Button View More</button> */}
                    </div>
                    <div className="collapse-content"> 
                    <UnderContruction/>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                            <img src="https://ocdn.eu/pulscms-transforms/1/QiUk9kuTURBXy84NjNmNTZlZi03YjkxLTRjOGMtODRmNS0xYWY5YzYzOGE5MGYuanBlZ5GVAs0BVMzTw8PeAAGhMAE" />
                            </div>
                        </div>
                        <div className="chat-header">Obi-Wan Kenobi</div>
                        <div className="chat-bubble chat-bubble-warning">It was said that you would, destroy the Sith, not join them.</div>
                        </div>
                        <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                            <img src="https://ocdn.eu/pulscms-transforms/1/QiUk9kuTURBXy84NjNmNTZlZi03YjkxLTRjOGMtODRmNS0xYWY5YzYzOGE5MGYuanBlZ5GVAs0BVMzTw8PeAAGhMAE" />
                            </div>
                        </div>
                        <div className="chat-header">Obi-Wan Kenobi</div>
                        <div className="chat-bubble chat-bubble-warning">It was you who would bring balance to the Force</div>
                        </div>
                        <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                            <img src="https://ocdn.eu/pulscms-transforms/1/QiUk9kuTURBXy84NjNmNTZlZi03YjkxLTRjOGMtODRmNS0xYWY5YzYzOGE5MGYuanBlZ5GVAs0BVMzTw8PeAAGhMAE" />
                            </div>
                        </div>
                        <div className="chat-header">Obi-Wan Kenobi</div>
                        <div className="chat-bubble chat-bubble-warning">Not leave it in Darkness</div>
                        </div>
                        <button>View Less</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
