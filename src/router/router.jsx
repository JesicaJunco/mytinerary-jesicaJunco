import { createBrowserRouter } from "react-router-dom";
import Cities from "../pages/Cities";
import Layouts from "../layouts/Layouts";
import Welcome from "../pages/Welcome";
import Details from "../pages/CityDetails";
import Login from "../pages/Login.jsx";
import SignIn from "../pages/SignIn";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/cities", element: <Cities /> },
      { path: "/cities/:id", element: <Details /> },
      { path:'/login', element: <Login/> },
      { path: "/signIn", element: <SignIn /> },
      {
        path: "*",
        element: (
          
          <NotFound/>
          
        ),
      },
    ],
  },
]);
export default router;
