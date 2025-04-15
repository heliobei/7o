import React from 'react'
import ReactPlayer from 'react-player'

function MatSistemaNumeracao() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto p-4'>
        <h1 className='font-bold text-3xl py-4 text-center text-gray-700'>Frações e seus significados</h1>
        <p className='text-gray-700 py-4'>Existem diversas formas de representar um número racional. Essas diversas formas de escrever um mesmo número podem gerar certa confusão para os jovens estudantes. Aqui, temos um vídeo do Canal Futura que traz o conceito de números racionais nas suas diversas representações e outro onde o Professor Renato traz a definição de frações e diversos usos da ideia de fração.</p>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 pb-12 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/55sqKNqgK8s' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/AFmrdzgvIz0' width="100%" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MatSistemaNumeracao

