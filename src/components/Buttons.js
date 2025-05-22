import React from 'react';

export default function Buttons() {
  
  const resumeUrl = '/resume.pdf'; 

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vishal_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="d-grid gap-2 d-md-flex">
      <button className="resume btn btn-success me-md-2" type="button" onClick={downloadResume}>
        Download Resume
      </button>


      <a href="https://github.com/vishal1722" target="_blank" rel="noopener noreferrer">
        <button className="social-btn">
          <i className="fa-brands fa-github"></i>
        </button>
      </a>

    
      <a href="https://www.linkedin.com/in/vishal-thakare-52911b249" target="_blank" rel="noopener noreferrer">
        <button className="social-btn">
          <i className="fa-brands fa-linkedin"></i>
        </button>
      </a>
    </div>
  );
}
