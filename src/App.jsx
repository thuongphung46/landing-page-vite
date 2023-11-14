import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
