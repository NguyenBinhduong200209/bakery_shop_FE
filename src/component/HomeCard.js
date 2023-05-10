import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price,loading,id }) => {
  return (
    <div className="bg-pink-300 shadow-md p-2 rounded-lg min-w-[200px] max-w-[200px]">
      {name ? (
        <>
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:'0',behavior:'smooth'})}>
          <div className="w-full min-h-[150px] flex flex-col justify-center">
            <img src={image} className="h-40 w-full rounded-lg" />
          </div>
          <h3 className="font-semibold text-slate-700 text-center capitalize text-lg ">
            {name}
          </h3>
          <p className="text-center text-slate-500 font-medium">{category}</p>
          <p className="text-center font-bold">
            <span>{price}</span>
            <span className="text-red-500 font-medium">VND</span>
          </p>
          </Link>
        </>
      ):
       (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
       )
      }
    </div>
  );
};

export default HomeCard;