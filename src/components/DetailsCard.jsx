/* import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import CityItinerary from "./CityItinerary.jsx";
import { get_city_by_id } from '../store/actions/cityActions.js';
import {getItinerariesByCityId} from '../store/actions/itineraryActions.js'
import { useDispatch, useSelector } from 'react-redux';
import NotFound from './NotFound.jsx';

 function DetailsCard() {
 
  const city = useSelector((store) => store.cityReducer.city);
  const itineraries = useSelector((store) => store.itineraryReducer.itineraries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_city_by_id(id));
  }, []);
  useEffect(() => {
    dispatch(getItinerariesByCityId(id));
}, [dispatch, id]);
  console.log(itineraries)
  return (
    <>
      <div
        className="bg-cover bg-center min-h-[80vh] text-black mt-12 mb-2"
        style={{ backgroundImage: `url('${city?.image}')` }}
      >
        <div className="grid justify-center mx-auto w-4/5 md:w-3/5 h-3/6 mt-18 border-double border border-teal-500 rounded-2xl bg-gray-100 bg-opacity-60">
          <div className="py-12 min-h-[50vh] flex flex-col justify-center rounded-3xl">
            <h2 className="text-center text-4xl py-1 ">{city?.city}</h2>
            <h3 className="text-center text-3xl py-1">{city?.country}</h3>
            <p className="px-4 md:px-52 text-center">{city?.detail}</p>
            <LinkRouter
              to="/cities"
              className="navbar-link text-black bg-gradient-to-r from-lime-500 via-lime-300 to-lime-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-700/70 font-medium rounded-lg text-sm absolute bottom-2 left-2 px-4 py-2 animate-bounce"
            >
              {" "}
              Go back{" "}
            </LinkRouter>
          </div>
          {
            city.itineraries?.length > 0
            ? city.itineraries?.map((itinerary) => (
                <CityItinerary key={itinerary._id} _id={itinerary._id}/>
                ))
                : <NotFound/>
            }
              {
                    itineraries?.length > 0
                    ? itineraries?.map((itinerary) => (
                            <CityItinerary key={itinerary._id} _id={itinerary._id} name={itinerary.name} image={itinerary.image} duration={itinerary.duration} price={itinerary.price} userName={itinerary.user?.name} userPhoto={itinerary.user?.photo}/>
                    ))
                    : <NotFound />
                } 
        </div>
      </div>
    </>
  );
}

export default DetailsCard; */



/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_city_by_id } from "../store/actions/cityActions.js";
import { getItinerariesByCityId } from "../store/actions/itineraryActions.js";
import NotFound from "../components/NotFound.jsx";
import { Link as Anchor } from "react-router-dom";

const detailsCard = () => {

    let { id } = useParams();

    const dispatch = useDispatch();
    
    const city = useSelector((store) => store.cityReducer.city);
    const itineraries = useSelector((store) => store.itineraryReducer.itineraries);
  console.log(itineraries)
    useEffect(() => {
        dispatch(get_city_by_id(id));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getItinerariesByCityId(id));
    }, [dispatch, id]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-purple-50 mt-12">

            <div className='w-full h-72 bg-cover bg-center bg-no-repeat flex justify-center items-center relative' style={{backgroundImage: `url(${city?.image})`}} >
                <div className='absolute w-full h-full bg-black opacity-20'></div>
                <div className='absolute w-full h-full flex justify-center items-center text-white text-center font-semibold text-5xl md:text-7xl lg:text-8xl text-shadow'>{city?.city}</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                {
                    itineraries?.length > 0
                    ? itineraries?.map((itinerary) => (
                        <div key={itinerary._id} className='flex flex-col border rounded-md border-black border-opacity-50 shadow-slate-400 hover:shadow-xl'>
                        <img className='w-full h-auto rounded-md p-1' src={itinerary.city.image} alt={itinerary.name} />
                        <h4 className='text-gray-600 my-1 mx-2'>{itinerary.name}</h4>
                        <Anchor className="bg-gradient-to-r from-purple-500 bg-purple-400 text-sm shadow-slate-400 shadow-sm text-center font-medium tracking-wider  text-white rounded-md hover:shadow-2xl hover:bg-purple-700 hover:from-purple-700 m-2 p-0.5" to={`/itineraries/${itinerary._id}`}>Details
                        </Anchor>
                    </div>
                    ))
                    : <NotFound />
                }
            </div>

         
        </div>
    )
}

export default detailsCard