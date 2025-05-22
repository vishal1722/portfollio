import React from "react";


export default function Skills() {
  // Skills Data
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
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={`fab ${skill.icon}`} style={{ color: skill.color }}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
