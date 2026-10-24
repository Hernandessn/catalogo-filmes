import { usePageTitle } from "../hooks/usePageTitle";

const integrantes = ["Hernandes", "Kallyson", "Carlos Rony", "Francisco", "Natanael", "Lucas"];

export default function AboutPage() {
  usePageTitle("Sobre");

  return (
    <>
      <h1>Sobre o projeto</h1>
      <p>
        Trabalho final de Front-end Frameworks (ADS), desenvolvido com React, TypeScript, Vite e
        React Router. Os dados vêm de um arquivo JSON local.
      </p>
      <h2>Integrantes</h2>
      <ul>
        {integrantes.map((nome) => (
          <li key={nome}>{nome}</li>
        ))}
      </ul>
    </>
  );
}