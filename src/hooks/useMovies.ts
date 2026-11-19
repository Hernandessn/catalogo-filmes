import { useEffect, useState } from "react";
import type { Movie } from "../types";

// Endereço da API pública do Studio Ghibli.
const API_URL = "https://ghibliapi.vercel.app/films";

// Só os campos da API que a gente usa.
interface GhibliFilm {
  title: string;
  description: string;
  director: string;
  release_date: string;
  rt_score: string;
}

// Busca os filmes na API e converte para o nosso tipo Movie.
async function fetchFromApi(): Promise<Movie[]> {
  const res = await fetch(API_URL);
  // fetch não lança erro em 404/500, por isso checamos res.ok.
  if (!res.ok) throw new Error("Falha ao consultar a API");
  const films = (await res.json()) as GhibliFilm[];

  // map transforma cada filme da API em um Movie.
  return films.map((f, index) => ({
    id: index + 1, // a API usa ids em texto; aqui usamos a posição na lista
    title: f.title,
    year: Number(f.release_date) || 0,
    genre: "Animação", // todos os filmes do Studio Ghibli são animações
    rating: Number(f.rt_score) / 10 || 0, // nota de 0 a 100 dividida por 10
    director: f.director,
    synopsis: f.description,
  }));
}

// Plano B: arquivo local, usado se a API falhar.
async function fetchFromJson(): Promise<Movie[]> {
  const res = await fetch("/movies.json");
  if (!res.ok) throw new Error("Falha ao carregar os filmes");
  return (await res.json()) as Movie[];
}

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Roda uma vez ao montar o componente ([] vazio).
  useEffect(() => {
    fetchFromApi()
      .catch(fetchFromJson) // se a API falhar, tenta o arquivo local
      .then(setMovies)
      .catch((e: Error) => setError(e.message)) // se os dois falharem
      .finally(() => setLoading(false));
  }, []);

  return { movies, loading, error };
}
