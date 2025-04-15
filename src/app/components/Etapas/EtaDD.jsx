'use client'
import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'

function EtaDD() {
  return (
    <div className='mx-auto max-w-screen-xl py-8'>
        <Accordion variant='bordered'>
            <AccordionItem key="1" aria-label="Accordion 1" title="Diagnóstico">
                <p className="text-gray-700">É a etapa que contém os dados de identificação do projeto. Aqui, é importante que o educador organize informações referentes ao tema e duração do projeto, assim como dados referentes à turma em que o projeto será aplicado.</p><br></br>
                <p className="text-gray-700">Anotar a série na qual o projeto será desenvolvido é importante porque existem conteúdos de Matemática vinculados ao material (consulte o Quadro Geral) que, dependendo da série escolhida, vai precisar de ajustes.</p><br></br>
                <p className="text-gray-700">Quando estiver planejando o que será trabalhado com os alunos, deve-se imaginar que eles deverão efetuar todos os itens do PPDA. Para tal, pode-se desenvolver um único projeto para o ano todo ou planejar vários projetos de diferentes extensões durante o ano letivo. Essa decisão cabe a você, educador e educadora.</p><br></br>
                <p className="text-gray-700">Para criar temas de projetos que sejam relevantes e impactantes para os estudantes, o educador deve conhecê-los bem. Isso significa entender sua realidade, saber de seus sonhos e medos, suas inspirações e aspirações, o que os motiva e também compreender o grau de desenvolvimento deles junto dos conteúdos de matemática previstos para o desenvolvimento da atividade. Para isso, é importante a aplicação das diversas atividades diagnósticas.</p><br></br>
                <p className="text-gray-700">Resumindo, para elaborar a etapa de diagnóstico, utilizaremos os seguintes itens do PPDA: </p><br></br>
                <p className="text-gray-700">1. Turma</p><br></br>
                <p className="text-gray-700">2. Duração do projeto</p><br></br>
                <p className="text-gray-700">3. Tema</p><br></br>
                <p className="text-gray-700">4. Perfil da turma</p><br></br>
                <p className="text-gray-700">5. Fator de mobilização</p><br></br>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Conteúdos e habilidades">
                <p className='text-gray-700'>Uma vez que o educador e a educadora conhecem seus alunos, é hora de planejar os próximos passos para auxiliar os estudantes a concluir o projeto. E uma ação importante para isso é definir que habilidades específicas da BNCC serão trabalhadas através de quais conteúdos de matemática previstos para a aplicação do programa.</p><br></br>
                <p className='text-gray-700'>Ao planejar quais habilidades da BNCC e conteúdos de matemática serão trabalhados, professor e professora devem considerar os conteúdos conceituais, procedimentais e atitudinais que devem ser desenvolvidos com aquele projeto. Para saber mais sobre esses diferentes conteúdos, clique aqui.</p><br></br>
                <p className="text-gray-700">
                    Para recapitular sobre os diferentes tipos de conteúdos de matemática considerados no planejamento,{' '}
                    <a
                        href="https://drive.google.com/file/d/10S2XJzIb8EwubbzDjxUlAtSV15DD9OOK/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 underline"
                    >
                        clique aqui
                    </a>{' '}
                    para acessar o Mapa Esquemático de Conteúdos de Matemática, e{' '}
                    <a
                        href="https://docs.google.com/spreadsheets/d/1DFJAnY_SmwUOelCjAFSarbtot7P0ehB0BptqqehtM30/edit#gid=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 underline"
                    >
                        aqui
                    </a>{' '}
                    para acessar o Quadro Geral, que mostra as habilidades sugeridas pela BNCC.
                </p>
                <br></br>
                <p className='text-gray-700'>Nesta etapa, está incluído o item 6. Habilidades específicas da BNCC do PPDA.</p><br></br>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Planejamento">
                <p className='text-gray-700'>O educador deve ter em mente que sua função não é mais atuar como detentor do conhecimento, mas sim um orientador de aprendizado. Para isso, é importante criar oportunidades para que os estudantes atuem com autonomia, em que eles próprios planejem e desenvolvam ações para chegar ao objetivo do projeto. Logo, no desenvolvimento desta etapa devemos pensar em dois tipos de planejamento: o Planejamento do Educador e o Plano de Ação dos Estudantes. O primeiro deve ser elaborado pelo professor e conter as ações pedagógicas a serem aplicadas em sala, enquanto o Plano dos Estudantes é elaborado pelos estudantes e deve conter as ações a serem executadas no projeto.</p><br></br>
                <p className='text-gray-700'>O Planejamento do Educador deve conter praticamente todos os itens previstos dentro do PPDA, e após ser finalizado, deve ser compartilhado com os estudantes para ajustes. Ele deve ser flexível, levando em consideração situações que demandem tempo e recursos.</p><br></br>
                <p className='text-gray-700'>Nesta etapa, está incluído o item 9. Apresentação do PPDA aos estudantes e finalização, no qual o professor e a professora adicionam as ações e objetivos pedagógicos ao seu planejamento e o apresentam aos estudantes.</p><br></br>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Atividades">
                <p className='text-gray-700'>Uma vez que conhecemos os alunos, planejamos nossos conteúdos e os alunos planejaram suas ações, é hora de colocar a mão na massa e desenvolver o que está planejado. Para o professor, é importante ter estruturado um plano de atividades relacionadas ao conteúdo a ser aplicado.</p><br></br>
                <p className='text-gray-700'>Nesta etapa, começam a aparecer os primeiros resultados e tanto alunos quanto educadores começam a entender o ritmo que o projeto terá. Os resultados devem ser anotados, avaliados e considerados para o andamento das próximas etapas planejadas.</p><br></br>
                <p className='text-gray-700'>Durante o desenvolvimento das tarefas, é importante que docentes e alunos monitorem e registrem todas as atividades desenvolvidas, sejam elas relacionadas às atividades em sala de aula (aulas, conteúdos, atividades didáticas) ou ao projeto (as ações planejadas pelos estudantes). Tanto alunos quanto professores podem registrar as atividades elaboradas.</p><br></br>
                <p className='text-gray-700'>Nesta etapa, então, encontra-se o item 7. Atividades da nossa sugestão de roteiro do PPDA.</p><br></br>
            </AccordionItem>
            <AccordionItem key="5" aria-label="Accordion 5" title="Avaliação">
                <p className='text-gray-700'>Quando os primeiros resultados começam a aparecer, é importante avaliar se estão levando os estudantes ao objetivo planejado. Caso os resultados demonstrem que o projeto não está andando como deveria, é hora de voltar ao planejamento e rearranjar rotas e ações. </p><br></br>
                <p className='text-gray-700'>Assim, enquanto o projeto dos alunos caminha, os conteúdos de matemática também vão sendo aplicados. É importante averiguar se os alunos estão retendo os conteúdos trabalhados. Para isso, devem ser aplicadas avaliações. Porém, devemos ter em mente que o processo de avaliar um projeto é diferente daquele referente à avaliação de um conteúdo, portanto, devemos lançar mão de diferentes estratégias avaliativas.</p><br></br>
                <p className='text-gray-700'>Nesta etapa, o item 8. Avaliação do roteiro do PPDA é o foco das ações.</p><br></br>
            </AccordionItem>
            <AccordionItem key="6" aria-label="Accordion 6" title="Conclusão">
                <p className='text-gray-700'>Esta é a reta final da aplicação do projeto. Com as atividades já elaboradas, e o objetivo alcançado, agora é o momento de apresentar e celebrar os resultados. Para isso, é necessário:</p><br></br>
                <p className='text-gray-700'>- Preparar a culminância do projeto.</p><br></br>
                <p className='text-gray-700'>- Executar a culminância planejada.</p><br></br>
                <p className='text-gray-700'>- Efetuar ajustes e registros finais.</p><br></br>
                <p className='text-gray-700'>- Refletir sobre melhorias nos processos.</p><br></br>
                <p className='text-gray-700'>- Sugerir novas aplicações de projetos.</p><br></br>
                <p className='text-gray-700'>Apesar de ser a última etapa de desenvolvimento do projeto, é um momento de muito trabalho e reflexão, para, então, celebrarmos os resultados. E aqui é onde será trabalhado o item 10. Culminância – Celebração e apresentação dos resultados do nosso roteiro do PPDA.</p><br></br>
            </AccordionItem>
        </Accordion>
    
    </div>
  )
}

export default EtaDD