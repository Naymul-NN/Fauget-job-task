"use client"
import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import Image from 'next/image';

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1 className='text-2xl text-center py-10'>User profile............</h1>
            <div className='flex justify-center items-center gap-5'>
               <div>
                <Image src={user?.photoUrl ? user?.Profile : "https://i.ibb.co/c3WP4pm/istockphoto-1307791650-612x612.jpg"} height={200} width={200} alt='user'></Image>
               </div>
             <div>
               <p>Name:
               {user?.displayName}
               
                </p> 
              <p>Email: {user?.email}</p>
                </div>
            </div>

            
        </div>
    );
};

export default Profile;