import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js";

// Create the Redux store and configure it with the counter reducer
export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
});