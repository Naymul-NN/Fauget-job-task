"use client"
import Image from 'next/image';
import React, { useContext } from 'react';
import  { AuthContext } from '../auth/AuthProvider';
import Banner from './Banner';
import { FaChessKing } from "react-icons/fa";


const LogedBanner = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    return (
        <div>
           {
           user ? 
            <div className="carousel-item px-10 pt-5 flex justify-center items-center bg-gradient-to-r from-[#03EED2] to-[#007182] w-[1000] mx-auto h-[290px]  "> 
                <div className=' h-full  w-full '>
                    <div className=' space-y-5 pt-8 '>
                             <h1 className='flex  items-center gap-3 '><FaChessKing className=' text-4xl pb-1' /> No Ads & Unlock All Paid Songs</h1>
                        <h1 className='text-5xl font-serif '> Premium Membership</h1>
                        <p className=' text-justify w-[70%]'>It is a long established fact that a is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here , making it look like readable English.</p>
                        <button className='px-7 py-1  bg-black mr-5  rounded-full'>Upgrade now </button>
                        <button className='px-7 py-1  bg-gray-700 mr-5  rounded-full'>Learn more</button>
                       </div>
                </div> 
                <div>
                 <Image
                       width={200}
                       height={200} 
                    //    fill={true}
                       src="https://i.ibb.co/HzyfWXK/image-2.png" alt="Shoes" />
                </div>

            </div> : 
            <Banner></Banner>
           }
            
        </div>
    );
};

export default LogedBanner;