import React from "react";
import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
      return (
    <div className="grid grid-cols-3 gap-4 place-items-stretch">
      {reviews.map((review) => {
        return (
          <div key= {review.id}  className="card text-blue-300 bg-blue-600 max-w-md rounded-lg px-3 py-2 overflow-hidden shadow-lg h-36">
            <div className="card-header flex justify-between border-b border-blue-700 pb-2">
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="card-body mt-2">
              <p className="card-text">
                {review.review}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
