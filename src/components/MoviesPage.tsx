import { MovieList } from "./MovieList";
import { movies } from "../data/movies";

export function MoviesPage() {
  return <MovieList movies={movies} title="All Movies" />;
} 