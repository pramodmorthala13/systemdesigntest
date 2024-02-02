import { configureStore } from "@reduxjs/toolkit";
import { CarSlice } from "../features/carData/carDataSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    car: CarSlice.reducer,
  },
});


