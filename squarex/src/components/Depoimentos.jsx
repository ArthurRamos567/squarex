import React from 'react'
import { useState } from 'react';
import SquareText from './SquareText'
import msphone from '../assets/msphone.png'


export default function Depoimentos() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <div className='w-full bg-[#0B0B0B] pb-30'>
        <div className='w-full flex justify-center pt-20'>
          <SquareText shadow={'none'} text='“The new era of smartphones”' author='Inverse'></SquareText>
          <SquareText shadow={'xl'} text='Cellphone of the Year Award 2024' author='Winner'></SquareText>
          <SquareText shadow={'none'} text='“An interactive work of art”' author='Microsoft CEO'></SquareText>
        </div>
        <div className='w-full mt-50 flex justify-center items-center'>
          <img src={msphone} alt='SquareX phone' className='w-2/7 mx-20'></img>
          <section  className='w-100 flex flex-col items-start mx-20'>
            <span className='text-5xl font-poppins text-white my-5 font-bold'>SquareX NEXUS</span>
            <span className='text-xl font-poppins text-white text-start mb-5'> O celular completo</span>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`border-1 border-white rounded-4xl py-2 px-5 ${isHover ? 'bg-white' : 'bg-[#0B0B0B]'} transition duration-200 `}>
              <a href="https://www.apple.com/br/iphone-16/"
                className={`text-l font-poppins ${isHover ? 'text-black' : 'text-white'} transition duration-200 text-center font-extralight`}
              >
                Compre Agora!</a></button>
          </section>
        </div>
      </div>
    </>
  )
}
