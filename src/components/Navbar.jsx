import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <nav className="navbar">
      <h1>MovieDb</h1>
      <ul>
        <li>
          <Link to="/">Popular</Link> 
        </li>
        <li>
          <Link to="/top-rated">Top Rated</Link> 
        </li>
        <li>
          <Link to="/upcoming">Upcoming</Link> {/* Link to Upcoming Movies */}
        </li>
      </ul>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
