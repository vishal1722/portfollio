import React from 'react';

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center bg-light p-4 rounded shadow">
        <h1 className="fs-1 fw-bold text-dark">PORTFOLIO</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <button className="nav-link text-dark btn btn-link" onClick={() => scrollToSection('home')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-dark btn btn-link" onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-dark btn btn-link" onClick={() => scrollToSection('skills')}>Skills</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-dark btn btn-link" onClick={() => scrollToSection('projects')}>Projects</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-dark btn btn-link" onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
