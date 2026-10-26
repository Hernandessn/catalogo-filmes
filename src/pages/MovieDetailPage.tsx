// Link troca de página sem recarregar; useParams lê o :id da URL.
import { Link, useParams } from "react-router-dom";
// Hooks e componentes do projeto.
import { useMovies } from "../hooks/useMovies";
import { usePageTitle } from "../hooks/usePageTitle";
import Rating from "../components/Rating";
import FavoriteButton from "../components/FavoriteButton";

export default function MovieDetailPage() {
  // Lê o id da rota /filme/:id. Vem sempre como string.
  const { id } = useParams<{ id: string }>();
  // Busca os filmes e os estados de carregamento e erro.
  const { movies, loading, error } = useMovies();

  // Procura o filme com esse id (Number converte a string em número).
  // Se não achar, movie fica undefined.
  const movie = movies.find((m) => m.id === Number(id));
  // Título da aba. Chamado ANTES dos returns, porque hooks não podem
  // ficar depois de um return condicional.
  usePageTitle(movie ? movie.title : "Filme");

  // Enquanto os dados não chegam.
  if (loading) return <p>Carregando...</p>;
  // Se a busca falhou.
  if (error) return <p>Erro: {error}</p>;
  // Se o id não corresponde a nenhum filme (ex.: /filme/999).
  if (!movie) {
    return (
      <>
        <h1>Filme não encontrado</h1>
        <Link to="/catalogo">← Voltar ao catálogo</Link>
      </>
    );
  }

  // Aqui o movie existe com segurança: mostra os dados.
  return (
    <article className="detail">
      <Link to="/catalogo">← Voltar ao catálogo</Link>
      <h1>{movie.title}</h1>
      <p className="meta">
        {movie.year} · {movie.genre} · Direção: {movie.director}
      </p>
      <Rating value={movie.rating} />
      <p>{movie.synopsis}</p>
      <FavoriteButton movieId={movie.id} />
    </article>
  );
}
