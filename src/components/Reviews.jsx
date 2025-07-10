import { useState, useEffect } from 'react';

import image50 from "../images/image50.png"
import image51 from "../images/image51.png"
import image52 from "../images/image52.png"

const DATA = [
    {
        image: image50,
        review: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesepa qui officia des dio dignissimos ducimus qui blanditiis praesepa qui officia desdio dignissimos ducimus qui blanditiis praesepa qui officia deserunt mollitia animi, id est laborum et dolo",
        name: 'John Doe',
        role: 'Relation specialist'
    },
    {
        image: image51,
        review: "At vero odio dignissimos ducimus qui blanditiis praesepa qui officia des dio dignissimos ducimus qui blanditiis praesepa eos et accusamus et iusto  qui officia desdio dignissimos ducimus qui blanditiis praesepa qui officia deserunt mollitia animi, id est laborum et dolo",
        name: 'Gracie Ju',
        role: 'Project Manager'
    },
    {
        image: image52,
        review: "praesepa qui officia des dio dignissimos ducimus qui blanditiis praesepa qui At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis officia desdio dignissimos ducimus qui blanditiis praesepa qui officia deserunt mollitia animi, id est laborum et dolo",
        name: 'Robert Le',
        role: 'Senior Sales Lead'
    }
]

function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
        const [fade, setFade] = useState(true);


    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); 
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % DATA.length);
                setFade(true); 
            }, 1000); 
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const currentReview = DATA[currentIndex];
    return (
        <div className="flex items-center flex-col my-24">
            <h3 className="text-blue-500 font-semibold text-xl">What our customer says about us</h3>
            <h1 className="text-gray-800 font-medium text-4xl mb-12">Reviews</h1>
            <div className='border border-gray-200 w-4/6 flex items-center rounded-xl shadow-lg '>
            <div className={` w-full flex items-center justify-between p-12 transition-opacity duration-1000  ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <img alt="" src={currentReview.image} />
                <div className="ml-4">
                    <i className="text-md text-gray-600">{currentReview.review}</i>
                    <h4 className="text-xl text-blue-900 font-semibold mt-4">{currentReview.name}</h4>
                    <p className="text-md text-gray-800">{currentReview.role}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Reviews