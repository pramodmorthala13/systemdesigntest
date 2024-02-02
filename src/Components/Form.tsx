import React, { FC, useRef } from "react";

import { addCar } from "../features/carData/carDataSlice";
import { useDispatch, useSelector } from "react-redux";

interface IFormProps {
  id?: number;
  brand?: string;
  onClose: () => void;
}

const Form: React.FC<IFormProps> = ({ id, brand, onClose }) => {
  const locationRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const noOfOwnersRef = useRef<HTMLInputElement>(null);
  const yearOfManufactureRef = useRef<HTMLInputElement>(null);
  const transmissionRef = useRef<HTMLInputElement>(null);
  const insuranceRef = useRef<HTMLInputElement>(null);
  const fitmentRef = useRef<HTMLInputElement>(null);
  const KmsRef = useRef<HTMLInputElement>(null);
  const PhotoRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const cars = useSelector((state: any) => state.car.cars);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const model = brand;
    const location = locationRef.current?.value;
    const color = colorRef.current?.value;
    const owner = noOfOwnersRef.current?.value;
    const yearOfManufacture = yearOfManufactureRef.current?.value;
    const Transmission = transmissionRef.current?.value;
    const insurance = insuranceRef.current?.value;
    const fitment = fitmentRef.current?.value;
    const kms = KmsRef.current?.value;
    const photo = PhotoRef.current?.value;
    let carId = cars.length;
   
    const carData = {
      carId,
      brand,
      location,
      color,
      owner,
      yearOfManufacture,
      Transmission,
      insurance,
      fitment,
      kms,
      photo,
    };

    dispatch(addCar({ car: carData }));
    onClose();
  };
  return (
    <>
      <form
        className="row g-3"
        style={{ width: "55%" }}
        onSubmit={handleSubmit}
      >
        <div className="col d-flex align-content-center justify-content-center">
          <label
            htmlFor="staticEmail2"
            className="align-self-center px-4 w-50 text-end w-50 "
          >
            Model
          </label>
          <input
            type="text"
            className="form-control-sm"
            id="model"
            readOnly
            disabled
            value={brand}
          />
        </div>
        <div className="col d-flex align-content-center justify-content-center">
          <label
            htmlFor="staticEmail2"
            className="align-self-center px-4 w-50 text-end w-50"
          >
            Location
          </label>
          <input
            type="text"
            className="form-control-sm"
            id="inputPassword2"
            placeholder="Location"
            ref={locationRef}
          />
        </div>
        <div className="col d-flex align-content-center justify-content-center">
          <label
            htmlFor="staticEmail2"
            className="align-self-center px-4 w-50 text-end w-50"
          >
            Color
          </label>
          <input
            type="text"
            className="form-control-sm"
            id="color"
            placeholder="Color"
            ref={colorRef}
          />
        </div>
        <div className="col d-flex align-content-center justify-content-center">
          <label
            htmlFor="staticEmail2"
            className="align-self-center px-4 w-50 text-end w-50 "
          >
            No of Owners
          </label>
          <input
            type="text"
            className="form-control-sm"
            id="NoofOwners"
            placeholder="No of Owners"
            ref={noOfOwnersRef}
          />
        </div>
        <div className="col d-flex align-content-center justify-content-center">
          <label
            htmlFor="staticEmail2"
            className="align-self-center px-4 w-50 text-end w-50"
          >
            Year of Manufacture
          </label>
          <input
            type="text"
            className="form-control-sm"
            id="ym"
            placeholder="Year of Manufacture"
            ref={yearOfManufactureRef}
          />
        </div>
        <div className="col d-flex align-content-center justify-content-center">
          <label
            htmlFor="staticEmail2"
            className="align-self-center px-4 w-50 text-end w-50"
          >
            Transmission
          </label>
          <input
            type="text"
            className="form-control-sm"
            id="Transmission"
            placeholder="Transmission"
            ref={transmissionRef}
          />
        </div>
        <div className="col d-flex align-content-center justify-content-center">
          <label
            htmlFor="staticEmail2"
            className="align-self-center px-4 w-50 text-end w-50"
          >
            Insurance Valid upto
          </label>
          <input
            type="text"
            className="form-control-sm"
            id="ivu"
            placeholder="Insurance Valid upto"
            ref={insuranceRef}
          />
        </div>
        <div className="col d-flex align-content-center justify-content-center">
          <label
            htmlFor="staticEmail2"
            className="align-self-center px-4 w-50 text-end w-50"
          >
            External Fitments
          </label>
          <input
            type="text"
            className="form-control-sm"
            id="fitments"
            placeholder="External Fitments"
            ref={fitmentRef}
          />
        </div>
        <div className="col d-flex align-content-center justify-content-center">
          <label
            htmlFor="staticEmail2"
            className="align-self-center px-4 w-50 text-end w-50"
          >
            Kms
          </label>
          <input
            type="text"
            className="form-control-sm"
            id="kms"
            placeholder="Kms"
            ref={KmsRef}
          />
        </div>
        <div className="col d-flex align-content-center justify-content-center">
          <label
            htmlFor="staticEmail2"
            className="align-self-center px-4 w-50 text-end w-75"
          >
            Photo
          </label>
          <input
            type="file"
            className="form-control-sm"
            id="photo"
            accept=".jpg,.png"
            placeholder="Photo"
            ref={PhotoRef}
          />
        </div>

        <div className="col-12 d-flex align-content-center justify-content-center pt-4">
          <button
            className="btn btn-primary btn-sm"
            style={{ width: "100px" }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
