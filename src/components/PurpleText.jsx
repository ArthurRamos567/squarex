import React from 'react'

export default function PurpleText({smalltext, bigtext}) {
  return (
    <div className='flex flex-col justify-start my-5'>
        <span className='text-xl font-poppins text-white my-3'>{smalltext}</span>
        <span className='text-8xl font-poppins text-purple-800 font-bold'>{bigtext}</span>
    </div>
  )
}
