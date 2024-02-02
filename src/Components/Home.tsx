import React, { FC, useState } from "react";
import carBandsData from "../jsonData.json";
import Form from "./Form";
import { NavLink } from "react-router-dom";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const { carBrands } = carBandsData;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeCard, setActiveCard] = useState<{
    id: number;
    brand: string;
  } | null>(null);
  const handleCardClick = (id: number, brand: string) => {
    console.log("hi")
    setActiveCard({ id, brand });
    setIsActive(true);
  };
  const handleCloseForm = () => {
    setActiveCard(null);
  };
  return (
    <>
    <i>For Page 2 Please click on <mark>"READ MORE"</mark>  card</i>
      <div className="d-flex flex-wrap align-content-center">
        {carBrands?.map((car) => {
          return (
            <>
            {car.id===12?
            <NavLink to="cars">
            <div
              className="card"
              key={car.id}
              >
              <img
                src={car.brand_logo}
                className="brand_logo"
                style={{height:'100%'}}
                alt={car.car_brand}
              />
            </div>
            </NavLink>:
            <div
              className="card"
              key={car.id}
              onClick={() => handleCardClick(car.id, car.car_brand)}
            >
              <img
                src={car.brand_logo}
                className="brand_logo"
                alt={car.car_brand}
              />
              <div className="card-body">
                <h5 className="card-title">{car.car_brand}</h5>
              </div>
            </div>
          }
          </>
          );
        })}
      </div>
      <div className="py-5">
        {isActive ? (
          <Form
            id={activeCard?.id}
            brand={activeCard?.brand}
            onClose={handleCloseForm}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
