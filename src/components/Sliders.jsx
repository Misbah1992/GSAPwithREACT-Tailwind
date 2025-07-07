import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import sliderimg1 from "../images/sliderimg1.png"
import sliderimg2 from "../images/sliderimg2.png"
import sliderimg3 from "../images/sliderimg3.png"
import sliderimg4 from "../images/sliderimg4.png"
import sliderimg5 from "../images/sliderimg5.png"
import sliderimg6 from "../images/sliderimg6.png"
import sliderimg7 from "../images/sliderimg7.png"

const items = [sliderimg1, sliderimg2, sliderimg3, sliderimg4, sliderimg5,
    sliderimg6, sliderimg7
]


function Sliders() {
    const containerRef = useRef();
    const trackRef = useRef();
    const containerRef2 = useRef();
    const trackRef2 = useRef();
    const containerRef3 = useRef();
    const trackRef3 = useRef();


    useEffect(() => {
        const track = trackRef.current;
        const track2 = trackRef2.current;
        const track3 = trackRef3.current;

        // Duplicate items to avoid empty space during scroll
        const content = track.innerHTML;
        track.innerHTML = content + content;
        const content2 = track2.innerHTML;
        track.innerHTML = content2 + content2;
        const content3 = track2.innerHTML;
        track.innerHTML = content3 + content3;


        // Wait for DOM to paint updated content
        requestAnimationFrame(() => {
            const distance = track.scrollWidth / 2;
            const distance2 = track2.scrollWidth / 2;
            const distance3 = track3.scrollWidth / 2;

            gsap.to(track, {
                x: `-=${distance}`,
                duration: 10, // speed factor
                ease: 'none',
                repeat: -1,
            });
            gsap.from(track2, {
                x: `-=${distance2}`,
                duration: 10, // speed factor
                ease: 'none',
                repeat: -1,
            });
            gsap.to(track3, {
                x: `-=${distance3}`,
                duration: 10, // speed factor
                ease: 'none',
                repeat: -1,
            });
        });

        return () => gsap.killTweensOf(track, track2, track3);
    }, []);

    return (
        <div className="flex items-center justify-center my-24 space-x-4  h-72">
            <div className="w-1/3 h-full flex  flex-col  justify-between">
                <div>
                    <h3 className="text-blue-500 font-semibold text-xl">Ever-Expanding Scope</h3>
                    <h1 className="text-gray-800 font-medium text-4xl">We track <span className="text-blue-500">160+ carriers</span> for you</h1>
                </div>
                <p className="text-gray-600 text-sm font-medium">You can track more than 160 carriers in Shipsgo without searching one by one from different websites. Our goal is to expand our capacity until there is no individual or business left who cannot track their containers.</p>
                <button className="bg-blue-500 text-white px-10 py-3 rounded-xl w-48">Show more</button>
            </div>
            <div className="w-1/3">
                <div
                    ref={containerRef}
                    className="overflow-hidden whitespace-nowrap w-full "
                >
                    <div ref={trackRef} className="inline-block flex">
                        {items.map((item, idx) => (

                            <img src={item} alt="" />
                        ))}
                    </div>
                </div>
                <div
                    ref={containerRef2}
                    className="overflow-hidden whitespace-nowrap w-full ml-8 "
                >
                    <div ref={trackRef2} className="inline-block flex">
                        {items.map((item, idx) => (

                            <img src={item} alt="" />
                        ))}
                    </div>
                </div>
                <div
                    ref={containerRef3}
                    className="overflow-hidden whitespace-nowrap w-full  "
                >
                    <div ref={trackRef3} className="inline-block flex">
                        {items.map((item, idx) => (

                            <img src={item} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sliders