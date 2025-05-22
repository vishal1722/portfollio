import React from 'react';
import Buttons from './Buttons'; 

export default function About() {
  return (
    <div className="container mt-5 p-5 about-section">
      <div className="row align-items-center">
    
        <div className="col-md-6">
          <h1>Vishal Thakare</h1>
          <h3 className="text-success">I'm a Frontend Developer</h3>
          <p>
            I am a passionate Frontend Developer with expertise in HTML, CSS, JavaScript, React.js, and Bootstrap. 
            I enjoy building responsive and user-friendly web applications. With hands-on experience in projects like 
            portfolio websites, Zerodha clone, and an Employee Management System, I continuously strive to improve my skills. 
            Currently pursuing B.Tech in CSE (Data Science).
          </p>

        
          <Buttons />
        </div>

        
        <div className="col-md-6 text-center">
          <img src="/resumeph.jpg" alt="Vishal Thakare" className="profile-img" />
        </div>
      </div>
    </div>
  );
}
