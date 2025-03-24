import React from 'react'
import BoxPergunta from './BoxPergunta'

export default function PerguntasFrequentes() {
  return (
    <>
    <div className='bg-[#0B0B0B] text-white flex justify-start flex-col items-center pb-20'>
    <span className='text-5xl font-poppins text-white my-15 font-bold text-start w-3/4 '>Perguntas Frequentes</span>
    <BoxPergunta pergunta='O Nexus possui variantes em outras cores?  ' resposta='Sim, o Nexus possui suas cores nas variantes preta, azul, vermelha e branca'></BoxPergunta>
    <BoxPergunta pergunta='A câmera consegue gravar vídeo em 4K 60FPS?  ' resposta='Sim, Sua câmera dupla de 200MP, além de fazer gravações em 4K 60fps, consegue tirar fotos em alta resolução, reconhecer pessoas e objetos, melhorar a tonalidade de cor, realçar detalhes e reduzir ruído'></BoxPergunta>
    <BoxPergunta pergunta='O Nexus consegue emular jogos pesados como Red Dead Redemption 2?' resposta='Sim, o Nexus possui poder computacional e gráfico para rodar todos os jogos e softwares de última geração.'></BoxPergunta>
    <BoxPergunta pergunta='Qual a finalidade dos dois coolers RGB do smartphone?' resposta='Os dois coolers RGB do nexus evitam que o celular superaqueça e assim consegue rodar suas funções sem perigo de superaquecimento'></BoxPergunta>
    <BoxPergunta pergunta='Quais são as proporções da tela do celular?' resposta='A tela possui 16 polegadas'></BoxPergunta>
    <BoxPergunta pergunta='Quanto custa um Nexus no Brasil?' resposta='O Nexus está custando atualmente 19.999,90R$'></BoxPergunta>
    <BoxPergunta pergunta='O Smartphone possui um sistema de segurança e de privacidade?' resposta='Sim, o celular está equipado com proteção cibernética de última geração para proteger seus dados e sua privacidade'></BoxPergunta>
    </div>

    </>
  )
}
