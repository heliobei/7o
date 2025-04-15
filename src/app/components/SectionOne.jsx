import React from 'react';

const SectionOne = () => {
  return (

    
      <section className=" py-8 mx-auto max-w-screen-xl text-gray-700 p-8 flex flex-col md:flex-row">
        {/* Div da seção (2/3 da tela em telas grandes) */}
        <div className="w-full md:w-2/3 md:p-8 flex flex-col justify-center items-center">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-gray-700 font-bold mb-6">
              O que é o site “Aprendendo a Lidar com Dinheiro: Educação Financeira”?
            </h2>
            <p className="text-lg mb-8">
              Como forma de auxiliar os professores a se apropriarem da proposta e fornecer ferramentas para facilitar o desenvolvimento do trabalho em sala de aula, a BEĨ Educação construiu quatro sites.
            </p>
            <p className="text-lg">
              Nos sites, você encontrará explicações referentes às atividades propostas no material físico, ao mesmo tempo que oferecemos ferramentas e estratégias para o seu desenvolvimento.
            </p>
          </div>
        </div>

        {/* Div da imagem (1/3 da tela em telas grandes) */}
        <div className="w-full my-auto items-center md:w-1/3 md:mx-8">
          {/* Coloque aqui a sua imagem */}
          <img src="/images/website.gif" alt="Descrição da imagem" className="w-full h-auto" />
        </div>
      </section>
    

    
  );
};

export default SectionOne;
