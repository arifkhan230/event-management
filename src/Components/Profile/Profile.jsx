import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className="max-w-[1440px] lg:mx-auto mt-20 flex flex-col justify-center items-center ">
            <div className="border-2 flex flex-col w-full h-[50vh] lg:w-2/5 md:h-[500px] bg-blue-400 rounded-xl items-center justify-center">
                <img className="h-60 w-60 mb-6 rounded-full" src={user.photoURL} alt="" />
                <h2 className="text-lg font-medium mb-2">User: {user.displayName}</h2>
                <p className="text-lg font-medium">Email: {user.email}</p>
            </div>
        </div>
    );
};

export default Profile;