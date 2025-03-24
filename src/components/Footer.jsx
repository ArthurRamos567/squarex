import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className=' border-t-1 border-white bg-[#0B0B0B] flex justify-center'>
    <div className='h-40 w-2/3 flex justify-between items-center  '>
        <div className='text-l font-poppins text-white text-center'><a href="https://api.whatsapp.com/send?phone=5548996079746"><FontAwesomeIcon icon={faPhone} className='mr-4'></FontAwesomeIcon>Entre em contato pelo meu Whatsapp</a>
        </div>
        <div className='text-l font-poppins text-white text-center'><a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=arthramos567@gmail.com&tf=1
"><FontAwesomeIcon icon={faEnvelope} className='mr-4'></FontAwesomeIcon>arthramos567@gmail.com</a></div>
        {/* <div className='text-l font-poppins text-white text-center'><a href='https://www.linkedin.com/in/arthurramos567/'><FontAwesomeIcon icon={faLinkedin} className='mr-4'></FontAwesomeIcon>Linkedin</a></div> */}
    </div>
    </footer>
  )
}
