import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={project.image}>
          <figure>
            <div className="w-full h-80 overflow-y-auto no-scrollbar">
              <img
                className="hover:cursor-pointer"
                src={project.image}
                sizes=""
                alt=""
              />
            </div>
          </figure>
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.description}</p>
        <p>
          <small className="font-semibold">
            Technology: {project.technology}
          </small>
        </p>
        <a
          href={project["urlLink"]}
          target="_blank"
          rel="noreferrer"
          className="text-primary font-bold"
        >
          Live Website
        </a>
        <div className="text-center mt-3">
          <Link to={`/project/${project.id}`}>
            <button className="btn btn-primary text-white font-bold">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
