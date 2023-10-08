import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import userLogo from "../../assets/profile-user.png"


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
    </>

    const handleLogOut = () =>{
        console.log('click hoisi')
        logOut()
        .then(result =>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }


    return (
        <div className="navbar max-w-[1440px] mx-auto py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">ET EVENTS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            
            <div className="navbar-end">
            {
                user ? <>
                <p className="text-bold text-xl mr-2">{user.displayName}</p>
                 <img className="w-[35px] h-[35px] rounded-full mr-2" src={user.photoURL ? user.photoURL : userLogo} alt="" />
                 <button onClick={handleLogOut} className="btn btn-sm btn-info">LogOut</button>
                </> :
                <Link to="/login"><button className="btn btn-sm btn-info">Login</button></Link>
            }
                
            </div>
        </div>
    );
};

export default Navbar;