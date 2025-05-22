import React from 'react';
import Buttons from './Buttons';

export default function About() {
  return (
    <div className="container py-5 about-section">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h1 className="fw-bold">Vishal Thakare</h1>
          <h3 className="text-success">I'm a Frontend Developer</h3>
          <p className="mt-3">
            I am a passionate Frontend Developer with expertise in HTML, CSS, JavaScript, React.js, and Bootstrap.
            I enjoy building responsive and user-friendly web applications. With hands-on experience in projects like
            portfolio websites, Zerodha clone, and an Employee Management System, I continuously strive to improve my skills.
            Currently pursuing B.Tech in CSE (Data Science).
          </p>
          <Buttons />
        </div>

      
        <div className="col-12 col-md-6 text-center">
          <img
            src="/resumeph.jpg"
            alt="Vishal Thakare"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
