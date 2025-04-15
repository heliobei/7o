import React from 'react'
import ReactPlayer from 'react-player'

function MatSistemaMonetario() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto p-4 bg-primary'>
        <h1 className='font-bold text-3xl py-4 text-center text-white'>Volumes</h1>
        <p className='text-white py-4'>Como transformar um número da forma decimal para a forma fracionária e da forma fracionária para a decimal? Abaixo, no primeiro vídeo, temos diversos exemplos mostrando como fazer essa transformação. No segundo, a professora Gis traz um exemplo prático, medindo a capacidade de uma piscina real. Além de medir a piscina, ela traz um pouco de transformação de unidades de medida (de metros cúbicos para litros). Em seguida, resolve um exercício, medindo uma caixa.</p>
      </div>
      <div className="max-w-screen-xl mx-auto bg-primary pb-12 p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/V_WUNnRnn9g' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/6khvqiJFdX8' width="100%" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MatSistemaMonetario