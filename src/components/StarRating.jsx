import React from 'react'
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++){
        if (i <= rating) {
            stars.push(<BsStarFill key={i}/>);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<BsStarHalf key={i}/>);
        } else {
            stars.push(<BsStar key={i}/>);
        }
    }
    return (
        <div className="flex justify-center items-center text-yellow-500">{stars}</div>
  )
}

export default StarRating