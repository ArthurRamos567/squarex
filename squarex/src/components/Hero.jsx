import React from 'react'
import Rd2 from './RD2'
import glow from '../assets/glow.png'
import AppearingText from './AppearingText'

export default function Hero() {
    return (
        <div className='w-full mt-30'>

            <div className='flex flex-col w-full items-center justify-between relative'>
                <div className='font-poppins font-extralight text-4xl tracking-[80px] pl-20'>SQUAREX</div>
                <div className='font-poppins font-bold text-[220px]'>NEXUS</div>
                <div className='absolute flex justify-center'><img className='w-4/5 -mt-100' src={glow} /></div>
            </div>
            
            <div className="bg-[url('src/assets/cellphone.png')] bg-center h-350 bg-contain bg-no-repeat">
                <div className='bg-transparent h-50'></div>
                <div className="h-100 w-full bg-linear-to-t from-[#0B0B0B] to-black/0"></div>
                <div className='bg-[#0B0B0B] h-100 flex justify-center'>
                    <AppearingText bigtext="O único celular capaz de emular jogos e softwares de PC"
                                    smalltext="O SquareX Nexus é o único celular disponível no mercado capaz de emular softwares como
                                    Photoshop, Illustrator e Premiere Pro bem como jogos como Red Dead Redemption II,
                                    CS2 e Forza Horizon 5"></AppearingText>
                    <div>A</div>
                </div>
                <Rd2></Rd2>
            </div>
            
            <div className='bg-[#0B0B0B] h-200 w-full'> </div>
        </div>
    )
}
