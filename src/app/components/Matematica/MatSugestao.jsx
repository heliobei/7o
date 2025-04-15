import React from 'react';

function MatSugestao() {
  return (
    <div className="relative max-w-screen-xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-8">
        Sugestão de ferramentas para usar em sala
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 pr-4 flex justify-center items-center">
          <a href="https://porque.com.br/" target="_blank" rel="noopener noreferrer">
            <img src="/images/mockupPQ.png" alt="Imagem Por Quê?" className="w-full" />
          </a>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Site Por Quê?</h2>
          <p>
            Procurar conteúdo na internet pode ser uma tarefa trabalhosa, uma vez que podemos não encontrar material no formato ou linguagem adequada para o uso com os estudantes. Pensando nesta dificuldade enfrentada por professores, sugerimos como ferramenta de apoio o{' '}
            <a href="https://porque.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              site Por Quê?
            </a>
            . Este site foi desenvolvido para aproximar o público não especializado aos princípios econômicos básicos e mostrar a importância e a aplicação prática desse conhecimento. Portanto, seu material é produzido em linguagem acessível, ao mesmo tempo que trata dos mais variados temas dentro de Economia e Educação Financeira. Você pode consultar{' '}
            <a href="https://porque.com.br/categoria/graficos/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              gráficos
            </a>
            ,{' '}
            <a href="https://porque.com.br/categoria/infograficos/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              infográficos
            </a>
            , artigos de{' '}
            <a href="https://porque.com.br/categoria/blog/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              blog
            </a>
            , e{' '}
            <a href="https://porque.com.br/videos/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              vídeos
            </a>
            {' '}sobre temas de economia e atualidades, e também a Econopédia, uma enciclopédia virtual de termos essenciais da Economia.
          </p>
        </div>
      </div>
      <div className="flex mt-8 flex-col md:flex-row">
        <div className="w-full md:w-2/3 pr-4">
          <h2 className="text-2xl font-bold mb-4">Formulários Google</h2>
          <p>
            Ao fim da aula, você pode solicitar um feedback dos estudantes por meio do Formulários Google e enviá-lo via Google Sala de Aula. Você poderá visualizar os resultados de forma assíncrona, à medida que os jovens realizam as atividades. Como todas as respostas ficarão disponíveis em seu Google Drive, você poderá acessá-las sempre que necessário ao longo do projeto.
            Você pode se inspirar em um modelo clicando{' '}
            <a href="https://www.google.com/intl/pt-BR/forms/about/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              aqui
            </a>
            . Importante: não envie esse formulário para seus alunos. Você precisa criar o seu para conseguir acessar as respostas. Caso você envie o link do modelo para seus estudantes, não teremos como identificar quais foram as respostas da sua turma. Para retomar como elaborar um formulário do Google, acesse este{' '}
            <a href="https://youtu.be/C87YFYToHTA" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              tutorial
            </a>
            
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center py-4">
          <a href="https://www.google.com/intl/pt-BR/forms/about/" target="_blank" rel="noopener noreferrer">
            <img src="/images/gforms.png" alt="Imagem Formulários Google" className="w-full" />
          </a>
        </div>
      </div>
      <div className='divider max-w-screen-xl mx-auto'></div>
    </div>
  );
}

export default MatSugestao;

