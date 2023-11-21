import { createBrowserRouter } from "react-router-dom";
import About from "../components/layouts/About";
import Contact from "../components/layouts/Contact";
import App from "../App";
import Home from "../components/layouts/Home";
import Admin from "../components/admin/Admin";
import UserRegister from "../components/user-register/UserRegister";
import UserLogin from "../components/user-login/UserLogin";
import FetchComponent from "../components/caso-fetch/FetchComponent";
import RickFetch from "../components/rick-and-morty/RickFetch";

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
  },
  {
    path:"/fetch",
    element: <FetchComponent />,  
  },
{
  path:"/rick",
  element: <RickFetch />,
}
]);

export default router;
