import { createReducer } from "@reduxjs/toolkit";
import { get_itinerary_by_id, getItinerariesByCityId } from "../actions/itineraryActions.js";

const initialState = {
    itinerary: {},
}

const itineraryReducers = createReducer(initialState,
    (builder) => builder
        .addCase(get_itinerary_by_id.fulfilled,
            (state, action)=>{
                return{
                    ...state,
                    itinerary: action.payload.itinerary
                }
        })
        .addCase(getItinerariesByCityId.fulfilled, (state, action) => {
            return {
                ...state,
                itineraries: action.payload.itineraries
            }
        })
)
export default itineraryReducers;