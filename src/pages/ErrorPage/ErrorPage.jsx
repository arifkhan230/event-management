import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-4">
            <h2 className="text-5xl font-bold text-red-500">Error 404!</h2>
            <p className="text-3xl text-amber-400">Page not Found</p>
            <Link className="btn btn-error" to="/">Go Home</Link>
        </div>
    );
};

export default ErrorPage;