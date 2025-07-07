import React, { useState } from "react";
import Cards from "./Cards";
import VectorArrow from "../images/VectorArrow.png"
import VectorArrow2 from "../images/VectorArrow2.png"
import image4 from "../images/image4.png"


const cardData = [
    {
        date: "2022.16.25",
        image: image4,
        description: "Lorem Ipsum Maak tu ma nusfiratu lorem Ipsum maak tu ma nusfiratu",
    },
    {
        date: "2022.16.25",
        image: image4,
        description: "Lorem Ipsum Maak tu ma nusfiratu lorem Ipsum maak tu ma nusfiratu",
    },
    {
        date: "2022.16.25",
        image: image4,
        description: "Lorem Ipsum Maak tu ma nusfiratu lorem Ipsum maak tu ma nusfiratu",
    },
    {
        date: "2022.16.25",
        image: image4,
        description: "Lorem Ipsum Maak tu ma nusfiratu lorem Ipsum maak tu ma nusfiratu",
    },
    {
        date: "2022.16.25",
        image: image4,
        description: "Lorem Ipsum Maak tu ma nusfiratu lorem Ipsum maak tu ma nusfiratu",
    },

];

const Carousel = () => {
      const [isHovered, setIsHovered] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3;

    const next = () => {
        if (currentIndex + visibleCards < cardData.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto">


            <div className="overflow-hidden">
                <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                >
                    {cardData.map((data, idx) => (
                        <div key={idx} className="w-1/3 flex-shrink-0 px-3">
                            <Cards {...data} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center mt-4 ">

                <div onClick={prev} style={{ height: "3rem", width: "3rem", border: "1px solid white" }} className="bg-blue-500 flex items-center justify-center mx-2 rounded-3xl">
                    <img src={VectorArrow2} alt="" />
                </div>
                <div onClick={next} style={{ height: "3rem", width: "3rem", border: "1px solid white" }} className=" bg-blue-500 flex items-center justify-center mx-2 rounded-3xl">
                    <img src={VectorArrow} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Carousel;
