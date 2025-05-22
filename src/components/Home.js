import React from 'react';

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container py-4" id="home">
      <div className="navbar navbar-expand-lg bg-light p-3 rounded shadow">
        <div className="container-fluid">
          <h1 className="navbar-brand fw-bold mb-0 fs-2">PORTFOLIO</h1>

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

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <li className="nav-item" key={section}>
                  <button
                    className="nav-link btn btn-link text-dark"
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
