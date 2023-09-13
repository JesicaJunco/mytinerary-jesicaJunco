import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import CityItinerary from "./CityItinerary.jsx";
import { get_city_by_id } from '../store/actions/cityActions.js';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from './NotFound.jsx';

 function DetailsCard() {
  let { id } = useParams();
  const city = useSelector((store) => store.cityReducer.city);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_city_by_id(id));
  }, []);
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
            <LinkRouter
              to="/cities"
              className="navbar-link text-black bg-gradient-to-r from-lime-500 via-lime-300 to-lime-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-700/70 font-medium rounded-lg text-sm absolute bottom-2 left-2 px-4 py-2 animate-bounce"
            >
              {" "}
              Go home{" "}
            </LinkRouter>
          </div>
          {
            city.itineraries?.length > 0
            ? city.itineraries?.map((itinerary) => (
                <CityItinerary key={itinerary._id} _id={itinerary._id}/>
                ))
                : <NotFound/>
              }
        </div>
      </div>
    </>
  );
}

export default DetailsCard;