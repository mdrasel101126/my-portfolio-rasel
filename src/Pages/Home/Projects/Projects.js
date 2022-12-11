import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div id="projects" className="my-8">
      <h1 className="text-primary text-4xl text-center font-bold">
        My Projects
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Please see my projects I had done before
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {projects &&
          projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
      </div>
    </div>
  );
};

export default Projects;
