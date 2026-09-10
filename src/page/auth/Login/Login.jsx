import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hook/useAuth';
import { NavLink } from 'react-router';
import GoogleLogin from '../../../Compnent/GoogleLogin/GoogleLogin';

const Login = () => {
  const {register,handleSubmit, formState:errors}=useForm()
  const {LoginUser}=useAuth()
  const handleLogin=(data)=>{
    LoginUser(data.email,data.password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error)
    })
  }
    return (
       <div className="card mt-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div onSubmit={handleSubmit(handleLogin)} className=''>
                 <div >
                    <h1 className='text-3xl font-bold text-center mt-5'>Welcome Back</h1>
                  <p className=' font-bold text-center mt-3'>Login with ZapShift</p>
      <div className="card-body">
        <form className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
          {
            errors.email?.type==='required' && <p className='text-red-500 '>Email is required</p>
          }
          {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,minLength:6})} className="input" placeholder="Password" />
          {
            errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>

          }
          {
            errors.password?.type === 'minLength' && <p>Password must br 6 character</p>
          }
         
          <button className="btn btn-primary text-secondary font-bold mt-4">Login</button>
        </form>
        <p>Don’t have any account? <NavLink to='/register' className='text-primary' >Register</NavLink> </p>
         <div className='text-center  w-full'>
        <GoogleLogin></GoogleLogin>
      </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Login;