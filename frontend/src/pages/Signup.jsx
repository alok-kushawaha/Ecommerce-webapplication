import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupuser } from '../redux/authSlice.js';
import { loginuser } from '../redux/loginSlice';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [formdata, setFromdata] = useState({ name: "", email: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.login);
    const { status, message, error } = useSelector((state) => state.signup);

    useEffect(() => {
        if (token) {
            navigate('/', { replace: true });
        }
    }, [token, navigate]);

    const submithendelr = async (e) => {
        e.preventDefault();

        try {
            const signupResult = await dispatch(signupuser({
                ...formdata,
                name: formdata.name.trim(),
                email: formdata.email.trim()
            })).unwrap();

            if (signupResult?.success) {
                await dispatch(loginuser({
                    email: formdata.email.trim(),
                    password: formdata.password
                })).unwrap();
            }
        } catch (signupError) {
            console.error('Signup failed:', signupError);
        }
    };
    return (

        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Create a new account
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                    Or
                    <a href="/login"
                        className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        login to your account
                    </a>
                </p>
            </div>
{status === "success" && (
  <p>{message}</p>
)}

{error && (
  <p>{error}</p>
)}
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={submithendelr} >
                        <div>
                
                            <label className="block text-sm font-medium leading-5  text-gray-700">Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="name" name="name" placeholder="John Doe" type="text" required="" value={formdata.name}
                                    onChange={(e) => setFromdata({ ...formdata, name: e.target.value })}
                                  autoComplete='current-name'  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>


                        <div className="mt-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="email" name="email" placeholder="user@example.com" type="email" value={formdata.email}
                                    required=""
                                    onChange={(e) => setFromdata({ ...formdata, email: e.target.value })}
                                  autoComplete='current-email'   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password" name="password" type="password" required="" value={formdata.password}
                                    onChange={(e) => setFromdata({ ...formdata, password: e.target.value })}
                                   autoComplete='current-password'  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>

                        {/* <div className="mt-6">
                    <label for="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">
                        Confirm Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input id="password_confirmation" name="password_confirmation" type="password" required=""
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div> */}

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Create account
                                </button>
                            </span>
                        </div>
                    </form>

                </div>
            </div>
        </div>


    )
}
