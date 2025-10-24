import React, { useEffect, useState } from "react";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("");

  function fetchData() {
    fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const departments = [...new Set(projects.map((p) => p.Department))];

  const filteredProjects = projects.filter(
    (p) =>
      p.ProjectName?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filterDept || p.Department === filterDept)
  );

  return (
    <div className="container" style={{ height: "500px", overflow: "auto" }}>
      <div className="row mb-3 mt-5 ">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Project Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map((dept, i) => (
              <option key={i} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select w-50"
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
          >
            <option value="">Sort By Priority</option>
            {departments.map((dept, i) => (
              <option key={i} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Name</th>
            <th scope="col">Details</th>
            <th scope="col">Department</th>
            <th scope="col">Status</th>
            <th scope="col">Priority</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects?.length > 0 ? (
            filteredProjects?.map((project, i) => (
              <tr key={project.id || i}>
                <th>{project.id}</th>
                <td>{project.ProjectName}</td>
                <td>{project.Details}</td>
                <td>{project.Department}</td>
                <td>{project.status}</td>
                <td>{project.priority}</td>
                <td>{project.startDate}</td>
                <td>{project.EndDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No project found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
