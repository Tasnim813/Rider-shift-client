import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../Firebase/firebaseInit';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
   
    const registerUser=(email,password)=>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const LoginGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // observe use state
    useEffect( ()=>{

    } ,[])

   
    const authInfo={
        registerUser,
        LoginUser,
        LoginGoogle,
        user,
        loading
       
       

    }
    return (
        <AuthContext value={authInfo}>
            {children}

        </AuthContext>
    );
};

export default AuthProvider;