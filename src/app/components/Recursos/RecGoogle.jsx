import React from 'react';
import { SiGoogleforms } from 'react-icons/si';
import { SiGoogleclassroom } from 'react-icons/si';
import { SiJamboard } from 'react-icons/si';
import { PiGoogleDriveLogo } from 'react-icons/pi';

const RecGoogle = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
            
            <h2 className="mb-6 text-4xl font-bold text-gray-700 py-8">
              Conhecendo as ferramentas{' '}
              <span className="text-primary dark:text-primary-400">Google</span>
            </h2>

            <p className="mb-12 text-neutral-700 dark:text-neutral-300">
              As ferramentas Google são aplicativos online e gratuitos com
              diversas funções: criar e editar textos, planilhas, inserir e
              organizar vídeos e até mesmo organizar conteúdo didático. Elas
              podem e devem ser utilizadas tanto pelos professores quanto pelos
              alunos para o desenvolvimento. Clique nas imagens para acessar um
              tutorial de cada uma!
            </p>
          </div>

          <div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-red-300 text-primary dark:text-primary-400">
                    <a href="http://forms.google.com" target="_blank" rel="noopener noreferrer">
                      <SiGoogleforms className="h-6 w-6 text-gray-600" />
                    </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">Google Forms</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      O Google Forms é uma ferramenta de criação de pesquisas e
                      formulários on-line que permite coletar respostas e dados de
                      forma eficiente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-yellow-300 text-primary dark:text-primary-400">
                      <a href="http://classroom.google.com" target="_blank" rel="noopener noreferrer">
                        <SiGoogleclassroom className="h-6 w-6 text-gray-600" />
                      </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">Google Sala de Aula</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Permite que educadores criem, compartilhem e gerenciem
                      recursos, tarefas e comunicações com os alunos de maneira
                      colaborativa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-green-300 text-primary dark:text-primary-400">
                      <a href="http://jamboard.google.com" target="_blank" rel="noopener noreferrer">
                        <SiJamboard className="h-6 w-6 text-gray-600" />
                      </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">Jamboard</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Uma lousa digital colaborativa que facilita a criação e
                      compartilhamento de ideias por meio de anotações, desenhos e
                      recursos visuais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 bg-blue-300 text-primary dark:text-primary-400">
                      <a href="http://drive.google.com" target="_blank" rel="noopener noreferrer">
                        <PiGoogleDriveLogo className="h-6 w-6 text-gray-600" />
                      </a>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-3 font-bold">Google Drive</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Serviço de armazenamento em nuvem que oferece espaço para
                      armazenar, compartilhar e sincronizar arquivos e documentos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecGoogle;
