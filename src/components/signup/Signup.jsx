
"use client"
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../auth/AuthProvider';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import toast from 'react-hot-toast';
import { TbMusicQuestion } from 'react-icons/tb';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [show, setshow] = useState(false);

    const home = useRouter();
    // const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        // Validation
        setError('');
        if (password.length < 6) {
            setError("error ! your password at least 6 characters");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError('error ! provide an uppercase letter');
            return;
        } else if (!/[!@#$%^&*]/.test(password)) {
            setError('please ! provide a special character');
            return;
        }

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                console.log(user);
                toast.success('Congratulations! Registration successful');
                home.push('/');
            })
            .catch((error) => {
                console.error('Error creating user:', error);
                // Handle the error as needed
            });
    };


    return (
        <div className='pt-16'>

        <div  className="bg-gray-600 w-[30%] mx-auto ">
             <h1 className="flex justify-center items-center gap-2 text-2xl pt-5"> <TbMusicQuestion  />Fauget</h1>
             <h1 className="text-center text-xl pt-5">Sign Up <br />or</h1>
             <Link href="/" className="flex items-center justify-center">Go Back to home</Link>
            <form method="dialog" onSubmit={handleRegister} className="card-body">
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered bg-black text-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input  type={show ? "text" : "password"} placeholder="password" name="password" className="input input-bordered bg-black text-white" required />
                    <span onClick={() => setshow(!show)}>{show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                    
                </div>
                <div className="form-control mt-6">
                    <button className=" btn bg-black text-white hover:bg-slate-600 rounded-full">Create an Account</button>
                </div>
                <p className="text-red-500 font-bold">{error}</p>
            </form>
            <p className="text-black text-center">If you have and! <Link href='/signin' className="text-black font-bold" >Login</Link></p>

        </div>
        </div>

    );
};

export default Signup;