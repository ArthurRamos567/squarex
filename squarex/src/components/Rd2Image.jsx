import React, { useState, useEffect, useRef } from 'react'
import rd2 from '../assets/rd2.png'
import rd2lit from '../assets/rd2lit.png'

const Rd2Image = () => {
    const [inView, setInView] = useState(false);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.5,
            }
        );

        if (imageContainerRef.current) {
            observer.observe(imageContainerRef.current);
        }

        return () => {
            if (imageContainerRef.current) {
                observer.unobserve(imageContainerRef.current);
            }
        };
    }, []);


    return (
        <>
            <div className="relative w-4/5 max-h-auto bg-[#0B0B0B]" ref={imageContainerRef}>
                <img src={rd2} alt="Transition Image" className={`absolute object-cover`} />
                <img
                    src={rd2lit} alt="Transition Image"
                    className={`absolute object-cover transition-opacity duration-2000 ${inView ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
        </>
    );
};

export default Rd2Image;
