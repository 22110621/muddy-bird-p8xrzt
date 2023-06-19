import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Projects from "./projects.jsx";
import Navigation from "./navigation.jsx";
import Footer from "./footer.jsx";
import Project from "./viewProject.jsx";
import NotFound from "./notFound.jsx";
import Accessibility from "./components/sidebar.jsx";
import Mission from "./mission.jsx";
import Networking from "./networking.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:project",
    element: <Project />,
    errorElement: <NotFound />,
  },
  {
    path: "/it/mission",
    element: <Mission />,
  },
  {
    path: "/it/networking",
    element: <Networking />,
  },
]);

function Routing() {
  localStorage.getItem("data-theme")
    ? document.body.setAttribute(
        "data-theme",
        localStorage.getItem("data-theme")
      )
    : document.body.removeAttribute("data-theme");

  return (
    <React.StrictMode>
      <Navigation />
      <RouterProvider router={router} />
      <Accessibility />
      <Footer />
    </React.StrictMode>
  );
}

export default Routing;
