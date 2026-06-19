import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
     const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
     const registerUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword( auth,email,password)
     }
     const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const GoogleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,GoogleProvider)
     }
    //  observe user state
    useEffect(()=>{
        
    },[])
    const authInfo={
        user,
        loading,
        registerUser,
        signInUser,
        GoogleLogin
    }
    return (
        <AuthContext value={authInfo}>
            {children}

        </AuthContext>
    );
};

export default AuthProvider;