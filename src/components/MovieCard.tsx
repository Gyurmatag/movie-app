import type { Movie } from "../data/movies";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-img" />
      <div className="movie-overlay">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    </div>
  );
} 