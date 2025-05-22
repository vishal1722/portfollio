import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: "fa-html5", color: "#E34F26" },
    { name: "CSS", icon: "fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fa-js", color: "#F7DF1E" },
    { name: "React.js", icon: "fa-react", color: "#61DAFB" },
    { name: "Bootstrap", icon: "fa-bootstrap", color: "#7952B3" },
    { name: "Node.js", icon: "fa-node-js", color: "#339933" },
    { name: "MongoDB", icon: "fa-database", color: "#47A248" },
    { name: "SQL", icon: "fa-database", color: "#00758F" },
  ];

  return (
    <div className="container py-5 text-white" id="skills">
      <h2 className="text-center mb-5 fw-bold">My Skills</h2>
      <div className="row g-4 justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 text-center">
            <div className="p-3 border border-secondary rounded bg-dark h-100 shadow-sm">
              <i
                className={`fab ${skill.icon} fa-3x mb-2`}
                style={{ color: skill.color }}
              ></i>
              <p className="mt-2 fw-medium">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
