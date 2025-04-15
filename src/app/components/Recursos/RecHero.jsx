import React from 'react';

const RecHero = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus mx-auto h-[40rem] flex items-center justify-center text-white">
      <div className='max-w-screen-xl'>
        <div className="text-center flex items-center justify-between px-12">
            <div>
            <h1 className=" text-5xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Recursos Didáticos
            </h1>
            <p className="text-lg text-white py-8">
            Para auxiliá-los a criar, organizar, aplicar e corrigir atividades, apresentaremos as ferramentas Google. E, para tornar a aula mais interativa e auxiliar os alunos a desenvolverem autonomia sobre o conteúdo que aprendem, apresentaremos conceitos e ferramentas para construção de um Infográfico.
            </p>
            </div>
            <div className="hidden md:block">
                <img src="images/ilustra_sofa.png" alt="Capa" className="px-8 w-[2000px]" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default RecHero;