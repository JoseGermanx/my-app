import { createBrowserRouter } from "react-router-dom";
import About from "../components/layouts/About";
import Contact from "../components/layouts/Contact";
import App from "../App";
import Home from "../components/layouts/Home";
import Admin from "../components/admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />
  }
]);

export default router;
