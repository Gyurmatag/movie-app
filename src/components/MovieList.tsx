import React from "react";
import { useSearchParams } from "react-router";
import { MovieCard } from "./MovieCard";
import type { Movie } from "../data/movies";

interface MovieListProps {
  movies: Movie[];
  title: string;
}

export function MovieList({ movies, title }: MovieListProps) {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <main className="main-content">
      <h1 className="featured-title">{title}</h1>
      <div className="movie-list">
        {filteredMovies.length === 0 ? (
          <div style={{ color: '#b3b3b3', fontSize: '1.2rem' }}>No results found.</div>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))
        )}
      </div>
    </main>
  );
} 