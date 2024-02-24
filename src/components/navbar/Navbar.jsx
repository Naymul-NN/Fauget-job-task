"use client"
import React, { useContext } from 'react';

import Link from 'next/link';
import { AuthContext } from '../auth/AuthProvider';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='mr-10 py-10'>
            {/* RENDER NAVBAR BY USER */}
            {
                user ? <div className="flex justify-between items-center pl-56">
                    <h1 className='text-2xl'>Welcome,claudia Alvies</h1>
                    <div className='flex items-center'>
                        <div className="form-control relative">
                        <FaSearch className="absolute inset-y-3 left-1  text-gray-500" />
                            <input type="text" placeholder="Artist, Music,Album,Etc " className="input input-bordered h-10 w-24 md:w-auto" />
                        </div>
                        <Image height={0} width={70} alt='user' className="rounded-full h-10 w-10 ml-10" src={user?.photoUrl ? user.photoUrl : "https://i.ibb.co/c3WP4pm/istockphoto-1307791650-612x612.jpg"} />
                    </div>

                </div>
                    :
                    <div className='flex justify-between pl-56'>
                        <h1>Welcome to fauget music services</h1>

                        <div className='flex justify-center items-center gap-2'>
                            <div>
                                <Link href="/signin"><button className="px-7 py-1 bg-slate-600 rounded-full">SignIn</button></Link>
                            </div>
                            <div>
                                <Link href="/signup"><button className="px-7 py-1 bg-slate-600 rounded-full">SignUp</button></Link>
                            </div>
                        </div>
                    </div>

            }
        </div>
    );
};

export default Navbar;