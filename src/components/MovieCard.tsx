import { Link } from "react-router-dom";
import type { Movie } from "../types";
import Rating from "./Rating";
import FavoriteButton from "./FavoriteButton";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="card">
      <h3>{movie.title}</h3>
      <p className="meta">{movie.year} · {movie.genre}</p>
      <Rating value={movie.rating} />
      <div className="card-actions">
        <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
        <FavoriteButton movieId={movie.id} />
      </div>
    </article>
  );
}