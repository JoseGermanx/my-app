

import { createBrowserRouter } from "react-router-dom";
import Home from "../components/layouts/Home";
import About from "../components/layouts/About";
import Contact from "../components/layouts/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]);

export default router;