import React from 'react';

const IntroHero = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus mx-auto h-[40rem] flex items-center justify-center text-white">
      <div className='max-w-screen-xl'>
        <div className="text-center flex items-center justify-between px-12">
            <div>
            <h1 className=" text-5xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Introdução ao Site 1
            </h1>
            <p className="text-lg text-white py-8">
            Nesta seção, veremos quais etapas do projeto serão aprofundadas e quais temas de Matemática e Educação Financeira serão abordados.
            </p>
            </div>
            <div className="hidden md:block">
                <img src="images/ilustra_meda.png" alt="Capa" className="px-8 w-full" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default IntroHero;