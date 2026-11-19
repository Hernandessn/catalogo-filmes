import { Link } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { useFavorites } from "../context/FavoritesContext";
import { usePageTitle } from "../hooks/usePageTitle";
import MovieList from "../components/MovieList";

export default function FavoritesPage() {
  usePageTitle("Favoritos");
  const { movies, loading, error } = useMovies();
  const { favoriteIds } = useFavorites();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  const favorites = movies.filter((m) => favoriteIds.includes(m.id));

  return (
    <>
      <h1>Meus favoritos</h1>
      {favorites.length === 0 ? (
        <p>
          Você ainda não favoritou nenhum filme. <Link to="/catalogo">Ir ao catálogo</Link>
        </p>
      ) : (
        <MovieList movies={favorites} />
      )}
    </>
  );
}
