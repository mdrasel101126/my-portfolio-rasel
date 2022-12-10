import React from "react";

const Project = ({ project }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full"
          src="https://placeimg.com/400/225/arch"
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
