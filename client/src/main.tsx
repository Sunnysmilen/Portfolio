// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import App from "./App";
import ContactForm from "./components/SinglePage/ContactForm";
import SinglePage from "./pages/SinglePage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [{ path: "/", element: <SinglePage /> }],
  },
  { path: "/contact", element: <ContactForm /> },
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
