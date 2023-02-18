import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import AddReviews from "../components/AddReviews";
import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantdetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, setSelectedRestaurant]);
  return (
    <div className="w-[90%] mx-auto">
      {selectedRestaurant && (
        <>
          <h1 className="text-6xl text-center font-light p-4">
            {selectedRestaurant && selectedRestaurant.restaurants.name}
          </h1>
          <div className="flex text-yellow-500 text-2xl justify-center items-center m-4">
            <StarRating
              rating={selectedRestaurant.restaurants.average_rating}
            />

            <span className="text-yellow-500">
              {selectedRestaurant.restaurants.count
                ? `(${selectedRestaurant.restaurants.count})`
                : `(0)`}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReviews />
        </>
      )}
    </div>
  );
};

export default RestaurantdetailPage;
