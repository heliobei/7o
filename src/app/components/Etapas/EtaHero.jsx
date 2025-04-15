import React from 'react';

const EtaHero = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus mx-auto h-[40rem] flex items-center justify-center text-white">
      <div className='max-w-screen-xl'>
        <div className="text-center flex items-center justify-between px-12">
            <div>
            <h1 className=" text-5xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Etapas do Projeto
            </h1>
            <p className="text-lg text-white py-8">
            Este programa se fundamenta na aprendizagem baseada em projetos. Para desenvolver um projeto, é necessário definir as ações a serem executadas. Nesta seção, vamos apresentar uma ferramenta que auxiliará alunos e professores na organização e execução destas ações.
            </p>
            </div>
            <div className="hidden md:block">
                <img src="images/percentagem_woman.png" alt="Capa" className="px-8 w-[2000px]" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default EtaHero;