import React from 'react'
import ReactPlayer from 'react-player'

function RecDicas() {
  return (
    <div className='bg-primary'>
      <div className='max-w-screen-xl mx-auto p-4 bg-primary'>
        <h1 className='font-bold text-4xl py-4 text-center text-white'>Dicas para o trabalho utilizando as ferramentas Google</h1>
        <p className='text-white py-4'>Os dispositivos compartilháveis e as ferramentas colaborativas do Google ajudam os professores a preparar todos os alunos com formas novas e mais interessantes de aprender as habilidades necessárias.</p>
      </div>
      <div className="max-w-screen-xl mx-auto bg-primary p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/ja2VlTektGM' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/xO_ZOiFNoo4' width="100%" />
          </div>
        </div>
        
        </div>
        <div className="max-w-screen-xl mx-auto bg-primary pb-12 p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
            <div className="w-full lg:w-1/2">
            <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://www.youtube.com/live/TOBKy17e-C8?si=MUMwpwDSeevMENxt' width="100%" />
            </div>
            </div>
            <div className="w-full lg:w-1/2">
            <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/2Z2EsVT-uXc' width="100%" />
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default RecDicas