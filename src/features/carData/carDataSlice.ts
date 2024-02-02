import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import carsData1 from '../../jsonData.json'

const {carsData}=carsData1;

export interface Car {
  carId:number;
  brand?: string;
  location?: string;
  color?: string;
  owner?: string;
  yearOfManufacture?: string;
  Transmission?: string;
  insurance?: string;
  fitment?: string;
  kms?: string;
  photo?: string;
}

interface CarState {
  cars: Car[];
}

const initialState: CarState = {
  cars:[...carsData],
};

export const CarSlice = createSlice({
  name: "addCar",
  initialState,
  reducers: {
    addCar: (state, action: PayloadAction<{ car: Car }>) => {
      state.cars.push(
       action.payload.car
      );
      alert("Data Saved Successfully")
    },
  },
});

export default CarSlice.reducer;
export const { addCar } = CarSlice.actions;
