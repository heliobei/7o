import React from 'react'
import ReactPlayer from 'react-player'

function MatOperacoes() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto p-4'>
        <h1 className='font-bold text-3xl py-4 text-center text-gray-700'>Múltiplos e divisores de um número natural Múltiplos e divisores de um número natural</h1>
        <p className='text-gray-700 py-4'>Múltiplos e divisores de um número natural são um conceito simples, mas muito importante para diversas operações matemáticas. Em especial, para o sétimo ano, é essencial para o estudo das frações e números racionais como um todo, além de facilitar muito o cálculo mental. A seguir, temos um vídeo mais longo, com uma explicação mais detalhada sobre o assunto, e dois vídeos curtos que poderão servir como sistematização ou revisão. </p>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 pb-12 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
        <div className="w-full lg:w-1/3">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/MVxkuFoRSgc' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/yAPVfDIvCnw' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/lbihkALdiDs' width="100%" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MatOperacoes