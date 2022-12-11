import React from "react";
import Progress from "./Progress/Progress";

const Skills = () => {
  return (
    <div>
      <h1 className="text-4xl text-center text-primary font-bold">Skills</h1>
      <div className="max-w-[400px] mx-auto">
        <div>
          <h2 className="mr-4 font-bold">HTML : </h2>
          <Progress done="70" />
        </div>
        <div>
          <h2 className="mr-4 font-bold">CSS : </h2>
          <Progress done="70" />
        </div>
        <div>
          <h2 className="mr-4 font-bold">JavaScript : </h2>
          <Progress done="60" />
        </div>
        <div>
          <h2 className="mr-4 font-bold">Bootstrap : </h2>
          <Progress done="50" />
        </div>
        <div>
          <h2 className="mr-4 font-bold">Tailwind : </h2>
          <Progress done="60" />
        </div>
        <div>
          <h2 className="mr-4 font-bold">MaterialUI : </h2>
          <Progress done="50" />
        </div>
        <div>
          <h2 className="mr-4 font-bold">ReactJS : </h2>
          <Progress done="60" />
        </div>
        <div>
          <h2 className="mr-4 font-bold">ExpressJS : </h2>
          <Progress done="40" />
        </div>
        <div>
          <h2 className="mr-4 font-bold">MongoDB : </h2>
          <Progress done="40" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
