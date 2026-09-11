import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../Firebase/firebaseInit';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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
    const LogOut=()=>{
        setLoading(true)
        return signOut(auth)

    }
    const UpdateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    // observe use state
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, (CurrentUser)=>{
            setUser(CurrentUser)
            setLoading(false)

        })
        return ()=>{
            unSubscribe()
        }

    } ,[])

   
    const authInfo={
        registerUser,
        LoginUser,
        LoginGoogle,
        user,
        loading,
        LogOut,
        UpdateUserProfile
       
       

    }
    return (
        <AuthContext value={authInfo}>
            {children}

        </AuthContext>
    );
};

export default AuthProvider;