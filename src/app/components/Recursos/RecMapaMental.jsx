import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";
import "./custom.css"

function RecMapaMental() {
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <h1 className="text-4xl text-gray-700 font-bold py-4">Estratégia Didática: Mapa Mental</h1>
      <p className="text-gray-700">
        O mapa mental permite organizar conceitos e/ou ideias que vão se ramificando sob a forma de galhos, formando uma “árvore do conhecimento”. Esse mapa possui uma estrutura flexível, sendo possível adicionar a ele outros elementos, como desenhos, imagens, vídeos etc.
      </p>
      <div className="mt-4">
        <Accordion variant='bordered'>
            <AccordionItem key="1" aria-label="Accordion 1" title="Sugestão de atividade">
            
                
                <p className="text-gray-700">
                A primeira parte do Livro do Estudante fala sobre sonhos, apresentados como ponto de partida para a conquista de qualquer objetivo.
                </p>
                <p className="text-gray-700">
                Sugerimos que os estudantes criem um mapa mental (virtual ou físico) de três de seus sonhos e de como se planejar financeiramente para realizá-los:
                </p><br></br>
                <ul className="list-disc pl-8">
                <li className="text-gray-700">Sonho 1: Curto prazo</li>
                <li className="text-gray-700">Sonho 2: Médio prazo</li>
                <li className="text-gray-700">Sonho 3: Longo prazo</li>
                </ul><br></br>
                <p className="text-gray-700">
                Após a construção desse mapa, os alunos devem mostrar ao professor e, se quiserem, para sua turma. Caso julgue necessário, revisite os dois primeiros capítulos do livro.
                </p><br></br>
                <p className="text-gray-700">
                No momento de socialização da atividade, faça perguntas aos estudantes sobre a construção do mapa. Sistematize a discussão frisando que não há sonho melhor do que outro e, sobretudo, que alguns sonhos não requerem uso de dinheiro, mas que todos, para que se concretizem, exigem algum planejamento.
                </p><br></br>
                <p className="text-gray-700">
                ATENÇÃO: Antes que os estudantes iniciem a atividade, certifique-se de que eles entenderam a estrutura de um mapa mental. Chame a atenção para o fato de que eles devem sistematizar e organizar os sonhos com frases curtas, imagens, etc.
                </p><br></br>
                <p className="text-gray-700">
                Consulte <a href="https://drive.google.com/file/d/1kXri6YnZctOUFKywSZYS7r94QtHL1pcG/view?usp=sharing" className="text-blue-500 underline hover:text-blue-700">aqui</a> um modelo de mapa mental construído na plataforma MindMeister que poderá servir de inspiração. Se você não tiver acesso à internet, pode fazer o mapa mental com lápis e papel.
                </p>
            </AccordionItem>
            
        </Accordion>
        
      </div>
    </div>
  );
}

export default RecMapaMental;
