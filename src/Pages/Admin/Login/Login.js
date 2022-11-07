import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div class="w-full max-w-xs m-auto mt-20">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <p className='font-bold text-gray-700 mb-2 mx-20 '>Login</p>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input

                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div class="flex items-center justify-between">
                        <button


                            class="bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <Link class="inline-block align-baseline font-bold text-sm text-accent hover:text-secondary" to="#">
                            Forgot Password?
                        </Link>
                    </div>
                    <div >
                        <p className='text-sm mt-4 px-11'>New ?
                            <span>
                                <Link class="inline-block align-baseline font-bold text-sm text-secondary hover:text-secondary" to="/register">
                                    Create new account
                                </Link>
                            </span>
                        </p>
                    </div>
                    <div className="divider">OR</div>
                    <button
                        className='btn btn-outline w-full '>Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;