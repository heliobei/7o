import React from 'react';

const Card = ({ title, content, icon }) => (
  <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
    <div className="relative p-8 space-y-4">
      {icon && <span role="img" aria-label="icon" className='text-3xl'>{icon}</span>}
      <div className="space-y-2">
        <h5 className="text-xl pb-4 font-semibold text-slate-500 transition">
          {title}
        </h5>
        <p className="text-sm text-gray-600">
          {content}
        </p>
      </div>
    </div>
  </div>
);

const OSite1 = () => {
  const cardsData = [
    { title: 'Parte do quadro geral', content: 'O que é consumo?', icon: '🌐' },
    { title: 'Capítulos do livro do estudante', content: 'O que é consumismo? Como não gastar mais do que deveríamos!', icon: '📚' },
    { title: 'Atividades do projeto', content: 'I - Diagnóstico. II - Conteúdos e habilidades. III - Planejamento.', icon: '📋' },
    { title: 'Matemática e educação financeira', content: 'Múltiplos e divisores de um número natural / Números racionais na representação fracionária e decimal / Fração e seus significados/ Problemas envolvendo medições / Cálculo de volume de blocos retangulares.', icon: '🧮' },
    { title: 'Recursos didáticos', content: 'Ferramentas Google / Infográfico.', icon: '🎮  '},
  ];

  return (
    <div className='bg-slate-100'>
      <div className='max-w-7xl mx-auto'>
        <div className="py-16 overflow-hidden">
          <div className="container m-auto px-6 space-y-8 text-slate-700 md:px-12">
            <div>
              <h2 className="mt-4 text-2xl text-slate-900 font-bold md:text-4xl">O Site 1</h2>
            </div>
            <p className='text-slate-700 pb-8'>Vamos ver quais <strong>Etapas do Projeto</strong>, temas de <strong>Matemática</strong> e <strong>ferramentas didáticas</strong> serão tratadas neste site:</p>
            <div className="pb-8 mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {cardsData.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} icon={card.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OSite1;