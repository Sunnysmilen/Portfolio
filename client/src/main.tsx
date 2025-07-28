// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import App from "./App";
import ContactForm from "./pages/ContactForm";
import Experiences from "./pages/Experiences";
import Homepage from "./pages/Homepage";
import Presentation from "./pages/Presentation";
import Project from "./pages/Project";
import Technologies from "./pages/Technologies";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/presentation", element: <Presentation /> },
      { path: "/projets", element: <Project /> },
      { path: "/contact", element: <ContactForm /> },
      { path: "/technologies", element: <Technologies /> },
      { path: "/experiences", element: <Experiences /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
