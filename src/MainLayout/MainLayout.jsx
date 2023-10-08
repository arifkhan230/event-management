import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider/AuthProvider";


const MainLayout = () => {
    // const {loading} = useContext(AuthContext)
    // if(loading){
    //     return <span className="loading loading-spinner loading-lg mt-40 ml-40"></span>
    // }
    
    return (
        <div className="font-roboto"> 
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;