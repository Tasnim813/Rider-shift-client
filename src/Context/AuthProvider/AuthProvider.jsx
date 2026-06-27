import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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
     const LogOut=()=>{
        setLoading(true)
        return signOut(auth)
     }
     const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
     } 
    
        //  observe user state
    useEffect(()=>{
        const unSubscribed=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)

        })
        return()=>{
            unSubscribed();
        }
    },[])
    const authInfo={
        user,
        loading,
        registerUser,
        signInUser,
        GoogleLogin,
        LogOut,
        updateUserProfile,
       
    }
    return (
        <AuthContext value={authInfo}>
            {children}

        </AuthContext>
    );
};

export default AuthProvider;