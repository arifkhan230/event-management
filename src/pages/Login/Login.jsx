import { Link } from "react-router-dom";
import google from '../../assets/google.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";


const Login = () => {

    const [success, setSuccess] = useState('')
    const [logInError, setLogInError] = useState('')

    const { signInGoogle, logIn } = useContext(AuthContext);

    // clear success and error


    // sign with google
    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user)
                setSuccess('You have logged in successfully')
            })
            .catch(error => {
                console.log(error)
                setLogInError(error.message)
            })
    }

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset event and states
        setSuccess('')
        setLogInError('')
        e.target.reset()

        // login with email password
        logIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('You have logged in successfully')
            })
            .catch(error => {
                console.log(error)
                setLogInError(error.message)
            })

    }
    return (
        <div className="max-w-[1440px] flex justify-center mx-auto mt-20">
            <div className="card flex-shrink-0 lg:w-2/5 border rounded-none shadow-xl py-6 ">
                <h2 className="text-4xl font-bold text-blue-400 text-center p-4">Login Now!</h2>
                <form onSubmit={handleLogIn} className="card-body ">
                    <div className="form-control">

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="input placeholder:text-black bg-gray-200 mb-8"
                            required />
                    </div>
                    <div className="form-control">

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input bg-gray-200 placeholder:text-black"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt text-lg mt-4 mb-0 link link-hover text-blue-600">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn bg-blue-400">Login</button>
                    </div>
                    <div className="mt-4">
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                        {
                            logInError && <p className="text-red-400">{logInError}</p>
                        }
                    </div>
                    <div className="flex flex-col items-center  mt-4 gap-4 ">
                        <div onClick={handleGoogle} className="flex items-center border-2 rounded-full w-3/4  p-2">
                            <img className="w-[30px]" src={google} alt="" />
                            <p className="text-lg font-medium text-center">Continue With Google</p>
                        </div>
                    </div>
                    <p className="text-lg font-medium text-center mt-4">Do not have an account? Please <Link to="/register" className="text-blue-800 underline">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;