import React, { useContext, useState } from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name: name,
        location: location,
        price_range: priceRange,
      });
      addRestaurants(response.data.data.restaurants);
      setName("");
      setLocation("");
      setPriceRange("Price Range");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mb-4">
      <form className="flex justify-center items-center" action="">
        <div className="flex flex-row m-2 justify-center items-center">
          <div className="col">
            <input
              className="form-control border m-12 p-2 rounded-md outline-none"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              className="form-control border m-12 p-2 rounded-md outline-none"
              type="text"
              placeholder="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2 border m-12 p-2 rounded-md outline-none"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-400 rounded-lg py-2 px-8 cursor-pointer "
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
