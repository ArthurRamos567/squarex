import React from 'react'
import logo from '../assets/logo.png'
function Header() {
  return (
    <header className='h-30 shadow-xl shadow-gray-200/50 relative flex justify-center items-center'>
        <img src={logo} className='h-1/5 absolute inset-x-20'></img>
        <nav className='w-full mx-80'>
            <ul className=' w-full flex flex-row justify-around items-center'>
                <li className='font-poppins'>Performance</li>
                <li className='font-poppins'>Processador</li>
                <li className='font-poppins'>Câmeras</li>
                <li className='font-poppins'>Bateria</li>
                <li className='font-poppins'>Depoimentos</li>
                <li className='font-poppins'>Suporte</li>
            </ul>
        </nav>
        
    </header>
  )
}

export default Header