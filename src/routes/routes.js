import { createBrowserRouter } from "react-router-dom";
import About from "../components/layouts/About";
import Contact from "../components/layouts/Contact";
import App from "../App";
import Home from "../components/layouts/Home";
import Admin from "../components/admin/Admin";
import UserRegister from "../components/user-register/UserRegister";
import UserLogin from "../components/user-login/UserLogin";

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
    element: <Admin />,
  },
  {
    path: "/registro",
    element: <UserRegister />,
  },
  {
    path: "/login",
    element: <UserLogin />, 
  }
]);

export default router;
