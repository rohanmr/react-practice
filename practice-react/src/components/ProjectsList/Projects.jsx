import React from "react";
import projectImg from "../../assets/project.jpg";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "A simple weather forecast app using OpenWeather API and ReactJS.",
      image: projectImg,
      link: "#",
    },
    {
      id: 2,
      title: "Todo Manager",
      description:
        "Task management app with CRUD functionality using React and Bootstrap.",
      image: projectImg,
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and responsive Bootstrap design.",
      image: projectImg,
      link: "#",
    },
  ];

  return (
    <div className="container mt-5 py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">My Projects</h2>
        <p className="text-muted">
          Here are a few projects I've worked on recently.
        </p>
      </div>

      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow border-0">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-dark mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
