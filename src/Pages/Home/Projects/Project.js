import React from "react";

const Project = ({ project }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-52" src={project.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.description}</p>
        <p>
          <small className="font-semibold">
            Technology: {project.technology}
          </small>
        </p>
        <div className="text-center mt-3">
          <button className="btn btn-primary text-white font-bold">
            <a href={project.urlLink} target="_blank" rel="noreferrer">
              Visit Website
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
