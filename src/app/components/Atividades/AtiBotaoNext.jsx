
import React from 'react'
import Link from 'next/link';
import Divider from '../Divider'

function AtiBotaoNext() {
  return (
    <>
        <div className=" text-gray-700 flex justify-center px-4 py-4 ">
            <p className='max-w-screen-xl'>
            Após acessar os exemplos e realizar as dinâmicas de diagnóstico com seus estudantes, registre seu PPDA em uma planilha.
            Assim, você poderá acessá-lo durante a execução do projeto e compartilhá-lo com seus estudantes por meio do Google Sala de Aula.
            Confira um exemplo de planilha <a href="seu-link-da-planilha-aqui" className="text-blue-500 hover:text-blue-700 underline">neste link</a>.
            Você pode copiá-la, preenchê-la e torná-la acessível aos estudantes.
            </p>
        </div>
        <Divider />
        <div className="flex justify-center">
        
            <div className="p-4 ">
                <p className='text-gray-700 p-2 font-normal'>Vamos conhecer os conteúdos de Matemática a serem trabalhados nesta etapa?</p>
                <div className="flex justify-center py-4">
                  <Link href="/matematica">
                  <button className="btn btn-primary text-white">Matemática e Educação Financeira</button>
                  </Link>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default AtiBotaoNext