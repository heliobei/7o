import React from "react";

function AtiDiagnostico() {
  return (
    <div style={{ backgroundImage: 'url("/images/grafismo.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mt-12 max-w-screen-xl mx-auto md:px-6" >
        {/* Section: Design Block */}
        <section className="mb-8 ">
          <div className="flex flex-wrap ">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-7/12 lg:order-2 ">
              <div className="flex h-full items-center rounded-lg  p-6 text-center   lg:pl-12 lg:text-left">
                <div className="lg:pl-12">
                  <h2 className="font-bold text-2xl md:text-4xl sm:text-3xl text-slate-700 py-4">
                    Diagnósticos para o professor
                  </h2>
                  <p className="text-lg mb-6 pb-2 lg:pb-0">
                    Talvez você já conheça bem a sua turma. Mesmo assim, o diagnóstico aqui sugerido poderá trazer indicadores importantes para traçar o perfil dos estudantes com mais segurança.
                  </p>
                  <h2 className="mb-6 text-2xl md:text-3xl sm:text-2xl font-bold text-gray-700">
                    Diagnóstico 1: Perfil da turma
                  </h2>
                  <p className="text-lg mb-6 pb-2 lg:pb-0">
                    Determinar o perfil da turma é um momento precioso, no qual o educador mapeia os interesses, os talentos e os desejos dos estudantes. Trata-se de parte importante do processo de criação de atividades que despertem o engajamento desses jovens, assim como da seleção de materiais para subsidiar o trabalho docente. Quando se discute, em sala de aula, algo que tem relação com a realidade, o interesse do estudante pela aprendizagem aumenta e ela se torna mais significativa.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto itens-center lg:mb-0 lg:w-5/12 lg:order-1 z-200">
              <div className="flex lg:py-12 z-200">
                <img
                  src="./images/teachs_cool.jpg"
                  className=" items-center rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-200"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="container my-4 mx-auto md:px-6">
            <h2 className="mb-6 text-3xl font-bold text-gray-700 text-center">Você pode pesquisar questões como:</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li>Idade: qual a idade de cada um? Qual a média de idade dos jovens daquela turma?</li>
              <li>Atividades fora da escola: há jovens que trabalham? São empregados ou exercem algum tipo de atividade eventual remunerada? Ajudam em casa? Namoram? Praticam esportes? Estudam música, dançam ou se dedicam a algum outro tipo de atividade artística?</li>
              <li>Interesses: quais os interesses de cada um? Eles já pensaram em projetos de vida, têm sonhos que querem conquistar ou desafios que querem superar?</li>
              <li>Atitudes e valores: que valores norteiam as escolhas desses jovens? O que eles consideram importante na vida? Quem são as pessoas que admiram e por quê?</li>
            </ul>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>

    </div>
  );
}

export default AtiDiagnostico;
