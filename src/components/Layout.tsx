import React from "react";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router";
import { auth } from "../utils/auth";

export function Layout() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const user = auth.getUser();

  const q = searchParams.get("q") || "";

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(e.target.value ? { q: e.target.value } : {});
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
          {user && (
            <>
              <input
                className="search"
                type="text"
                placeholder="Search"
                value={q}
                onChange={handleSearchChange}
                style={{ marginRight: 16 }}
              />
              <div className="user-info">
                <span className="username">Welcome, {user.username}!</span>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </header>
      <Outlet />
    </div>
  );
} 