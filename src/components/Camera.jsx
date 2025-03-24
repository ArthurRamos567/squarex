import React from 'react'
import AppearingText from './AppearingText'
import camera from '../assets/camera.png'
import photo from '../assets/photo.png'


export default function Camera() {
    return (
        <>
            <div className='w-full bg-[#0B0B0B]'>
                <AppearingText className="mt-100"
                    bigtext="Conheça a câmera dupla de 200MP do SquareX Nexus"
                    smalltext="Além de ser quipado com duas câmeras de 200MP e 50MP, possibilitando gravações em 4K 60FPS,
                     o Nexus possui coller duplo RGB 20K RPM, garantindo o resfriamento interno do celular"></AppearingText>

                <div className='w-full h=100 bg-[#0B0B0B]'><img src={camera} alt='Image of the cameras'></img></div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex justify-around items-center mx-50 my-10'>
                        <div className='text-5xl font-poppins text-white my-5 font-bold '>Com 200MP, o Nexus captura cada detalhe</div>
                        <div className='text-l font-poppins text-white '>Sua câmera dupla de 200MP, além de fazer gravações em 4K 60fps, consegue tirar
                            fotos em alta resolução, reconhecer pessoas e objetos, melhorar a tonalidade de cor,
                            realçar detalhes e reduzir ruído</div>
                    </div>
                    <img src={photo} alt='Landscape photo' className='w-3/4 h-max-auto pb-20'></img>
                </div>

            </div>

        </>

    )
}
