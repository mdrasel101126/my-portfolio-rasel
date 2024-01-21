import React, { useState } from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";

const Skills = () => {
  const [content, setContent] = useState(1);
  return (
    <div>
      <h1 className="text-4xl text-center text-primary font-bold">Skills</h1>
      <div className="text-center my-4">
        <button
          onClick={() => setContent(1)}
          className={`${
            content === 1 && "bg-orange-800"
          } btn btn-primary rounded-3xl px-8 text-white font-bold w-32 m-2`}
        >
          Frontend
        </button>
        <button
          onClick={() => setContent(2)}
          className={`${
            content === 2 && "bg-orange-800"
          }  btn btn-primary rounded-3xl px-8 text-white font-bold w-32 m-2`}
        >
          Backend
        </button>
        <button
          onClick={() => setContent(3)}
          className={`${
            content === 3 && "bg-orange-800"
          }  btn btn-primary rounded-3xl px-8 text-white font-bold w-32 m-2`}
        >
          Tools
        </button>
      </div>
      <div>
        {content === 1 && <Frontend />}
        {content === 2 && <Backend />}
        {content === 3 && <Tools />}
      </div>
    </div>
  );
};

export default Skills;

/*  return (
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
  ); */
