import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import komponen Games
import List from './components/games/list';

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
                <NavLink to="/" className="nav-link active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/games" className="nav-link">Games</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Transactions</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Adventure</a></li>
                  <li><a className="dropdown-item" href="#">Strategy</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex me-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search games..."
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <div className="d-flex">
              <button className="btn btn-outline-light me-2">Login</button>
              <button className="btn btn-success">Register</button>
            </div>
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
          <Route ubpath="/games" element={<List />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;