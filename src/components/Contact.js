import React from "react";

export default function Contact() {
  return (
    <div className="container mt-5 p-5 text-white">
      <h2 className="text-center mb-4">Contact Me</h2>
      <p className="text-center">
        Feel free to reach out for collaborations or any questions!
      </p>
      
      <div className="d-flex justify-content-center">
        <a href="mailto:thakarevishal286@gmail.com" className="btn btn-primary mx-2">
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/vishal-thakare-52911b249" className="btn btn-info mx-2" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/vishal1722" className="btn btn-dark mx-2" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}
