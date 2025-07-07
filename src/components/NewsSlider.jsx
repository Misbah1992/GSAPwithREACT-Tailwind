import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const items = ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesepa qui officia deserunt mollitia animi, id est laborum et dolo"]

export default function NewsTicker() {
  const containerRef = useRef();
  const trackRef = useRef();

  useEffect(() => {
    const track = trackRef.current;

    // Duplicate items to avoid empty space during scroll
    const content = track.innerHTML;
    track.innerHTML = content + content;
   

    // Wait for DOM to paint updated content
    requestAnimationFrame(() => {
      const distance = track.scrollWidth / 2;
      
      gsap.to(track, {
        x: `-=${distance}`,
        duration: distance / 50, // speed factor
        ease: 'none',
        repeat: -1,
      });
    });

    return () => gsap.killTweensOf(track);
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap w-full my-4 py-4 border border-gray-300"
    >
      <div ref={trackRef} className="inline-block">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="inline-block px-4 py-2 text-sm text-gray-800"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
