/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PriceItinerary from "./PriceItinerary.jsx";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../components/NotFound.jsx";
import { getItineraryById } from "../store/actions/itineraryActions.js";
import IconHeart from "./svgs/IconHeart.jsx";
import GoBackButton from "./GoBackButton.jsx";

const ItineraryCity = () => {
    let { id } = useParams();
    const itinerary = useSelector((store) => store.itineraryReducer.itinerary);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItineraryById(id));
    }, [dispatch, id]);
    
    useEffect(() => {
        console.log("itinerary:", itinerary);
    }, [itinerary]);
   
    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-purple-50 mt-12">
        <div
            className="w-full h-80 bg-cover bg-center bg-no-repeat flex justify-center items-center"
            style={{ backgroundImage: `url(https://geomatas.com/wp-content/uploads/2021/07/roma.webp)` }}
        ></div>
        <div className="p-4">
            <h1 className="w-full text-blue-800 text-center font-bold text-2xl md:text-4xl lg:text-5xl mt-8 p-4">
                {itinerary.name}
            </h1>
        </div>
        <div className="h-8 flex items-center border-t border-s border-slate-400 py-6 px-4 mb-12">
            <img
                src={itinerary.user?.image}
                alt={itinerary.user?.name}
                className="h-8 rounded-full me-2"
            />
            <div className="flex flex-col">
                <span className="font-semibold mb-2">by {itinerary.user?.name}</span>
                <button className="w-16 flex justify-around items-center border rounded-full shadow-slate-400 border-slate-300 text-xs px-2 py-1">
                    <IconHeart />
                    Like
                </button>
            </div>
        </div>
        <div className="mb-12">
            <div className="w-full border rounded-2xl shadow bg-purple-50 shadow-purple-400 mx-auto py-8 px-16 text-center font-semibold md:text-xl lg:text-2xl">
                <span>
                    Price: {itinerary?.price}
                </span>
                <p>Duration: {itinerary?.duration}.</p>
            </div>
        </div>
        <div className="mb-12 mx-auto py-8 px-16">
            <h3 className="w-full text-center font-semibold text-xl md:text-3xl lg:text-4xl mb-4">
                Activities:{/* {itinerary.activities?.name} */}
            </h3>
            <ul className="list-disc font-semibold md:text-xl lg:text-2xl">
                { (
                    itinerary.activities?.map((activity, index) => (
                        <li key={index} className="sm:py-2">
                            {activity.name}
                        </li>
                    ))
                )}
            </ul>
        </div>
        <div className="border rounded-2xl shadow shadow-purple-400 mb-12 mx-auto py-8 px-16">
            <h3 className="w-full text-center font-semibold text-xl md:text-3xl lg:text-4xl mb-4">
            Coments: {/* Coments:{itinerary?.comments} */}
                { (
                    itinerary.itinerary?.map((comments, index) => (
                        <li key={index} className="sm:py-2">
                            {activity.comments}
                        </li>
                    ))
                )}
            </h3>
        </div>
        <button className="text-indigo-800 uppercase text-right font-bold my-auto"> View More</button>
        <div><GoBackButton /></div>
    </div>

    );          
};
export default ItineraryCity;
