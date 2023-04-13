import React from 'react';

export default function Login() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-xl shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-poppins font-bold text-left text-purple-700">
                   Login
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-playfair text-left text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block font-oswald text-left text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-darkgraycustom hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="font-buttons rounded-3xl font-bold bg-graycustom w-full px-4 py-2 tracking-wide text-whitecustom transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            LOGIN
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-lightgraycustom text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-graycustom hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export {Login}