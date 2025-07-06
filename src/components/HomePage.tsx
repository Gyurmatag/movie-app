import { MovieList } from "./MovieList";
import { movies } from "../data/movies";

export function HomePage() {
  return <MovieList movies={movies} title="Featured Movies" />;
} 