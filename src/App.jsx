import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HITO Canxi Center</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
