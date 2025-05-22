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
    <div className="d-flex flex-column flex-sm-row align-items-start gap-3 mt-3">
      <button className="btn btn-success" type="button" onClick={downloadResume}>
        Download Resume
      </button>

      <a
        href="https://github.com/vishal1722"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark d-flex align-items-center justify-content-center"
        style={{ width: '45px', height: '45px' }}
      >
        <i className="fab fa-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/vishal-thakare-52911b249"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-info d-flex align-items-center justify-content-center text-white"
        style={{ width: '45px', height: '45px' }}
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  );
}
