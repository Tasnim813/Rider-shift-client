import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {register,handleSubmit}=useForm()

   
    return (
        <div>
             <form  className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register("password")} className="input" placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </form>
        </div>
    );
};

export default Login;