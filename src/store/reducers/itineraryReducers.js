import { createReducer } from "@reduxjs/toolkit";
import { getItineraryById, getItinerariesByCityId } from "../actions/itineraryActions.js";

const initialState = {
    itinerary: [],
    itineraries: []
}

const itineraryReducers = createReducer(initialState,
    (builder) => builder
        .addCase(getItineraryById.fulfilled,
            (state, action) => {
                return {
                    ...state,
                    itinerary: action.payload.itinerary.itinerary
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