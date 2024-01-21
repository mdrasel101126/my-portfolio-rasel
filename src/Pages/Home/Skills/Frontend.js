import htmlImage from "../../../Images/html.svg";
import cssImage from "../../../Images/css3.svg";
import JavaScriptImage from "../../../Images/javascript-original.svg";
import TypescriptImage from "../../../Images/typescript-original.svg";
import reactImage from "../../../Images/react-original.svg";
import nextImage from "../../../Images/NextJS-Dark.svg";
import tailwindImage from "../../../Images/tailwindcss-plain.svg";
import bootstrapImage from "../../../Images/bootstrap-original.svg";
import materialUIImage from "../../../Images/materialui-original.svg";
import antDesignImage from "../../../Images/KDpgvguMpGfqaHPjicRK.svg";
import reduxImage from "../../../Images/redux-original.svg";

const Frontend = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col justify-center items-center m-5">
        <img src={htmlImage} className="w-12 h-12" alt="html" />
        <h3 className="text-xl font-bold text-primary">HTML</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={cssImage} className="w-12 h-12" alt="css" />
        <h3 className="text-xl font-bold text-primary">CSS</h3>
      </div>
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
        <img src={reactImage} className="w-12 h-12" alt="reactImage" />
        <h3 className="text-xl font-bold text-primary">ReactJs</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={nextImage} className="w-12 h-12" alt="nextImage" />
        <h3 className="text-xl font-bold text-primary">NextJs</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={tailwindImage} className="w-12 h-12" alt="tailwindImage" />
        <h3 className="text-xl font-bold text-primary">Bootstrap</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={bootstrapImage} className="w-12 h-12" alt="bootstrapImage" />
        <h3 className="text-xl font-bold text-primary">Bootstrap</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img
          src={materialUIImage}
          className="w-12 h-12"
          alt="materialUIImage"
        />
        <h3 className="text-xl font-bold text-primary">MUI</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={antDesignImage} className="w-12 h-12" alt="antDesignImage" />
        <h3 className="text-xl font-bold text-primary">Ant Design</h3>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <img src={reduxImage} className="w-12 h-12" alt="reduxImage" />
        <h3 className="text-xl font-bold text-primary">Redux</h3>
      </div>
    </div>
  );
};

export default Frontend;
