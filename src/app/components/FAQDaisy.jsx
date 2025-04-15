import {Accordion, AccordionItem} from "@nextui-org/react";

function FAQDaisy() {
  
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between p-8">
      <div className="md:w-1/2">
        {/* Conteúdo da primeira coluna */}
        <h1 className="text-5xl font-bold text-center text-slate-700">Materiais do Programa</h1>
        <p className="text-xl font-gray-800 text-center mt-4">Saiba mais clicando sobre o material.</p>
        {/* Adicione sua imagem aqui, se necessário */}
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        {/* Conteúdo da segunda coluna */}
        <Accordion variant='bordered'>
            <AccordionItem key="1" aria-label="Accordion 1" title="Livro do Estudante">
              <p className="text-gray-700">
              Traz conteúdos do currículo de Matemática ancorados em conceitos de Educação Financeira contextualizados em situações cotidianas vividas pelos estudantes. O professor de matemática também pode convidar educadores de outros componentes curriculares, como Português, Ciências, Geografia, entre outros, para trabalhar de forma interdisciplinar.
              </p><br></br>
              <p className="text-gray-700">
              O material possibilita ainda que o educador retome conteúdos prévios essenciais, para colaborar com processos de nivelamento, ampliação e sistematização de conhecimentos matemáticos previstos na nova BNCC e nas matrizes de referência do Sistema de Avaliação da Educação Básica (SAEB) e do PISA.
              </p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Caderno do Educador">
              <p className="text-gray-700">
              Contém orientações e ideias para que o educador permita aos jovens trabalhar os conceitos de Educação Financeira ancorados na Matemática e, com a realização de pequenos projetos, desenvolver parte das competências socioemocionais previstas na BNCC. A proposta deste caderno é a implementação do conteúdo pelo educador mediante o emprego de metodologias ativas, em uma sequência de quatro atividades significativas, de acordo com a divisão do Livro do Estudante.
              </p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Camada Digital">
              <p className="text-gray-700">
              Camada Digital é o ambiente online estruturado dentro do Google Classroom. Nele, você encontrará material de apoio referente à formação e à aplicação do programa. Destacamos que dentro deste material há quatro sites criados para a facilitação da aplicação do programa com sua turma. Neste ambiente, também é possível entrar em contato com o gestor responsável pelas formações.
              </p>
            </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQDaisy;




