import { createBrowserRouter } from "react-router-dom";
import Cities from "../pages/Cities";
import Layouts from "../layouts/Layouts";
import Welcome from "../pages/Welcome";
import Details from "../pages/CityDetails";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/cities", element: <Cities /> },
      { path: "/cities/:id", element: <Details /> },
      { path: "/signIn", element: <SignIn /> },
      {
        path: "*",
        element: (
          <h1 className="bg-black text-white text-center drop-shadow-lightShadow">
            Error Page
          </h1>
        ),
      },
    ],
  },
]);
export default router;
