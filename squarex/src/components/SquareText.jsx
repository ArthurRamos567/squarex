// SquareText.js
import React from 'react';
import classNames from 'classnames';

export default function SquareText({shadow, text, author}) {
  return (
    <div className={classNames('bg-[#1C1C1C] border-1 border-white rounded-4xl h-70 w-70 mx-20 shadow-purple-800 flex flex-col justify-between items-center', {
      [`shadow-${shadow}`]: shadow
    })}>
      <div className='text-xl font-poppins text-white text-center mt-20 mx-10 font-light'>{text}</div>
      <div className='text-xl font-poppins text-white text-center font-bold mb-10 mx-10'>{author}</div>
    </div>
  )
}
