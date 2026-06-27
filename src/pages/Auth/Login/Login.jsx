import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hook/useAuth';
import { toast } from 'react-toastify';
import { type } from 'firebase/firestore/pipelines';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const {signInUser}=useAuth()
    const location=useLocation()
    const navigate=useNavigate()
    
    const handleLogin=(data)=>{
        signInUser(data.email,data.password)
        .then(result=>{
            console.log(result)
            navigate(location?.state || '/')
            toast.success("Login Successfully")
        }).catch(error=>{
            console.log(error)
            toast.error("error")
        })


    }




   
    return (
        <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-5">
           
             <form onSubmit={handleSubmit(handleLogin)} >
                <h1 className='text-3xl text-center font-bold'>Welcome back</h1>
                <p className='text-xl text-center'>Please Login </p>
      <div className="card-body">
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
          {
            errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>
          }
          
          {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register("password",{required:true,minLength:6})} className="input" placeholder="Password" />
          {
            errors.password?.type==='required' && <p className='text-red-500'>
                Password is required
            </p>
          }
          {
            errors.password?.type==='minLength' && <p className='text-red-500'>Password must be 6 character</p>
          }

         

      <p>Don’t have any account? <Link state={location.state} to="/register" className='text-green-500'>Register</Link></p>
      
         
         
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </form>
    <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;