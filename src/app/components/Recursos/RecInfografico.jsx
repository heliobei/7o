import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";

function RecInfografico() {
  return (
    <>
        <section className="mx-auto ">
            <div className='flex justify-center items-center'>
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className=" text-gray-700 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-700 dark:text-white">
                    Estratégia Didática: Infográfico
                    </h2>
                    <p className="mb-4">
                    Infográfico é um tipo de linguagem que associa elementos verbais (frases curtas) a elementos não verbais (imagens, sons, gráficos etc.). O infográfico tem como principal função informar o leitor de maneira simples, rápida e objetiva. É uma forma de comunicação bastante atrativa, atual e utilizada pelas mídias digitais de jornais, redes sociais etc.
                    </p>
                    <p>
                    Na elaboração de um infográfico, é importante atentar à consonância entre os elementos verbais e não verbais, ou seja, texto, imagens e demais elementos devem se referir sempre ao mesmo assunto. Veja um exemplo:
                    </p>
                </div>
                <div className="lg:col-span-1 lg:justify-self-center lg:items-center mt-8">
                    <img className="w-full rounded-lg" src="images/infografico.jpg" alt="office content 1" />
                </div>
            </div>

            </div>
        
            
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-6">
            <Accordion variant='bordered'>
                <AccordionItem key="1" aria-label="Accordion 1" title="Exemplo de atividade">
                
                        <p className="mb-4">
                        Recomenda-se que, em dupla ou no máximo em trio, os estudantes criem um infográfico que explique a diferença entre consumo e consumismo.
                        </p>
                        <p className="mb-4">
Caso julgue necessário, revisite os capítulos 1 e 2 do Livro do Estudante.
                        </p>
                        <p className="mb-4">
                        Se sua turma não tiver acesso à internet, pode fazer o infográfico com lápis, papel e recorte e colagem de imagens, ou ainda com desenhos.
                        </p>
                        <p className="mb-4">
Após a construção dos infográficos pelos estudantes, os vários grupos devem apresentá-los para toda a turma.
                        </p>
                        <p className="mb-4">
                        O objetivo desta atividade é estimular nos estudantes a capacidade de criação, de articular elementos verbais e não verbais, o trabalho em grupo e a argumentação etc. 
                        </p>
                        <p className="mb-4">
Antes que os estudantes iniciem a atividade, certifique-se de que eles entenderam a estrutura de um infográfico. Chame a atenção para o fato de que eles devem sistematizar a diferença entre consumo e consumismo.
                        </p>
                        <p className="mb-4">
                        O exemplo {" "}
                            <a
                                href="https://drive.google.com/file/d/1f0E0Wja7BxIZOuqVtGAhl09ekpihpH2u/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                desta imagem
                            </a>{" "}
                             é um modelo de um infográfico que foi construído na plataforma Canva, que poderá servir de inspiração para você, educador. Trata-se somente de um modelo, e é possível explorar mais formatos. Peça aos estudantes que, além da definição, insiram no infográfico exemplos de práticas de consumo e consumismo.
                        </p>
                        <p className="mb-4">
                        No momento de socialização da atividade, faça perguntas aos estudantes sobre a construção do infográfico. Sistematize essa atividade a partir das falas deles.
                        </p>
                </AccordionItem>
                
            </Accordion>
            
                
                </div>
        </section>
        <div className="max-w-screen-lg mx-auto  pb-8 sm:pb-8 lg:pb-12">
            
            <div className="relative flex flex-wrap bg-primary rounded-lg px-4 py-6 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
                <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
                <p className='font-bold'>
                Você pode conferir mais exemplos aqui:{' '}
                    <a
                        href="https://porque.com.br/categoria/infograficos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline hover:text-blue-100"
                    >
                        Infográficos | Por Quê?
                    </a>
                </p>
                </div>

               
            
                
            </div>
            
            </div>
    </>
  )
}

export default RecInfografico