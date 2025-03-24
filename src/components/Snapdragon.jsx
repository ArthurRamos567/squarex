import React, { useState, useEffect, useRef } from 'react'
import circle from '../assets/circle.png'
import snapdragon from '../assets/snapdragonimg.png'
import TextBox from './TextBox'

const Snapdragon = () => {
    const [inView, setInView] = useState(false);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.01,
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
        <><div className='w-full h-250 bg-gradient-to-b from-[#0B0B0B]  to-black flex justify-around items-start' ref={imageContainerRef}>
            <div className={`w-2/5 relative flex items-center h-100 mt-30
                           `}>
                <img src={circle} className={`
                    w-150 absolute
                    object-cover transition-translate
                    duration-2000 
                    ease-in-out
                    ${inView ? 'rotate-0' : 'rotate-90'}

                    `} />

                <img src={snapdragon} className={`
                    w-80 absolute
                    object-cover transition
                    duration-2000 
                    ease-in-out
                    ${inView ? 'translate-x-1/2' : '-translate-x-200'}
                    `} />
            </div>
            <div className='w-2/5 flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-7xl font-poppins text-white font-bold my-10'>Snapdragon <br/>
                    X Elite equipado</div>
                    <div className='text-l font-poppins text-white'>O NEXUS é equipado com o Snapdragon X Elite, processador capaz de
                    emular softwares e jogos exclusivos de pc em um celular. Além de: </div>
                </div>
                <div className="flex justify-around mt-15 w-full"> 
                    <TextBox type="big" smalltext="Memory Type" bigtext="LPDDR5x"></TextBox>
                    <TextBox type="big" smalltext="NPU TOPS" bigtext="45"></TextBox>
                </div>
                <div className="flex justify-around mt-5 w-full"> 
                <TextBox type="big" smalltext="Transfer Rate" bigtext="500 MB/s"></TextBox>
                <TextBox type="big" smalltext="Core​ Frequency" bigtext="3.8 GHz"></TextBox>
                </div>
            </div>
        </div>
        </> 
    )

}
export default Snapdragon