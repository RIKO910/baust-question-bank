import React from 'react';

const Registration = () => {

    const handelRegister = event =>{
        event.preventDefault();
        const name =event.target.name.value;
        const email =event.target.email.value;
        const password =event.target.password.value;
    }


    return (
        <div>
            <div class="w-full max-w-xs m-auto mt-20">
                <form onSubmit={handelRegister} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <p className='font-bold text-gray-700 mb-2 mx-20 '>Register</p>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name='name' placeholder="Name" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='password' id="password" type="password" placeholder="******************" />
                        {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-accent hover:bg-primary mx-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>

                    </div>
                    <div className="divider">OR</div>
                    <button

                        className='btn btn-outline w-full '>Continue with Google</button>

                    {/* <button className='btn btn-outline w-full mt-2'>Continue with Github</button> */}
                </form>
            </div>
        </div>
    );
};

export default Registration;