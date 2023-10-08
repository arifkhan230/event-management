import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRout/PrivateRoute";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import UpcomingEvent from "../Components/UpcomingEvent/UpcomingEvent";
import Profile from "../Components/Profile/Profile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/upcomingEvent',
                element: <PrivateRoute><UpcomingEvent></UpcomingEvent></PrivateRoute>,
                loader:()=> fetch('/event.json')
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('/blog.json')
            },
            {
                path: '/about',
                element:<About></About>,
                loader: ()=> fetch('/about.json')
            },
            {
                path: '/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])

export default router;