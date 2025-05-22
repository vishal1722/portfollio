import React from "react";

export default function Projects() {
  return (
    <div className="container py-5 text-white" id="projects">
      <h2 className="text-center mb-5 fw-bold">My Projects</h2>
      <div className="row g-4">
        {/* Project 1 */}
        <div className="col-12 col-md-6">
          <div className="card h-100 bg-dark text-white shadow">
            <div className="card-body d-flex flex-column">
              <h4 className="card-title">Employee Management System</h4>
              <p className="card-text">
                A web-based system to manage employee details efficiently.
              </p>
              <a
                href="https://github.com/vishal1722/ems"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mt-auto"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-12 col-md-6">
          <div className="card h-100 bg-dark text-white shadow">
            <div className="card-body d-flex flex-column">
              <h4 className="card-title">Zerodha Clone</h4>
              <p className="card-text">
                A frontend clone of Zerodha's trading platform using React.js.
              </p>
              <a
                href="https://github.com/vishal1722/zerodha-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mt-auto"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
