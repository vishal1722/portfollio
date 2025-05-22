import React from "react";

export default function Projects() {
  return (
    <div className="container mt-5 p-5 text-white">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {/* Project 1 - Employee Management System */}
        <div className="col-md-6">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h4 className="card-title">Employee Management System</h4>
              <p className="card-text">
                A web-based system to manage employee details efficiently.
              </p>
              <a href="https://github.com/vishal1722/ems" className="btn btn-success" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 - Zerodha Clone */}
        <div className="col-md-6">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h4 className="card-title">Zerodha Clone</h4>
              <p className="card-text">
                A frontend clone of Zerodha's trading platform using React.js.
              </p>
              <a href="https://github.com/vishal1722/zerodha-clone" className="btn btn-success" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
