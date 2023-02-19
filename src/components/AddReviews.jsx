import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import { IoReturnUpBackSharp } from "react-icons/io5";

const AddReviews = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [name, setName] = useState("");
  const [rating, setRating] = useState("Rating");
  const [reviewText, setReviewText] = useState("");

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await RestaurantFinder.post(`/${id}/review`, {
        name,
        review: reviewText,
        rating,
      });
      setName("");
      setRating("Rating");
      setReviewText("");

      window.location.reload(); // Instantly reloads the page.
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row flex">
          <div className="form-group w-[70%] flex flex-col mt-4">
            <label htmlFor="name" className="text-left">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="name"
              className="form-control border outline-none mt-2 px-2 py-1 rounded-sm focus:border-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group flex flex-col mt-4">
            <label htmlFor="rating" className="text-left ml-4">
              Rating
            </label>
            <select
              id="rating"
              className="custom-select border outline-none w-96 ml-4 mt-2 px-2 py-1 rounded-sm focus:border-blue-400"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group flex flex-col mt-4">
          <label htmlFor="review" className="text-left">
            Review
          </label>
          <textarea
            id="review"
            placeholder="review"
            className="form-control border outline-none mt-2 px-2 py-1 rounded-sm focus:border-blue-400"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-start">
          <button
            onClick={handleReviewSubmit}
            type="submit"
            className="btn bg-blue-500 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 my-4 ml-0 text-blue-300 hover:text-blue-100 "
          >
            Submit
          </button>
        </div>
      </form>

      <button
        onClick={handleClick}
        className="btn border py-2 px-10 rounded-md bg-yellow-500 hover:bg-yellow-400 shadow-md cursor-pointer "
      >
        <IoReturnUpBackSharp className="text-4xl text-gray-50" />
      </button>
    </div>
  );
};

export default AddReviews;
