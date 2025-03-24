import React, { useCallback } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown  } from '@fortawesome/free-solid-svg-icons'

export default function BoxPergunta({pergunta, resposta}) {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = useCallback (() => {
        setIsOpen(isOpen => !isOpen)
    }, [setIsOpen])
        return (
                <>
                <div className='w-3/4 h-25 color-[0B0B0B] border-y-1 border-white flex justify-between items-center'>
                    <span className=' text-2xl font-light font-poppins text-white text-start'>{pergunta}</span>
                    <button className='' onClick={handleClick}>{isOpen ? <FontAwesomeIcon icon={faAngleUp} className='text-3xl' /> : <FontAwesomeIcon icon={faAngleDown} className='text-3xl' />}</button>
                </div>
               
                {isOpen && (
                    <>
                     <div className='w-3/4 py-15 h-20  color-[0B0B0B] border-b-1 border-white flex justify-start items-center mx-5 text-xl font-light font-poppins text-white text-start'>
                     {resposta}
                     </div>
                     </>
                )}
            </>
        )
    }

