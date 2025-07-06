import { MovieCard } from "./MovieCard";
import type { Movie } from "../data/movies";

interface MovieListProps {
  movies: Movie[];
  title: string;
}

export function MovieList({ movies, title }: MovieListProps) {
  return (
    <main className="main-content">
      <h1 className="featured-title">{title}</h1>
      <div className="movie-list">
        {movies.length === 0 ? (
          <div className="no-results">
            <p>No movies found matching your search.</p>
            <p>Try adjusting your search terms or browse all movies.</p>
          </div>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))
        )}
      </div>
    </main>
  );
} 