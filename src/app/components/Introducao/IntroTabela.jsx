import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";


const rows = [
  {
    key: "1",
    name: "O que é consumo?",
    role: "O que é consumismo? Como não gastar mais do que deveríamos!",
    status: "I - Diagnóstico. II - Conteúdos e habilidades. III - Planejamento.",
    location: "Múltiplos e divisores de um número natural / Números racionais na representação fracionária e decimal / Fração e seus significados: como parte de inteiros, resultado da divisão, razão e operador / Problemas envolvendo medições / Cálculo de volume de blocos retangulares, utilizando unidades de medida convencionais mais usuais.",
    department: "Ferramentas Google / Infográfico.",
  },
];

const columns = [
  {
    key: "name",
    label: "Parte do Quadro Geral",
  },
  {
    key: "role",
    label: "Capítulos do Livro do Estudante",
  },
  {
    key: "status",
    label: "Atividades do Projeto",
  },
  {
    key: "location",
    label: "Matemática e Educação Financeira",
  },
  {
    key: "department",
    label: "Recursos Didáticos",
  },
];

export default function IntroTabela() {
  return (

    <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="py-8">
        <h1 className="font-bold text-2xl md:text-5xl sm:text-3xl text-slate-700 py-4 text-center">Site 1</h1>
        <p className="p-8 mb-4 text-center text-lg">Vamos ver quais Etapas do Projeto, temas de Matemática e ferramentas didáticas serão tratadas neste site:</p>
      
      <Table aria-label="Example table with dynamic content" style={{ fontSize: "1.2rem" }}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} className="font-medium text-lg text-white bg-primary">
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell style={{ textAlign: "center" }}>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      


    
    </div>
  );
}
