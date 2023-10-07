import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: () => fetch('services.json')
            }
        ]
    }
])

export default router;