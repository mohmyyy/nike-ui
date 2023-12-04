import React from "react";
import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <img
        src={imgURL}
        alt="customerName"
        className="object-cover w-[120px] h-[120px] rounded-full"
      />
      <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
      <div className="mt-3 flex justify-start items-center gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
