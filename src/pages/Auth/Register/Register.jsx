import React from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hook/useAuth';
import { toast } from 'react-toastify';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const {registerUser,updateUserProfile}=useAuth()
    const location=useLocation()

    const navigate=useNavigate()
    const handleRegister=(data)=>{
        console.log('after register',data.photo[0])
        const profileImg=data.photo[0];
        registerUser(data.email,data.password)
        .then(result=>{
          console.log(result)
          toast.success('Register successfully')
          // Store the image get photoURL
          const formData=new FormData()
          formData.append('image',profileImg);
          const image_API_URL=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`

          axios.post(image_API_URL,formData)
          .then(res=>{
            console.log("after Image upload",res.data.data.display_url)
            // update user Profile
            const userProfile={
              displayName:data.name,
              photoURL:res.data.data.display_url,
            }
            updateUserProfile(userProfile)
            .then(()=>{
              console.log("User profile updated done")
              navigate(location.state || '/')
            })
            .catch(error=>{
              console.log(error)
            })

          })

          
        })
    }
    return (
      <div className="card bg-base-100 mx-auto shadow-2xl w-full max-w-sm shrink-0 pt-5">
             <form  onSubmit={handleSubmit(handleRegister)} >
               <h1 className='text-3xl text-center font-bold'>Create an Account</h1>
                <p className='text-xl  text-center'>Register with ZapShift</p>
      <div className="card-body">
        <fieldset className="fieldset">
            {/* Name*/}
          <label className="label">Name</label>
          <input type="text" {...register('name',{required:true})} className="input" placeholder="Your Name" />
          {
            errors.name?.type==='required' && <p className="text-red-500">Name is required</p>
          }
            {/* Image */}
          <label className="label">Your photo</label>
          <input type="file" {...register('photo',{required:true})} className="file-input" placeholder="Your photo" />
          {
            errors.photo?.type==='required' && <p className="text-red-500">Photo is required</p>
          }
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

            
      <p>Already have an account? <Link state={location.state}
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