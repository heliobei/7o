import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";


function MainProposta() {
  return (
    <>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8">
            <div className="md:w-1/2">
                {/* Conteúdo da primeira coluna */}
                <h1 className="text-center pt-8 text-5xl font-bold  text-gray-600">A proposta de trabalho</h1>
                <p className=" mt-4 p-4 text-gray-800">A proposta deste programa é trabalhar os conteúdos de Matemática e Educação Financeira do Livro do Estudante por meio da Aprendizagem Baseada em Projetos em conjunto com outras Metodologias Ativas. Esses projetos são de curta de duração e, em conjunto com as metodologias ativas, foram pensados para desenvolver o protagonismo dos jovens. Pensando em criar uma experiência contextualizada e significativa para que os alunos construam o próprio conhecimento, o material está estruturado sobre a seguintes vertentes:</p>
                {/* Adicione sua imagem aqui, se necessário */}
            </div>
        
        <div className="p-4 md:w-1/2 mt-8 md:mt-0">
        {/* Conteúdo da segunda coluna */}
        <Accordion variant='bordered'>
            <AccordionItem key="1" aria-label="Accordion 1" title="Aprendizagem Baseada em Projetos">
              
              <p className="text-gray-700">
              É uma metodologia ativa que contribui para que os jovens se engajem em tarefas e/ou desafios a fim de resolver um problema ou desenvolver um projeto que também tenha relação com sua vida fora da sala de aula. Para desenvolver o projeto, eles precisam lidar com questões interdisciplinares, tomar decisões e agir como protagonistas, trabalhando em equipe.
              </p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Metodologias Ativas">
              <p className="text-gray-700">
              São uma série de técnicas, procedimentos e processos com a finalidade de auxiliar a aprendizagem dos estudantes. São ativas porque pressupõem a realização de atividades práticas que estimulam o protagonismo dos jovens. Por meio das metodologias ativas, são trabalhadas também competências e habilidades especialmente necessárias para o século 21, como o pensamento crítico e criativo e a consciência de que há várias maneiras de realizar uma tarefa ou superar um desafio.
              </p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Mapa Esquemático de Conteúdos de Matemática">
              <p className="text-gray-700">
              Clicando aqui, você pode acessar o mapa que mostra os conteúdos básicos de Matemática previstos na BNCC para o Ensino Básico. Interligamos as partes que apresentam interdependência e destacamos os tópicos que se referem à Educação Financeira. Os conteúdos de anos anteriores devem ser revisitados caso ainda suscitem dúvidas entre os educandos.
              </p>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 3" title="Quadro Geral">
            <p className="text-gray-700">
                Neste quadro, estão organizados os conteúdos de Matemática e Educação Financeira tratados no Livro do Estudante e as competências específicas da BNCC.{" "}
                <a
                    href="https://docs.google.com/spreadsheets/d/1DFJAnY_SmwUOelCjAFSarbtot7P0ehB0BptqqehtM30/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                >
                    Acesse aqui
                </a>
                .
            </p>
            </AccordionItem>
        </Accordion>
        </div>
      </div>
    </>
  )
}

export default MainProposta