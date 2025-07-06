import { MovieList } from "./MovieList";
import { movies } from "../data/movies";
import { useSearchParams } from "react-router";

export function MoviesPage() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  // Filter movies based on search query
  const filteredMovies = q
    ? movies.filter(movie =>
        movie.title.toLowerCase().includes(q.toLowerCase()) ||
        movie.year.toString().includes(q)
      )
    : movies;

  const title = q ? `Search Results for "${q}"` : "All Movies";

  return (
    <MovieList movies={filteredMovies} title={title} />
  );
} 