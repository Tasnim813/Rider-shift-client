import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hook/useAuth';
import { NavLink, useLocation, useNavigate } from 'react-router';
import GoogleLogin from '../../../Compnent/GoogleLogin/GoogleLogin';
import axios from "axios";

const Register = () => {
    const {register,handleSubmit ,formState:{errors}}=useForm()
   const {registerUser,UpdateUserProfile}=useAuth()
   const location =useLocation()
   const navigate=useNavigate()
   console.log('In the location ',location)
    const handleRegister=(data)=>{
        console.log('after register', data.photo[0])
        const profileImg=data.photo[0]
        registerUser(data.email,data.password)
        .then(result=>{
          console.log(result.user)
          // store the img and get url
          const formData=new FormData();
          formData.append('image', profileImg)
          const ImageAPIURL=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_URL}`
          axios.post(ImageAPIURL,formData)
          .then(res=>{
            console.log("After Image Upload",res.data.data.url)
            // update user profile
            const userProfile={
              displayName: data.name,
              photoURL:res.data.data.url
            }
            UpdateUserProfile(userProfile)
            .then(()=>{
              console.log('USer Profile updated done')
              navigate(location?.state || '/')
            })
            .catch(error=>{
              console.log(error)
            })
          })
          
          
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
            {/* Name */}
          <label className="label">Name</label>
          <input type="text" {...register('name',{required:true})} className="input" placeholder="Name" />
          {
            errors.name?.type=== 'required' && <p className='text-red-500'>Name is required</p>
          }
            {/* photo*/}
          <label className="label">Your Photo</label>
          <input type="file" {...register('photo',{required:true})} className="file-input" placeholder="Your Photo" />
          {
            errors.photo?.type=== 'required' && <p className='text-red-500'>Photo is required</p>
          }
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
        <p>Already have an account? <NavLink state={location.state} to='/login' className="text-primary" >Login</NavLink> </p>
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