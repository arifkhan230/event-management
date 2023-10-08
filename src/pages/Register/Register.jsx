import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Register = () => {

    const [success,setSuccess] = useState('')
    const [registerError, setRegisterError] = useState('')

    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name,email,photo,password,confirmPassword);

        // clear success and registerError 
        setSuccess('')
        setRegisterError('')

        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setRegisterError('please provide a valid email')
        }

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            setRegisterError('Your password should have Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:')
            return;
        }
        else if(password !== confirmPassword){
            setRegisterError('password dosent match')
            return;
        }

        // reset field
        e.target.reset()
        
        
        // create user with email password
        createUser(email,password)
        .then(result => {
            console.log(result.user)
            setSuccess('You have registered successfully')
        })
        .catch(error=>{
            console.log(error)
            setRegisterError(error.message)
        })

    }


    return (
        <div className="max-w-[1440px] flex justify-center mx-auto mt-20 mb-10">
            <div className="card flex-shrink-0 lg:w-2/5 border rounded-none shadow-xl py-6 ">
                <h2 className="text-4xl font-bold text-blue-400 text-center p-4">Register Now!</h2>
                <form onSubmit={handleRegister} className="card-body ">
                    <div className="form-control">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input placeholder:text-black bg-gray-200 mb-4"
                            required />
                    </div>
                    <div className="form-control">

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input placeholder:text-black bg-gray-200 mb-4"
                            required />
                    </div>
                    <div className="form-control">

                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo Url"
                            className="input placeholder:text-black bg-gray-200 mb-4"
                            required />
                    </div>
                    <div className="form-control">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input bg-gray-200 mb-4 placeholder:text-black"
                            required />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="input bg-gray-200 mb-4 placeholder:text-black"
                            required />
                        
                    </div>
                    <div className="form-control">
                        <button className="btn hover:bg-blue-400 bg-blue-600 text-white">Register</button>
                    </div>
                    <div className='mt-4'>
                        {
                            setSuccess && <p className='text-green-600'>{success}</p>
                        }
                        {
                            registerError && <p className='text-red-400'>{registerError}</p>
                        }
                    </div>
                   
                    <p className="text-lg font-medium mt-4">Already have an account? Please <Link to="/login" className="text-blue-800 underline">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;