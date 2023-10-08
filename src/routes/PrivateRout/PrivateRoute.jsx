
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute =({children}) => {
    const {user, loading} = useContext(AuthContext)
    
    if(user){
        return children;
    }
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children:PropTypes.node
    
};

export default PrivateRoute;