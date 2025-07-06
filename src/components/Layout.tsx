import React from "react";
import { Link, Outlet, useSearchParams } from "react-router";

export function Layout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchParams(value ? { q: value } : {});
  };

  return (
    <div className="app-bg">
      <header className="header">
        <div className="logo">MyMovieDB</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <input
          className="search"
          type="text"
          placeholder="Search"
          value={q}
          onChange={handleSearchChange}
        />
      </header>
      <Outlet context={{ q }} />
    </div>
  );
} 