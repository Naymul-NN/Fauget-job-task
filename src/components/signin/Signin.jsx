
"use client"
import { useContext, useState } from "react";

import { AuthContext } from "../auth/AuthProvider";
import Link from "next/link";
import { GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
             
  <div className="pt-20">

    <div className="bg-gray-400 w-1/3 mx-auto ">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered text-black" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-red-500 font-bold">{loginError}</p>
        <button onClick={handlegooleLogIn} className="btn">Go with google</button>
      </form>
      <p className="text-black text-center">If you are new here! <Link href='/signup' className="text-green-800 font-bold" >Register</Link></p>
    </div>
  </div>

        </div>
    );
};

export default Login;