import { useFavorites } from "../context/FavoritesContext";

interface FavoriteButtonProps {
  movieId: number;
}

export default function FavoriteButton({ movieId }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorito = isFavorite(movieId);

  return (
    <button
      className={favorito ? "fav-btn on" : "fav-btn"}
      onClick={() => toggleFavorite(movieId)}
    >
      {favorito ? "★ Favorito" : "☆ Favoritar"}
    </button>
  );
}
