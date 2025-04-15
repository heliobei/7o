'use client'
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Site 1",
    role: "1 e 2",
    status: "I - Diagnóstico; II - Conteúdos e habilidades",
  },
  {
    key: "2",
    name: "Site 2",
    role: "3",
    status: "III - Planejamento; IV - Atividades",
  },
  {
    key: "3",
    name: "Site 3",
    role: "4",
    status: "V - Avaliação",
  },
  {
    key: "4",
    name: "Site 4",
    role: "5",
    status: "VI - Conclusão / Culminância",
  },
];

const columns = [
  {
    key: "name",
    label: "Nomenclatura dos Sites",
  },
  {
    key: "role",
    label: "Parte do Quadro Geral",
  },
  {
    key: "status",
    label: "Etapa de desenvolvimento do projeto estudada",
  },
];

export default function EtaOrg() {
  return (

    <>
      <div className="container mx-auto max-w-screen-xl py-8">
        <h1 className="text-center pt-8 text-4xl font-bold  text-slate-700">Como este material está organizado dentro dos sites</h1>
        <p className="mt-4 p-4 text-gray-800 text-lg ">Para auxiliar na visualização da divisão das ações, criamos a tabela abaixo que organiza o conteúdo de cada site em relação às etapas de elaboração de um PPDA.  </p>
      </div>
      <div className="flex justify-center">
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <Table aria-label="Nomenclatura dos Sites">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key} className="font-bold text-lg text-white bg-primary">
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell className={columnKey === "status" ? "w-2/3" : ""}>
                      {getKeyValue(item, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <p className="text-center text-lg mt-4 p-4 text-gray-800">
        Para conhecer melhor a divisão de atividades proposta pelo Caderno do Educador, você pode rever o Quadro Geral (
        <a
          href="https://docs.google.com/spreadsheets/d/1DFJAnY_SmwUOelCjAFSarbtot7P0ehB0BptqqehtM30/edit#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          disponível aqui
        </a>
        ).
      </p>

    </>
    
  );
}
