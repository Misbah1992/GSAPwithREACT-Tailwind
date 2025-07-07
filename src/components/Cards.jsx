import React from "react";

const Cards = ({ date, image, description }) => {
  return (
    <div className=" rounded-sm shadow p-8 h-72 flex flex-col justify-between relative " >
      <img
        src={image}
        alt=""
        className=" absolute"
        style={{objectFit:"cover",top:0,left:0}}
      />
      <div className="w-full h-full bg-blue-600/50 absolute z-10 top-0 left-0"></div>
      <h3 className="text-2xl text-white font-bold z-10">{description}</h3>
      <div className="w-1/3 bg-white h-1 z-10 rounded"></div>
       <h3 className="mt-2 text-white text-lg font-semibold z-10">{date}</h3>
      <img src="../src/assets/VectorArrow.png" style={{height:"0.75rem",width:"1rem"}} alt=""/>
    </div>
  );
};

export default Cards;