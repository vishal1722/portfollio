import React from "react";

export default function Contact() {
  return (
    <div className="container py-5 text-white">
      <h2 className="text-center mb-3">Contact Me</h2>
      <p className="text-center mb-4">
        Feel free to reach out for collaborations or any questions!
      </p>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
          <a
            href="mailto:thakarevishal286@gmail.com"
            className="btn btn-primary w-100 w-sm-auto"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-thakare-52911b249"
            className="btn btn-info text-white w-100 w-sm-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vishal1722"
            className="btn btn-dark w-100 w-sm-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
