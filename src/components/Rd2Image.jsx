import React, { useState, useEffect, useRef } from 'react'
import rd2 from '../assets/rd2.png'
import rd2lit from '../assets/rd2lit.png'
import useIsInView from './useIsInView';
import Rd2 from './RD2';

const Rd2Image = () => {
    const imageContainerRef = useRef(null);
    const inView = useIsInView(imageContainerRef)
    


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
