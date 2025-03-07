import React from 'react'

export default function TextBox({type, bigtext, smalltext}) {
  switch (type){
    case "small":
        return (
            <div className='w-40 flex flex-col items-center'>
            <div className='text-7xl font-poppins text-white my-5 font-bold'>{bigtext}</div>
            <div className='text-xl font-poppins text-white text-center'>{smalltext}</div>
            </div>
          )
    case "big":
        return (
            <div className='w-200 flex flex-col items-center'>
            <div className='text-7xl font-poppins text-white my-5 font-bold'>{bigtext}</div>
            <div className='text-xl font-poppins text-white text-center'>{smalltext}</div>
            </div>
          )
        
  }


  

}
