import { createBrowserRouter } from "react-router-dom";
import Cities from "../pages/Cities";
import Layouts from "../layouts/Layouts";
import Welcome from "../pages/Welcome";

const router = createBrowserRouter([
 {  path: '/', 
    element: <Layouts/> , 
    children:[
    {   path: '/', element: <Welcome />  },
    {  path: '/cities', element: <Cities /> },
    {  path:'*', element: <h1 className="bg-black text-white text-center drop-shadow-lightShadow">Error Page</h1> }
    ]},
])
export default router;