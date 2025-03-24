import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Snapdragon from './components/Snapdragon'
import Camera from './components/Camera'
import Bateria from './components/Bateria'
import Depoimentos from './components/Depoimentos'
import PerguntasFrequentes from './components/PerguntasFrequentes'
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Snapdragon/>
      <Camera></Camera>
      <Bateria></Bateria>
      <Depoimentos></Depoimentos>
      <PerguntasFrequentes></PerguntasFrequentes>
      <Footer></Footer>
    </>
  )
}

export default App
