import React from "react";
import { FaCode } from "react-icons/fa";

const Service = () => {
  return (
    <div id="services" className="my-8">
      <h2 className="text-primary text-4xl text-center font-bold">Services</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        <div className="w-full md:w-80 p-8 shadow-xl rounded-md">
          <h3 className="text-xl font-bold text-center">
            Frontend Development
          </h3>
          <FaCode className="text-7xl mx-auto" />
          <p className="font-semibold text-justify">
            I convert any Figma or PSD file to HTML.I convert webpage to ReactJS
            and NextJs also. I am comfortable in Tailwind and Bootstrap. I also
            use Material UI and AntDesign.
          </p>
        </div>
        <div className="w-full md:w-80 p-8 shadow-xl rounded-md">
          <h3 className="text-xl font-bold text-center">Backend Development</h3>
          <FaCode className="text-7xl mx-auto" />
          <p className="font-semibold text-justify">
            I create REST API using NodeJS. I use both NoSQL and SQL database to
            store data. I am comfortable in Mongoose for MongoDB and Prisma for
            PostgreSQL.
          </p>
        </div>
        <div className="w-full md:w-80 p-8 shadow-xl rounded-md">
          <h3 className="text-xl font-bold text-center">
            Full Stack Development
          </h3>
          <FaCode className="text-7xl mx-auto" />
          <p className="font-semibold text-justify">
            I convert any Figma or PSD file to HTML. I convert webpage to
            ReactJS and NextJs also. I create Backend APIs using NodeJs. I use
            both NoSQL and SQL database to store data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
