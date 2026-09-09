import React from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../Firebase/firebaseInit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const AuthProvider = ({children}) => {
   
    const registerUser=(email,password)=>{
        return  createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

   
    const authInfo={
        registerUser,
        LoginUser
       
       

    }
    return (
        <AuthContext value={authInfo}>
            {children}

        </AuthContext>
    );
};

export default AuthProvider;