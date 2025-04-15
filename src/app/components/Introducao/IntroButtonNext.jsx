import React from 'react'
import Link from 'next/link';

function IntroButtonNext() {
  return (
    <>
        <div className="flex items-center justify-center">
       
          <p className="p-6 text-center text-gray-700 text-lg">
            Prontos para nos aprofundarmos nas atividades do projeto?</p>

            
        </div>
        <div className='flex items-center justify-center pb-8'>
          <Link href="/atividades">
            <button className='btn btn-primary text-white'>Atividades do Projeto</button>
          </Link>
            
        </div>
    
    </>
  )
}

export default IntroButtonNext