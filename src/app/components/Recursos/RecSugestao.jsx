'use client'
import React from 'react'
import {BiAtom} from 'react-icons/bi';
import {SiCanva} from 'react-icons/si';
import {BsPencil} from 'react-icons/bs';
import {AiOutlineAreaChart} from 'react-icons/ai';

function RecSugestao() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
            
            <h2 className="mb-6 text-3xl font-bold py-8">
            Ferramentas
            
            </h2>
            <p className="mb-12 text-neutral-700 dark:text-neutral-300">
            Você pode encontrar todas essas informações e mais sugestões nas páginas 23 a 25 do 
              {" "}
  <a
                href="https://www.flipsnack.com/7E8DB9BBDC9/caderno-do-educador-s-timo-ano-parte-1/full-view.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Caderno do Educador.
              </a>{" "}
                       </p>

    
          </div>

          <div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-purple-100 text-primary dark:text-primary-400">
                    <a href="http://mindmeister.com" target="_blank" rel="noopener noreferrer">
                      <BiAtom className="h-6 w-6 text-gray-600" />
                    </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">Easelly</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                    Disponibiliza layouts gratuitos para serem modificados de acordo com a demanda do usuário. Também é possível alterar cor, texto, imagens, adicionar ícones etc. Após finalizar a edição, é possível baixar o arquivo e até mesmo compartilhar nas redes sociais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-purple-100 text-primary dark:text-primary-400">
                      <a href="https://www.easel.ly/" target="_blank" rel="noopener noreferrer">
                        <SiCanva className="h-6 w-6 text-gray-600" />
                      </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">Canva</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                    É uma plataforma de design gráfico que permite aos usuários criar gráficos de mídia social, apresentações, infográficos, pôsteres e outros conteúdos visuais. Está disponível online e em dispositivos móveis e integra milhões de imagens, fontes, modelos e ilustrações. Você pode conferir um tutorial em vídeo <a href="https://www.youtube.com/watch?v=3SgVQZWUWHM" target="_blank" className="text-blue-500 underline hover:text-blue-700">aqui</a>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-purple-100 text-primary dark:text-primary-400">
                      <a href="https://infogram.com/" target="_blank" rel="noopener noreferrer">
                        <BsPencil className="h-6 w-6 text-gray-600" />
                      </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">Infogram</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                    Possibilita criar infográficos a partir dos templates disponibilizados. O usuário pode realizar pequenas modificações, ou acrescentar novos elementos ao seu design. É uma ótima opção para fazer criações de forma mais rápida.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-purple-100 text-primary dark:text-primary-400">
                      <a href="https://pt.venngage.com/" target="_blank" rel="noopener noreferrer">
                        <AiOutlineAreaChart className="h-6 w-6 text-gray-600" />
                      </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">Venngage</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                    Com um simples cadastro, é possível criar infográficos e gráficos a partir dos modelos disponibilizados no site. Interessados podem utilizar a versão gratuita ou a paga para imagens mais elaboradas.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecSugestao