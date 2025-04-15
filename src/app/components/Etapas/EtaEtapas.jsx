'use client'
import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { motion } from 'framer-motion'



const cardData = [
  {
    title: "1 - Diagnóstico",
    description:
      "Traçar o perfil da turma como um todo, destacando suas qualidades e seus potenciais, e identificando dificuldades e limites que devem ser superados.",
  },
  {
    title: "2 - Conteúdos e Habilidades",
    description:
      "Descrever os principais conteúdos de matemática e habilidades da BNCC a serem trabalhados.",
  },
  {
    title: "3 - Planejamento",
    description:
      "Planejar o PPDA escolhendo estratégias e ferramentas que incitem a participação dos estudantes.",
  },
  {
    title: "4 - Atividades",
    description: "Executar as atividades planejadas.",
  },
  {
    title: "5 - Avaliação",
    description:
      "Avaliar os resultados, verificando até que ponto os objetivos propostos foram alcançados.",
  },
  {
    title: "6 - Conclusão",
    description:
      "Planejar a Culminância das conquistas ao fim do programa, comunicando os resultados.",
  },
];

export default function EtaEtapas() {
  return (
    <>
    <div className="container mx-auto max-w-7xl pt-8">
      <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl text-slate-700 p-8 text-center ">Etapas do desenvolvimento de um projeto</h1>
      <p className="text-lg mt-4 py-4">
      Um projeto nada mais é do que um plano onde definimos e organizamos ações a serem executadas visando atingirmos a um objetivo. Para elencar ações a serem desenvolvidas, podemos dividir as etapas de aplicação do projeto. Estas etapas facilitam a visualização do que precisa ser feito, consequentemente auxiliando na definição de ações. Para o desenvolvimento de nosso PPDA, sugerimos a adoção de seis etapas:
      </p>
    </div>
    <motion.div className="container mx-auto flex flex-wrap justify-center text-center py-4"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      >
      {cardData.map((card, index) => (
        <Card key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-1 my-1 text-center">
              <CardHeader className="flex gap-3 text-center">
                
                <div className="flex flex-col">
                  <p className=" text-md text-primary font-bold ">{card.title}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{card.description}</p>
              </CardBody>
            </Card>
          ))}
    </motion.div>
    
    </>
  );
}
