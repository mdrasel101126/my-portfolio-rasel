import React from "react";
import { useRouteError } from "react-router-dom";
import notFoundLogo from "../../Images/page-not-found.png";

const DisplayError = () => {
  const error = useRouteError();

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="text-center">
        {" "}
        <img
          className="max-w-xs h-auto rounded-full"
          src={notFoundLogo}
          alt=""
        />
        <p>Sorry, Something Went Wrong</p>
        <p className="text-red-600 font-semibold">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default DisplayError;
