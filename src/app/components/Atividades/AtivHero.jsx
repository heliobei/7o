import React from 'react';

const AtivHero = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus mx-auto h-[40rem] flex items-center justify-center text-white">
      <div className='max-w-screen-xl'>
        <div className="text-center flex items-center justify-between px-12">
            <div>
            <h1 className=" text-5xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Atividades do Projeto: Diagnóstico
            </h1>
            <p className="text-lg text-white py-8">
            Ao conhecer a realidade e as potencialidades dos estudantes, o educador tem ideia dos desafios a serem superados em cada etapa. Para isso, propomos dois tipos de diagnóstico: um de perfil da turma e um de levantamento de conhecimentos prévios de Matemática e Educação Financeira. Com o diagnóstico em mãos, o professor inicia o planejamento do Pequeno Projeto Didático Ativo ou PPDA.
            </p>
            </div>
            <div className="hidden md:block">
                <img src="images/ilustra_mercado.png" alt="Capa" className="px-8 w-[2000px]" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AtivHero;