
"use client"
import { useContext, useState } from "react";

import { AuthContext } from "../auth/AuthProvider";
import Link from "next/link";
import { GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { TbMusicQuestion } from "react-icons/tb";

const Login = () => {
    
    // console.log(location);
    const home = useRouter();
    const {googleLogin, userLogin} = useContext(AuthContext);
    const [loginError,setLoginError]= useState("");

    const provider = new GoogleAuthProvider();

    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value ;
    
        setLoginError("");
         userLogin(email,password)
         .then(result =>{
          console.log(result.user)
          toast.success('log in successfull')
          home.push('/')
         })
         .catch(error=>{
          console.error(error)
          setLoginError("opps...! Invalid email or password")
         })
    
    }
    
       const handlegooleLogIn=()=>{
          googleLogin(provider)
          .then(result => {
            console.log(result.user)
            toast.success("good job ! log in successfull ")
            home.push('/')
          })
          .catch(error =>{
            console.error(error)
          })
    
       }
    return (
        <div>
             
  <div className="pt-12">

    <div className="bg-gray-600 w-[30%] mx-auto ">
      <h1 className="flex justify-center items-center gap-2 text-2xl pt-5"> <TbMusicQuestion  />Fauget</h1>
      <h1 className="text-center text-xl pt-3">Sign <br /> or</h1>
      <Link href="/" className="flex items-center justify-center">Go Back to home</Link>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered text-white bg-black" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered text-white bg-black" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white hover:bg-gray-600">Login</button>
        </div>
        <p className="text-red-500 font-bold">{loginError}</p>
        <button onClick={handlegooleLogIn} className="btn">Go with google</button>
      </form>
      <p className="text-black text-center">If you are new here! <Link href='/signup' className="text-black font-bold" >Register</Link></p>
    </div>
  </div>

        </div>
    );
};

export default Login;