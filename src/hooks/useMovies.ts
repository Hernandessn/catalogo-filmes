// useState guarda os dados; useEffect faz a busca depois da renderização.
import { useEffect, useState } from "react";
// Tipo Movie compartilhado por todo o projeto (não criamos outro).
import type { Movie } from "../types";

// Hook que busca a lista de filmes em /movies.json.
// Devolve um objeto com: movies (os dados), loading (carregando?) e error (mensagem de erro).
export function useMovies() {
  // Começa com lista vazia, porque os dados ainda não chegaram.
  const [movies, setMovies] = useState<Movie[]>([]);
  // Começa true: assim que a tela abre, já estamos "carregando".
  const [loading, setLoading] = useState(true);
  // null = sem erro. Se der problema, guardamos o texto do erro.
  const [error, setError] = useState<string | null>(null);

  // O efeito roda depois da primeira renderização.
  // O array [] vazio significa: rode só uma vez, ao montar o componente.
  useEffect(() => {
    // fetch faz a requisição HTTP ao arquivo dentro de /public.
    fetch("/movies.json")
      .then((response) => {
        // fetch não dá erro em 404/500 sozinho, então checamos response.ok.
        if (!response.ok) {
          throw new Error("Não foi possível carregar os filmes.");
        }
        // Converte o corpo da resposta de JSON para objeto JavaScript.
        return response.json() as Promise<Movie[]>;
      })
      // Deu certo: guarda os filmes no estado.
      .then((data) => setMovies(data))
      // Deu errado (rede ou erro lançado acima): guarda a mensagem.
      .catch((err: Error) => setError(err.message))
      // Roda sempre, com sucesso ou erro: terminou de carregar.
      .finally(() => setLoading(false));
  }, []);

  // Devolve os três valores para quem usar o hook.
  return { movies, loading, error };
}
