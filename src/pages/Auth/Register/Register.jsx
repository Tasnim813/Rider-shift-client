import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const handleRegister=(data)=>{
        console.log(data)
    }
    return (
      <div>
             <form  onSubmit={handleSubmit(handleRegister)} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
         
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
    </form>
        </div>
    );
};

export default Register;