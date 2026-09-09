import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hook/useAuth';
import { NavLink } from 'react-router';

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
       <div>
            <form onSubmit={handleSubmit(handleLogin)} className=''>
                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
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
         
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>plaese <NavLink to='/register'>Register</NavLink> </p>
      </div>
    </div>
            </form>
        </div>
    );
};

export default Login;