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