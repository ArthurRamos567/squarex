import React from 'react'
import rd2 from "../assets/rd2.png"
import TextBox from './TextBox'
import glow from '../assets/glow.png'

export default function Hero() {
    return (
        <div className='h-200 w-full my-30'>

            <div className='flex flex-col w-full items-center justify-between relative'>
                <div className='font-poppins font-extralight text-4xl tracking-[80px] pl-20'>SQUAREX</div>
                <div className='font-poppins font-extrabold text-[250px]'>NEXUS</div>
                <div className='absolute flex justify-center'><img className='w-4/5 -mt-100' src={glow} /></div>
            </div>
            
            <div className="bg-[url('src/assets/cellphone.png')] bg-center h-350 bg-contain bg-no-repeat">
                <div className='bg-transparent h-50'></div>
                <div className="h-100 w-full bg-linear-to-t from-black to-black/0"></div>
                <div className='bg-black w-full h-100'></div>
                <div className='bg-black w-full h-auto flex justify-center relative'>
                    <img src={rd2} className='w-4/5 max-h-auto'></img>
                    <div className='absolute my-150'>
                        <div className=' flex justify-around my-20'>
                            <TextBox type="small" bigtext="1T" smalltext="1 Terabyte de armazenamento"></TextBox>
                            <TextBox type="big" bigtext="Super AMOLED" smalltext="Para garantir maior nitidez e aproximação das cores reais da tela "></TextBox>
                            <TextBox type="small" bigtext="24GB" smalltext="24G RAM  para multitarefas e jogos"></TextBox>
                        </div>
                        <div className=' flex justify-around'>
                            <TextBox type="small" bigtext="6000" smalltext="Bateria de 6K mAh de alta eficiência "></TextBox>
                            <TextBox type="big" bigtext="2 Coolers RGB" smalltext="Para máximo resfriamento do processador e do sistema interno"></TextBox>
                            <TextBox type="small" bigtext="120Hz" smalltext="Taxa máxima de atualização da tela"></TextBox>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black h-300 w-full'> </div>
        </div>
    )
}
