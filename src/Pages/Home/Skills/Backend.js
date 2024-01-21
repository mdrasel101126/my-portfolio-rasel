import React from "react";
import JavaScriptImage from "../../../Images/javascript-original.svg";
import TypescriptImage from "../../../Images/typescript-original.svg";
import nodeImage from "../../../Images/nodejs-original.svg";
import expressImage from "../../../Images/express.svg";
import mongoDBImage from "../../../Images/MongoDB.svg";
import mongooseImage from "../../../Images/mongoose.png";
import postgreSQLImage from "../../../Images/postgresql-original.svg";
import prismaImage from "../../../Images/Prisma.svg";
import redisImage from "../../../Images/redis.png";
const Backend = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col justify-center items-center m-5">
        <img
          src={JavaScriptImage}
          className="w-12 h-12"
          alt="JavaScriptImage"
        />
        <h3 className="text-xl font-bold text-primary">Javascript</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img
          src={TypescriptImage}
          className="w-12 h-12"
          alt="TypescriptImage"
        />
        <h3 className="text-xl font-bold text-primary">Typescript</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={nodeImage} className="w-12 h-12" alt="nodeImage" />
        <h3 className="text-xl font-bold text-primary">NodeJs</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={expressImage} className="w-12 h-12" alt="expressImage" />
        <h3 className="text-xl font-bold text-primary">ExpressJs</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={mongoDBImage} className="w-12 h-12" alt="mongoDBImage" />
        <h3 className="text-xl font-bold text-primary">MongoDB</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={mongooseImage} className="w-12 h-12" alt="mongooseImage" />
        <h3 className="text-xl font-bold text-primary">Mongoose</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img
          src={postgreSQLImage}
          className="w-12 h-12"
          alt="postgreSQLImage"
        />
        <h3 className="text-xl font-bold text-primary">PostgreSQL</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={prismaImage} className="w-12 h-12" alt="prismaImage" />
        <h3 className="text-xl font-bold text-primary">Prisma</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={redisImage} className="w-12 h-12" alt="redisImage" />
        <h3 className="text-xl font-bold text-primary">Redis</h3>
      </div>
    </div>
  );
};

export default Backend;
