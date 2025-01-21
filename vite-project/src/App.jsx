import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import komponen GameList
import GameList from './components/games/list';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">GameBoost</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/games" className="nav-link">Games</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to GameBoost</h1>
                <p>Your one-stop platform for gaming experiences and seamless transactions.</p>
                
              </div>
            }
          />
          <Route path="/games" element={<GameList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;