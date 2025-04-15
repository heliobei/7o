import React from 'react'
import Link from 'next/link';

function MatButton() {
  return (
    <>
        <div className="flex items-center justify-center">
       
            <p className="p-6 text-center text-gray-700 text-lg">
            Vamos conhecer algumas ferramentas para facilitar a aplicação do projeto e tornar as aulas mais dinâmicas?</p>

            
        </div>
        <div className='flex items-center justify-center pb-8'>
            <Link href="/recursos">
              <button className='btn btn-primary text-white'>Recursos didáticos</button>
            </Link>
        </div>
    
    </>
  )
}

export default MatButton