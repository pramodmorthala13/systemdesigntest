import  React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";

interface ICarsProps {}

const Cars: React.FunctionComponent<ICarsProps> = (props) => {
  const cars = useSelector((state: any) => state.car.cars);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTransmission, setSelectedTransmission] = useState<string>('');

  const uniqueLocations = Array.from(new Set(cars.map((item:any) => item.location)));
  const uniqueBrands = Array.from(new Set(cars.map((item:any) => item.brand)));
  const uniqueTransmission = Array.from(new Set(cars.map((item:any) => item.Transmission)));
  
  const filteredData = cars.filter((item:any) => {
    const locationCondition = selectedLocation ? item.location.toLowerCase() === selectedLocation.toLowerCase() : true;
    const brandCondition = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
    const transmissionCondition = selectedTransmission ? item.Transmission.toLowerCase() === selectedTransmission.toLowerCase() : true;

    return locationCondition && brandCondition && transmissionCondition;
  });



  return (
    <>
      <div className="row">
        <div className="col-2">
          <h3>Filters</h3>
          <div className="pb-4">
            <b>Location :</b>
            <select name="location" id="location"  value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}>
              <option value="">Select Location</option>
              {uniqueLocations?.map((location:any) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
            </select>
          </div>
          <div className="pb-4">
            <b>Brand :</b>
            {uniqueBrands.map((brand :any) => (
            <div key={brand} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={brand}
                id={`brandCheckbox-${brand}`}
                checked={selectedBrands.includes(brand)}
                onChange={() => {
                  const updatedBrands = selectedBrands.includes(brand)
                    ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
                    : [...selectedBrands, brand];

                  setSelectedBrands(updatedBrands);
                }}
              />
              <label className="form-check-label" htmlFor={`brandCheckbox-${brand}`}>
                {brand}
              </label>
            </div>
          ))}
           
          </div>
          <div className="pb-4">
            <b>Transmission :</b>
            {uniqueTransmission?.map((transmission:any) => (
            <div key={transmission} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="transmissionRadio"
                id={`transmissionRadio-${transmission}`}
                value={transmission}
                checked={selectedTransmission === transmission}
                onChange={() => setSelectedTransmission(transmission)}
              />
              <label className="form-check-label" htmlFor={`transmissionRadio-${transmission}`}>
                {transmission}
              </label>
            </div>
          ))}
          </div>
        </div>
        <div className="col">
          <div className="text-start">
            <h3>Result..</h3>
          </div>
          <div className="row">
            <div className="col d-flex  flex-wrap justify-content-center">
              {filteredData?.slice(0, 10).map((car: any) => {
                return (
                  <div
                    className="cars_card"
                    key={car.carId}
                    style={{ height: "350px", width: "230px" }}
                  >
                    <img
                      src="https://cars.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimages1.bonhams.com%2Fimage%3Fsrc%3DImages%2Flive%2F2022-02%2F10%2F94633196-127-1.jpg&w=2400&q=75"
                      className="brand_logo1"
                      alt={car.brand}
                    />
                    <div className="card-body">
                      <h5 className="card-title pb-3">{car.brand}</h5>
                      <b>Location : {car.location}</b><br />
                      <b>Manufacturing year : {car.yearOfManufacture}</b><br />
                      <b>Color : {car.color}</b> <br />
                      <b>Transmission : {car.Transmission}</b> <br />
                      <b>No Of Owners : {car.owner}</b>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
