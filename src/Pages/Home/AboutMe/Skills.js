import React from "react";
import Progress from "./Progress/Progress";

const Skills = () => {
  return (
    <div>
      <h1 className="text-4xl text-center text-primary font-bold">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <p className="mr-4 font-bold">HTML : </p>
          <Progress done="70" />
        </div>
        <div>
          <p className="mr-4 font-bold">CSS : </p>
          <Progress done="70" />
        </div>
        <div>
          <p className="mr-4 font-bold">JavaScript : </p>
          <Progress done="60" />
        </div>
        <div>
          <p className="mr-4 font-bold">Bootstrap : </p>
          <Progress done="50" />
        </div>
        <div>
          <p className="mr-4 font-bold">Tailwind : </p>
          <Progress done="60" />
        </div>
        <div>
          <p className="mr-4 font-bold">MaterialUI : </p>
          <Progress done="50" />
        </div>
        <div>
          <p className="mr-4 font-bold">ReactJS : </p>
          <Progress done="60" />
        </div>
        <div>
          <p className="mr-4 font-bold">ExpressJS : </p>
          <Progress done="40" />
        </div>
        <div>
          <p className="mr-4 font-bold">MongoDB : </p>
          <Progress done="40" />
        </div>
        <div>
          <p className="mr-4 font-bold">Mongoose : </p>
          <Progress done="50" />
        </div>
        <div>
          <p className="mr-4 font-bold">Typescript : </p>
          <Progress done="40" />
        </div>
        <div>
          <p className="mr-4 font-bold">PostgreSQL : </p>
          <Progress done="50" />
        </div>
        <div>
          <p className="mr-4 font-bold">Prisma : </p>
          <Progress done="50" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
