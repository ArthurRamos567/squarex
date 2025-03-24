import React from 'react'
import sidephone from '../assets/sidephone.png'
import AppearingText from './AppearingText'
import PurpleText from './PurpleText'

export default function Bateria() {
  return (
    <>
    <div className='w-full h-200 bg-[#0B0B0B] flex justify-around'>
        <div className='flex flex-col justify-center align-middle w-2/5 ml-30'>
            <AppearingText type="big" bigtext="Bateria para o dia todo" 
            smalltext="Através de sua alta eficiência energética, o Nexus 
            consegue armazenar bateria suficiente para seus jogos, filmes, músicas e podcasts"></AppearingText>
            <img src={sidephone} alt='Phone image' className='mt-30'></img>
        </div>
        <div className='flex flex-col justify-start items-start w-1/4 ml-30  h-150 my-25'>
            <PurpleText bigtext='8H' smalltext='Jogue por até'></PurpleText>
            <PurpleText bigtext='24H' smalltext='Assista vídeos por até'></PurpleText>
            <PurpleText bigtext='90H' smalltext='Ouça músicas por até'></PurpleText>
        </div>
    </div>
    </>
  )
}
