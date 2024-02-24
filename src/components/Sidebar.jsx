"use client"
import Link from "next/link";

import { TbMusicQuestion } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { MdQueueMusic } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "./auth/AuthProvider";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const Sidebar = () => {
  const {user, logOut} = useContext(AuthContext)
const homeRouters = useRouter();

  //logout function 
  
const handleLogout = () => {
  try {
   logOut();
   homeRouters.push("/")
      toast.success('Sign out successful');
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Sign out failed. Please try again.');
    }
  }

  return (
    <div className="w-48 mx-auto ">
    <div className=" bg-gray-600 pt-10 pl-5 min-h-screen">
      <header className="pb-10">
        <h1 className="flex items-center gap-1"><TbMusicQuestion /> Fauget</h1>
      </header>
      <p className="pb-5 flex items-center gap-1"> Manu</p>
      <nav>
        <ul>
          <li><Link href="/" className="flex items-center gap-1"> <IoHome /> Home</Link></li>
          <li><Link href="/podcast" className="flex items-center gap-1 py-2"><TbMusicQuestion /> Podcast</Link></li>    
          <li><Link href="/setting" className="flex items-center gap-1 pb-10"><IoSettings /> Setting</Link></li>
{
  user ? 
  <li><button onClick={handleLogout} className="flex items-center gap-1 pb-10"><LuLogOut /> Logout</button></li>
  : " "
}

        <hr/>
         <li className="pt-10 pb-5">My Playlist</li>
         <li className="flex items-center gap-1"> <MdQueueMusic /> Playlist #A</li>
         <li className="flex items-center gap-1 py-2"> <MdQueueMusic /> Playlist #B</li>
         <li className="flex items-center gap-1"> <MdQueueMusic /> Playlist #C</li>
         <li className="flex items-center gap-1 py-2"> <MdQueueMusic /> Add New +</li>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default Sidebar;
