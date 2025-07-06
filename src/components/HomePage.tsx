import { MovieList } from "./MovieList";
import { movies } from "../data/movies";
import { Link, useOutletContext } from "react-router";
import { auth } from "../utils/auth";

export function HomePage() {
  const user = auth.getUser();
  const { q } = useOutletContext<{ q: string }>();
  
  // Filter featured movies based on search query (if user is logged in)
  const featuredMovies = user && q 
    ? movies.filter(movie => 
        movie.title.toLowerCase().includes(q.toLowerCase()) ||
        movie.year.toString().includes(q)
      ).slice(0, 6)
    : movies.slice(0, 6);

  const title = user && q ? `Search Results for "${q}"` : "Featured Movies";
  
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
      <MovieList movies={featuredMovies} title={title} />
    </div>
  );
} 