import React from 'react'
import ReactDOM from 'react-dom';
import Header from './components/header'
import Hero from './components/hero'
import Snapdragon from './components/Snapdragon.Jsx'
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
