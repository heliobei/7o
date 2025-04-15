'use client'
import React from "react";
import {Card, CardBody, CardFooter, Image, Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Diagnóstico",
      img: "/images/diagnostico.png",
      popTitle: 'Diagnóstico',
      popContent: 'Compreende os itens: 1. Turma, 2. Duração do projeto, 3. Tema, 4. Perfil da Turma, 5. Fator de Mobilização do PPDA. ',
      
    },
    {
      title: "Conteúdos e Habilidades",
      img: "/images/conteudos.png",
      popTitle: 'Conteúdos e Habilidades',
      popContent: 'Compreende o item 6. Habilidades específicas da BNCC do PPDA.',
      
    },
    {
      title: "Planejamento",
      img: "/images/planejamento.png",
      popTitle: 'Planejamento',
      popContent: 'Compreende o item 9. Apresentação e finalização do PPDA.',
    },
    {
      title: "Atividades",
      img: "/images/atividades.png",
      popTitle: 'Atividades',
      popContent: 'Compreende o item 7. Atividades do PPDA.',
    },
    {
      title: "Avaliação",
      img: "/images/avaliacao.png",
      popTitle: 'Avaliação',
      popContent: 'Compreende o item 8. Avaliação do PPDA.',
    },
    {
      title: "Culminância",
      img: "/images/culminancia.png",
      popTitle: 'Culminância',
      popContent: 'Compreende o item 10. Culminância-Celebração do PPDA.',
    },
    
  ];

  return (
    <>
      
      <div className="container mx-auto ">
      <h1 className="font-bold text-4xl text-slate-700 py-4 text-center">Resumindo</h1>
      <p className="text-lg mt-4 py-4">
      Abaixo, temos um resumo organizando os itens do roteiro do PPDA às etapas de desenvolvimento de um projeto. Clique nas imagens para ler uma descrição da etapa escolhida:
      </p>
    </div>

  
      <div className="gap-2 grid grid-cols-2 md:grid-cols-6 sm:grid-cols-6 px-8 mx-8">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Popover placement="down">
                  <PopoverTrigger>
                  <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                  />
                  </PopoverTrigger>
                  <PopoverContent>
                      <div className="px-1 py-2">
                      <div className="text-lg font-bold text-center">{item.popTitle}</div>
                      <div className="text-md">{item.popContent}</div>
                      </div>
                  </PopoverContent>
              </Popover>
              </CardBody>
            <CardFooter className="text-small justify-center">
              <b>{item.title}</b>
              
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
    
  );
}
