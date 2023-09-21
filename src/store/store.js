import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./reducers/userReducers.js"
import cityReducer from "./reducers/cityReducers.js"
import itineraryReducers from "./reducers/itineraryReducers.js";

export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        cityReducer: cityReducer,
        itineraryReducer : itineraryReducers
    },
})