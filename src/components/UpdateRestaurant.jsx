import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";

const UpdateRestaurant = (props) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      setName(response.data.data.restaurants.name);
      setLocation(response.data.data.restaurants.location);
      setPriceRange(response.data.data.restaurants.price_range);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await RestaurantFinder.put(`/${id}`, {
        name,
        location,
        price_range: priceRange,
      });
      setName("");
      setLocation("");
      setPriceRange("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="">
        <div className="form-group flex flex-col">
          <label htmlFor="name" className="text-left my-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mb-3 py-1 px-3 border-2 outline-none rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="location" className="text-left my-2">
            Location
          </label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="location"
            className="mb-3 py-1 px-3 border-2 outline-none rounded-md"
          />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="price_range" className="text-left my-2">
            Price Range
          </label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            type="number"
            id="price_range"
            className="mb-3 py-1 px-3 border-2 outline-none rounded-md"
            min="1"
            max="5"
          />
        </div>
        <div className="flex flex-1 bg-red-8000">
          <button
            type="submit"
            className="text-white bg-blue-500 rounded-md py-2 px-6 cursor-pointer hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
