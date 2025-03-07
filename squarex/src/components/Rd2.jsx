import React from 'react'
import TextBox from './TextBox'
import Rd2Image from './Rd2Image'



export default function Rd2() {
  return (
    <div className='bg-[#0B0B0B] w-full h-200 flex justify-center relative'>
    <Rd2Image></Rd2Image>
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
  )
}
