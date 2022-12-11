import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Spinner from "../Spinner/Spinner";

const ProjectDetails = () => {
  const { id } = useParams();
  const [spinner, setSpinner] = useState(true);
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    fetch(`https://my-portfolio-rasel-server.vercel.app/project/${id}`)
      .then((res) => res.json())
      .then((data) => {
        /*  console.log(data); */
        setDetail(data);
        setSpinner(false);
      })
      .catch((err) => {
        setSpinner(false);
        console.log(err);
      });
  }, [id]);

  return (
    <div className="my-12 w-11/12 mx-auto">
      {spinner && <Spinner></Spinner>}
      {detail && (
        <>
          <h1 className="text-4xl text-center text-primary font-bold ">
            {detail.name}
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Some Pictures of This Project
          </p>
          <div>
            <PhotoProvider>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {detail.imgaes.map((item, index) => (
                  <PhotoView key={index} src={item}>
                    <img
                      className="h-96 w-full shadow-xl border-2 border-secondary rounded-xl hover:cursor-pointer"
                      src={item}
                      alt=""
                    />
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
          </div>
          <div className="text-center my-8">
            <a
              href={detail.liveLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary text-white font-bold m-4"
            >
              Live Website
            </a>
            <a
              href={detail.clientSide}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary text-white font-bold m-4"
            >
              Client Side
            </a>
            <a
              href={detail.serverSide}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary text-white font-bold m-4"
            >
              Server Side
            </a>
          </div>
          <div className="my-12 ">
            <h3 className="text-2xl font-bold">Features:</h3>
            <ul className="list-disc ml-8">
              {detail.description.split(".").map((des, index) => (
                <li key={index}>{des}.</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Technologies:</h3>
            <ul className="list-disc ml-8">
              {detail.technologies.split(",").map((tec, index) => (
                <li key={index}>{tec}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
