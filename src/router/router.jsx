import { createBrowserRouter } from "react-router-dom";
import Cities from "../pages/Cities.jsx";
import Layouts from "../layouts/Layouts.jsx";
import Welcome from "../pages/Welcome.jsx";
import Details from "../pages/CityDetails.jsx";
import SignUp from "../pages/SignUp.jsx";
import SignIn from "../pages/SignIn";
import ItineraryCity from "../components/CityItinerary.jsx"
import NotFound from "../components/NotFound.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/cities", element: <Cities /> },
      { path: "/cities/:id", element: <Details /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signIn", element: (<ProtectedRoute path='/'><SignIn/></ProtectedRoute>) },
      { path: "/itineraries/:id", element: <ItineraryCity /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
