import React from "react";
import { Link, Outlet, useSearchParams, useNavigate } from "react-router";
import { auth } from "../utils/auth";

export function Layout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const q = searchParams.get("q") || "";
  const user = auth.getUser();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // If user is not authenticated and tries to search, redirect to login
    if (!user && value.trim()) {
      navigate('/login');
      return;
    }
    
    setSearchParams(value ? { q: value } : {});
  };

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <div className="app-bg">
      <header className="header">
        <div className="logo">MyMovieDB</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          {!user && <Link to="/login">Login</Link>}
        </nav>
        <div className="header-right">
          <input
            className="search"
            type="text"
            placeholder={user ? "Search" : "Login to search"}
            value={q}
            onChange={handleSearchChange}
            disabled={!user}
          />
          {user && (
            <div className="user-info">
              <span className="username">Welcome, {user.username}!</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
      <Outlet context={{ q }} />
    </div>
  );
} 