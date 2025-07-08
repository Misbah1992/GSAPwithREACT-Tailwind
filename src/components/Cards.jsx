import React from "react";

const Cards = ({ date, image, description, hoveredCardIndex, idx }) => {
   const isThisCardHovered = hoveredCardIndex === idx;
   console.log(isThisCardHovered,">>>>>")

  return (

    <div className=" rounded-sm shadow p-8 h-72 flex flex-col justify-between relative " >
      <img
        src={image}
        alt=""
        className=" absolute"
        style={{ objectFit: "cover", top: 0, left: 0 }}
      />
      <div className={`w-full h-full absolute z-10 top-0 left-0 ${ isThisCardHovered ? "bg-blue-600/0" : "bg-blue-600/50"} transition-all duration-300`}></div>
      <h3 className={`text-2xl text-white ${isThisCardHovered? "text-opacity-0":""} font-bold z-10`}>{description}</h3>
      <div className={`${isThisCardHovered?'hidden':'w-1/3 bg-white h-1 z-10 rounded'}`}></div>
      <h3 className={`${isThisCardHovered?"text-opacity-0":"mt-2 text-white text-lg font-semibold z-10"}`}>{date}</h3>
      {isThisCardHovered?<button className="z-20 text-blue-500 bg-white text-md py-3 font-semibold rounded-sm">READ NOW</button>:""}
      <img src="../src/assets/VectorArrow.png" style={{ height: "0.75rem", width: "1rem" }} alt="" />
    </div>


  );
};

export default Cards;