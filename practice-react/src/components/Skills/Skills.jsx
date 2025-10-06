import React from "react";

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", icon: "bi bi-filetype-html", color: "#e34c26" },
    { id: 2, name: "CSS", icon: "bi bi-filetype-css", color: "#264de4" },
    { id: 3, name: "JavaScript", icon: "bi bi-filetype-js", color: "#f7df1e" },
    { id: 4, name: "React", icon: "bi bi-lightning-charge", color: "#61dafb" },
    {
      id: 5,
      name: "Bootstrap",
      icon: "bi bi-bootstrap-fill",
      color: "#7952b3",
    },
    { id: 6, name: "React", icon: "bi bi-github", color: "#201f1eff" },

    { id: 7, name: "Mongodb", icon: "bi bi-database", color: "#0c7e3bff" },
  ];

  return (
    <div className="container mt-5 py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">My Skills</h2>
        <p className="text-muted">
          Technologies and tools I use to build amazing projects.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {skills.map((skill) => (
          <div key={skill.id} className="col-6 col-md-4 col-lg-3">
            <div className="card text-center border-0 shadow-sm py-4 h-100">
              <div
                className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "70px",
                  height: "70px",
                }}
              >
                <i
                  className={`${skill.icon}`}
                  style={{ fontSize: "2rem", color: skill.color }}
                ></i>
              </div>
              <h6 className="fw-semibold">{skill.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
