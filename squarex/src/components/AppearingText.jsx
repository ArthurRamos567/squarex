import React, { useState, useEffect, useRef } from 'react'
import TextBox from './TextBox';

const AppearingText = ({ bigtext, smalltext }) => {
    const [inView, setInView] = useState(false);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.3,
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
            <div className="relative w-full bg-[#0B0B0B] flex justify-center items-center" ref={imageContainerRef}>

                <div
                    className={`
            absolute object-cover transition
            duration-2000 
            ${inView ? 'opacity-100' : 'opacity-0'}
            ${inView ? 'translate-y-0' : 'translate-y-100'}`}
                >
                    <TextBox type="big" bigtext={bigtext}
                        smalltext={smalltext}></TextBox>
                </div>
            </div>
        </>
    );
};

export default AppearingText;
