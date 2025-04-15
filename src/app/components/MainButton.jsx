import React from 'react'
import Link from 'next/link';

function MainButton() {
  return (
    <>
        <div className="flex items-center justify-center">
       
            <p className="p-6 text-center text-gray-700 text-lg">
            Vamos conhecer as Etapas do Projeto?</p>

            
        </div>
        <div className='flex items-center justify-center pb-8'>
            <Link href="/etapas">
            <button className='btn btn-primary text-white'>Etapas do projeto</button>
            </Link>
        </div>
    
    </>
  )
}

export default MainButton