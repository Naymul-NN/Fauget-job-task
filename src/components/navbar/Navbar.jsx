import React from 'react';

import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='mr-10 py-10'>
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

        </div>
    );
};

export default Navbar;