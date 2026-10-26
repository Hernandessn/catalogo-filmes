import { Link } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { usePageTitle } from "../hooks/usePageTitle";
import MovieList from "../components/MovieList";

export default function HomePage() {
  usePageTitle("Home");
  const { movies, loading } = useMovies();

  const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <>
      <h1>Bem-vindo ao Catálogo de Filmes</h1>
      <p>Busque filmes, filtre por gênero e salve seus favoritos.</p>
      <p>
        <Link to="/catalogo">Ver catálogo completo →</Link>
      </p>
      <h2>Mais bem avaliados</h2>
      {loading ? <p>Carregando...</p> : <MovieList movies={topRated} />}
    </>
  );
}