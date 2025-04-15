import React from "react";
import ReactPlayer from "react-player";

function MatPropriedades() {
    return (
        <div className="container my-24 mx-auto md:px-6">
          {/* Section: Design Block */}
          <section className="bg-gradient-to-br from-primary to-primary-focus mb-32">
            <div className="px-6 py-6 text-center md:px-12 lg:text-left">
              <div className="container mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="mt-12 lg:mt-0">
                    <h1 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-4xl xl:text-4xl">
                      Ao final da Primeira Etapa…
                    </h1>
                    <p className="text-lg text-white">
                      No modelo virtual, você pode usar o{" "}
                      <a
                        href="https://jamboard.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Google Jamboard
                      </a>{" "}
                      para registrar as ideias e armazená-las na pasta do Google Drive correspondente a cada turma. Assim, você terá o acervo do registro deste projeto.
                    </p>

                  </div>
                  <div className="mb-12 lg:mb-0">
                    <img src="/images/jamboard.jpg" alt="Google Jamboard" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Design Block */}
        </div>
      );
    }

export default MatPropriedades;
