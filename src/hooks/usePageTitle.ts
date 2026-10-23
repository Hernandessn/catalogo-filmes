// Importa o useEffect, que serve para rodar um código "de fora" do React
// (aqui, mexer no título da aba do navegador).
import { useEffect } from "react";

// Atualiza o título da aba do navegador.
// title = o texto que a página quer mostrar (ex.: "Catálogo").
export function usePageTitle(title: string) {
  // O efeito roda depois da renderização.
  useEffect(() => {
    // document.title é o texto que aparece na aba do navegador.
    // Montamos o título no formato "Página | Catálogo de Filmes".
    document.title = `${title} | Catálogo de Filmes`;
    // Só roda de novo quando o title mudar.
  }, [title]);
}
