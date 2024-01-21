import React from "react";
import gitImage from "../../../Images/git-original.svg";
import githubImage from "../../../Images/github.png";
import fireBaseImage from "../../../Images/firebase-plain.svg";
import netlifyIamage from "../../../Images/netlify.png";
import vercelImage from "../../../Images/vercel.svg";
const Tools = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col justify-center items-center m-5">
        <img src={gitImage} className="w-12 h-12" alt="gitImage" />
        <h3 className="text-xl font-bold text-primary">Git</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={githubImage} className="w-12 h-12" alt="githubImage" />
        <h3 className="text-xl font-bold text-primary">Github</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={fireBaseImage} className="w-12 h-12" alt="fireBaseImage" />
        <h3 className="text-xl font-bold text-primary">Firebase</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={netlifyIamage} className="w-12 h-12" alt="netlifyIamage" />
        <h3 className="text-xl font-bold text-primary">Netlify</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={vercelImage} className="w-12 h-12" alt="vercelImage" />
        <h3 className="text-xl font-bold text-primary">Vercel</h3>
      </div>
    </div>
  );
};

export default Tools;
