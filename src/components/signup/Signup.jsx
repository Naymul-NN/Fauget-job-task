
"use client"
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../auth/AuthProvider';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import toast from 'react-hot-toast';

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
        <div  className='bg-gray-400 '>
            <form method="dialog" onSubmit={handleRegister} className="card-body">
               
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
                    <input  type={show ? "text" : "password"} placeholder="password" name="password" className="input input-bordered text-black" required />
                    <span onClick={() => setshow(!show)}>{show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                    
                </div>
                <div className="form-control mt-6">
                    <button className=" btn text-white bg-slate-600 rounded-full">SingUp</button>
                </div>
                <p className="text-red-500 font-bold">{error}</p>
            </form>
            <p className="text-black text-center">If you have and! <Link href='/signin' className="text-green-600 font-bold" >Login</Link></p>

        </div>

    );
};

export default Signup;