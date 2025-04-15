'use client'
import React from "react";
import { motion } from 'framer-motion'

function AtiFerramentas() {
  return (
    <>
      <div className='mx-auto max-w-screen-xl '>
        <h2 className='font-bold text-2xl md:text-4xl sm:text-3xl text-gray-700 py-4 text-center'>Ferramentas que podem ser utilizadas para fazer esse diagnóstico</h2>
        <p className="text-gray-800 text-center">Criamos um link para cada uma das sugestões de ferramentas já com o modelo de aplicação com os estudantes. Clique em cada uma dessas ferramentas para conhecê-las e então aplicá-las com os estudantes por meio da plataforma Google:</p>
      </div>
      <motion.div className="grid grid-cols-1 mx-auto max-w-screen-xl md:grid-cols-3 sm:grid-cols-1 gap-8 px-8"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="/images/desejo.png" alt="Realidade e desejo" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title py-4">Realidade e desejo</h2>
              <div className="card-actions text-center">
                <a href="https://docs.google.com/document/d/1wS14avbhcJd8NbVVn_juK-7LvFMRjrd064cWvk_mrCw/edit" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary text-white">Explicação</button>
                </a>
                <a href="https://docs.google.com/spreadsheets/d/1RnCXUPAmwuUf42tiWhn4H3DT5HTPWIkMHb35bbNyatA/edit#gid=2055273226" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary text-white">Modelo</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="/images/agrada.png" alt="Me agrada, me incomoda" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title py-4">Me agrada, me incomoda</h2>
              <div className="card-actions">
                <a href="https://docs.google.com/document/d/1OCgxyp9bb8KFvmIiu1oJrvypkbb2H20lbbZcsyK4boo/edit" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary text-white">Explicação</button>
                </a>
                <a href="https://jamboard.google.com/d/1SIHHDOaJ1nyOurny5a0qERcZRfc1vKFcQ7cdLpVXfvc/viewer?f=0&pli=1" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary text-white">Modelo</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="/images/jogo.png" alt="Jogo de perguntas e respostas" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Jogo de perguntas e respostas</h2>
              <div className="card-actions py-4">
                <a href="https://docs.google.com/document/d/1ehHEMgdcvgmy1zp8UBF52GiJo1VYp6e2SUZrEMbRaMk/edit" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary text-white">Explicação</button>
                </a>
                <a href="https://jamboard.google.com/d/1N0dXH1ZbNpfax0MkX1srcrnW9NpkgwL7XRvK9636_VE/viewer?f=0" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary text-white">Modelo</button>
                </a>
              </div>
            </div>
          </div>
          <div className='divider max-w-screen-xl mx-auto'></div>
        </motion.div>
    
    </>
    
  );
}

export default AtiFerramentas;
