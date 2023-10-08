
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase.config';


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading ,setLoading] = useState(true);

    const signInGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // observing user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser ) =>{
                setUser(currentUser)
                setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[auth])
    console.log(user)

    const authInfo={
       signInGoogle,
       createUser,
       logIn,
       user,
       logOut,
       loading
    }


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
    
};

export default AuthProvider;