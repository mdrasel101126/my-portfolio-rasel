import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import DisplayError from "../Pages/DisplayError/DisplayError";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/ProductDetails/ProjectDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

export default routes;
