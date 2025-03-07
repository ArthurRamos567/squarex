import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className='h-30 shadow-xl shadow-gray-200/50 flex flex-row justify-center items-center
        '>
        <img src={logo} className='h-1/5 basis-1/8 ml-20 mr-10'></img>
        <nav className='basis-3/4 flex flex-row justify-around items-center mx-10'>
            <ul className='basis-3/4 w-full flex flex-row justify-around items-center'>
                <li className='font-poppins'>Performance</li>
                <li className='font-poppins'>Processador</li>
                <li className='font-poppins'>Câmeras</li>
                <li className='font-poppins'>Bateria</li>
                <li className='font-poppins'>Depoimentos</li>
                <li className='font-poppins'>Suporte</li>
            </ul>
            <ul className='basis-1/4 w-full flex flex-row justify-around items-center ml-10'>
                <li>Icon</li>
                <li>Icon</li>
            </ul>
        </nav>
        
    </header>
  )
}

export default Header