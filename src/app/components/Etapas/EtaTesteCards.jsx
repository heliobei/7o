import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MdOutlineGroups } from 'react-icons/md';
import { ImStatsBars } from "react-icons/im";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdVideogameAsset } from "react-icons/md";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdOutlineSportsHandball } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { PiFileMagnifyingGlassFill } from "react-icons/pi";
import { FaHandsClapping } from "react-icons/fa6";
import { MdOutlineMovieFilter } from "react-icons/md";

function EtaTesteCards() {
  return (
    <>
        <div className="container mx-auto max-w-screen-xl py-8">
            <h1 className="font-bold text-2xl md:text-4xl sm:text-2xl text-gray-700 py-4 text-center">Pequeno Projeto Didático Ativo (PPDA)</h1>
            <p className="mt-4 p-4 text-slate-900">
                Existem diversas maneiras de se trabalhar com projetos. Para a aplicação deste programa, sugerimos o desenvolvimento de Pequenos Projetos Didáticos Ativos (PPDA), que são projetos de curta duração (mensal, bimestral ou trimestral), cuja função é mobilizar e engajar os estudantes a solucionar um problema relacionado ao tema que estão estudando. Ao fim de cada projeto, os estudantes devem apresentar os resultados para a comunidade escolar.
            </p>
      </div>

        <div className='py-8'>
            <div className="grid grid-cols-1 mx-auto max-w-5xl md:grid-cols-3">
                
                <div className='bg-primary-focus p-4 rounded-lg shadow-lg m-2 flex flex-col justify-center items-center'>
                <Image src="/images/7o.png" 
                            alt={'Capa do livro do estudante'} 
                            width={200} 
                            height={200}
                            style={{
                                margin: "auto",
                            }} />
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <MdOutlineGroups className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-500'>Turma/Série</h2>
                    <p className='text-sm text-slate-700 text-left'>Especifique em que turma será aplicado o roteiro.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <ImStatsBars className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-500'>Perfil da Turma</h2>
                    <p className='text-sm text-slate-700 text-left'>Utilize as ferramentas de diagnóstico para compreender melhor quem são seus estudantes e, assim, adequar as atividades propostas.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <MdOutlineAccessTime className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-500'>Duração do Projeto</h2>
                    <p className='text-sm text-slate-700 text-left'>Especifique o tempo de duração do projeto.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <MdVideogameAsset className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-500'>Tema</h2>
                    <p className='text-sm text-slate-700 text-left'>O tema deve ser de interesse dos jovens, de preferência escolhido com a colaboração deles.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <HiOutlineWrenchScrewdriver className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-500'>Habilidades Específicas da BNCC</h2>
                    <p className='text-sm text-slate-700 text-left'>Escola quais habilidades trabalhar. Para cada uma delas, é necessário definir quais conteúdos conceituais, procedimentais e atitudinais serão desenvolvidos.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <MdOutlineSportsHandball className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-500'>Atividades</h2>
                    <p className='text-sm text-slate-700 text-left'>Defina ações a serem desenvolvidas em cada aula para trabalhar os conteúdos previstos e alcançar os objetivos desejados. Ao planejar atividades descreva as estratégias para a aula, defina habilidades a serem trabalhadas, determine o conteúdo que será utilizado e como as habilidades serão desenvolvidas.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <FaHandshake  className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-500'>Fator de Mobilização</h2>
                    <p className='text-sm text-slate-700 text-left'>O fator de mobilização é um desafio proposto aos estudantes com base em suas motivações e interesses. Cada capítulo do livro do estudante possui uma atividade ou desafio que deve ser elaborado e executado pelos estudantes em diferentes PPDAs.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <PiFileMagnifyingGlassFill className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-500'>Avaliação de Percurso e Resultados</h2>
                    <p className='text-sm text-slate-700 text-left'>A cada atividade ou bloco de atividades, programe-se e dedique um tempo específico para assegurar-se de que os objetivos do PPDA estão sendo atingidos.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <MdOutlineMovieFilter  className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-500'>Apresentação e Finalização</h2>
                    <p className='text-sm text-slate-700 text-left'>Com o PPDA estruturado, apresente-o a turma. Nesse momento, ele pode ser ajustado e finalizado com a ajuda dos jovens, para que se iniciem as atividades, conforme planejado.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <FaHandsClapping className="text-4xl text-primary" />
                    </div>
                    <h2 className='font-semibold text-xl pt-2 pb-4 text-left text-slate-500'>Culminância</h2>
                    <p className='text-sm text-slate-700 text-left'>É o momento onde os resultados dos projetos são apresentados a um público a ser escolhido, que pode contemplar outros educadores, outras turmas, a comunidade do bairro, entre outros.</p>
                </div>


                <div className='bg-primary p-4 rounded-lg shadow-xl m-2 flex flex-col justify-center items-center'>
                <Image src="/images/7o.png" 
                            alt={'Capa do livro do estudante'} 
                            width={200} 
                            height={200}
                            style={{
                                margin: "auto",
                            }} />
                </div>
            </div>
        </div>
    </>
  )
}

export default EtaTesteCards