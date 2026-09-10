import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hook/useAuth';
import { NavLink } from 'react-router';
import GoogleLogin from '../../../Compnent/GoogleLogin/GoogleLogin';


const Register = () => {
    const {register,handleSubmit ,formState:{errors}}=useForm()
   const {registerUser}=useAuth()
    const handleRegister=(data)=>{
        console.log(data)
        registerUser(data.email,data.password)
        .then(result=>{
          console.log(result.user)
        })
        .then(error=>{
          console.log(error)
        })
       
    }
    return (
        <div>
            <div className=''>
                 <div className="card mt-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <h1 className='text-3xl font-bold text-center mt-5'>Create an Account</h1>
                  <p className=' font-bold text-center mt-3'>Register with ZapShift</p>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegister)}  className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
          {
            errors.email?.type=== 'required' && <p className='text-red-500'>Email is required</p>
          }
          {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,minLength:6})} className="input" placeholder="Password" />
          {
            errors.password?.type=== 'required' && <p className='text-red-500'>Password is required</p>
          }
         
         {
            errors.password?.type ==='minLength' && <p className='text-red-500'>Password is must 6 Character</p>
         }
          <button className="btn btn-primary font-bold text-secondary mt-4">Register</button>
          
        </form>
        <p>Already have an account? <NavLink to='/login' className="text-primary" >Login</NavLink> </p>
        <div className='text-center  w-full'>
        <GoogleLogin></GoogleLogin>
      </div>
      </div>
     
    </div>
            </div>
             
        </div>
    );
};

export default Register;