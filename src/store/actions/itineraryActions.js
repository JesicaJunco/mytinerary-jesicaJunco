import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const get_itinerary_by_id = createAsyncThunk('get_itinerary_by_id', async (id) =>{
    try {
         const response = await axios.get(`http://localhost:7000/api/itineraries/${id}`)
        return {
            itinerary: response.data.itinerary
        }
    } catch (error) {
        return{ 
            itinerary: []
        }
    }
})
export const getItinerariesByCityId = createAsyncThunk('getItinerariesByCityId', async (id) => {
    try {
        const response = await axios.get(`http://localhost:7000/api/itineraries?cityId=${id}`)
        return {
            itineraries: response.data.itineraries
        }
       
    } catch (error) {
        console.log(error)
    }
    console.log(itineraries)
})