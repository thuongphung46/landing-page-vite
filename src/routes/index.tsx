import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/templates/root_layout/RootLayout";
import React from "react";
import { PageHome } from "../pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: < />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
    ],
  },
]);

export { router };
