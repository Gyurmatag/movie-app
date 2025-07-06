import { MovieList } from "./MovieList";
import { movies } from "../data/movies";
import { Link } from "react-router";
import { auth } from "../utils/auth";

export function HomePage() {
  const user = auth.getUser();
  
  return (
    <div className="main-content">
      <div className="welcome-section">
        <h1 className="featured-title">Welcome to MyMovieDB</h1>
        {user ? (
          <p className="welcome-text">
            Hello {user.username}! Explore our collection of amazing movies.
          </p>
        ) : (
          <p className="welcome-text">
            Discover and explore amazing movies. Please log in to access the full collection.
          </p>
        )}
        {user && (
          <Link to="/movies" className="cta-button">
            Browse All Movies
          </Link>
        )}
      </div>
      <MovieList movies={movies.slice(0, 6)} title="Featured Movies" />
    </div>
  );
} 