import React from 'react';

const Navbar = () => {
    return (
        <div className='mr-10 py-10'>
            <div className='flex justify-between pl-56'>
                <h1>Welcome to fauget music services</h1>
                <div>
                <button className='px-7 py-1 bg-slate-600 rounded-full mr-10'>SignIn</button>
                <button className='px-7 py-1 bg-slate-600 rounded-full '>SignUp</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;