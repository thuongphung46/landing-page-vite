import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/templates/root_layout/RootLayout";
import React from "react";
import { PageHome } from "../pages/HomePage";
import { PageExercise } from "../pages/ExercisePage";
import { PageNews } from "../pages/News";
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
      {
        path: "/exercise",
        element: <PageExercise />,
      },
      {
        path: "/news",
        element: <PageNews />,
      },
    ],
  },
]);

export { router };
