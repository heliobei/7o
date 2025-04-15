import React from 'react'
import Link from 'next/link';

function EtaButton() {
  return (
    <>
        <div className="flex items-center justify-center">
       
          <p className="p-6 text-center text-gray-700 text-lg">
            Vamos conhecer as atividades e conteúdos dessa etapa?</p>

            
        </div>
        <div className='flex items-center justify-center pb-8'>
            <Link href="/introducao">
              <button className='btn btn-primary text-white'>Introdução ao Site 1</button>
            </Link>
        </div>
    
    </>
  )
}

export default EtaButton