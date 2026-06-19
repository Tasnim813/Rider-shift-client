import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../hook/useAuth';
import { toast } from 'react-toastify';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const {registerUser}=useAuth()
    const handleRegister=(data)=>{
        console.log(data)
        registerUser(data.email,data.password)
        .then(result=>{
          console.log(result)
          toast.success('Register successfully')
        })
    }
    return (
      <div className="card bg-base-100 mx-auto shadow-2xl w-full max-w-sm shrink-0 pt-5">
             <form  onSubmit={handleSubmit(handleRegister)} >
               <h1 className='text-3xl text-center font-bold'>Create an Account</h1>
                <p className='text-xl  text-center'>Register with ZapShift</p>
      <div className="card-body">
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
          {
            errors.email?.type==='required' && <p className="text-red-500">Email is required</p>
          }
          {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register("password",
            {required:true, minLength:6}
            )} className="input" placeholder="Password" />
            {
                errors.password?.type==='required' && <p className="text-red-500"> Password is required</p>
            }
            {
                errors.password?.type==='minLength' && <p className="text-red-500">Password must be 6 character</p>   

            }

            
      <p>Already have an account? <Link
       to="/login"className='text-green-500' > Login</Link></p> 
         
          <button className="btn btn-neutral mt-4">Register</button>  
        </fieldset>
      </div>
    </form>
    <GoogleLogin></GoogleLogin>


        </div>
    );
};

export default Register;