"use client"
import { useContext } from "react";
// import { AuthContext } from "./Authprovider";
import { useRouter } from "next/navigation";
import { AuthContext } from "../auth/AuthProvider";



const Privet = ({children}) => {
    
    const home = useRouter();
    const {user,loading}= useContext(AuthContext);
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    
  if(user){
    return children;
}

 return home.push("/signin");

};

export default Privet;