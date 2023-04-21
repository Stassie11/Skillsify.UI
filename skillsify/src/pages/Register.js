import React from 'react';
import logoImage from '../images/logo.svg';
import mobileImage from '../images/login illustration.svg'

export default function Register() {
    return (
        <div className="relative flex flex-col min-h-screen overflow-hidden">
            <img className="absolute top-0 left-10 w-60 h-60 m-4" src={logoImage} alt="LogoImage" />
            <div className="absolute top-0 right-0 flex space-x-4 m-4">
                <button className="block font-oswald text-right text-2xl px-4 py-4 mt-4">Login</button>
                <button className="block font-oswald text-right text-2xl px-4 py-4 border-2 border-black rounded-lg mt-4">Register</button>
        </div>
        <div className="flex flex-col md:flex-row flex-1 p-6 md:p-12 bg-white rounded-xl shadow-md mt-20 ml-20" style={{width: "600px", height: "400px"}}>
        <form className="flex-1 mt-30 p-4">
        <h1 className="text-4xl font-poppins font-bold text-left text-purple-700">Register</h1>
        <h1 className="mt-1 text-left text-graycustom">Hello new user!</h1>
          <div className="mt-6">
            <label for="fullName" className="block font-oswald text-left text-gray-800y">Full Name</label>
            <input type="fullName" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
          </div>
          <div className="mt-6">
            <label for="email" className="block font-oswald text-left text-gray-800y">Email</label>
            <input type="email" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
          </div>
          <div className="mt-6">
            <label for="password" className="block font-oswald text-left text-gray-800y">Password</label>
            <input type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
          </div>
          <div className="mt-6">
            <button className="font-buttons rounded-3xl font-bold bg-graycustom w-15 px-4 py-2 tracking-wide text-whitecustom transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">REGISTER</button>
            <p className="mt-8 text-xs font-lightgraycustom text-center">
                    {" "}
                    Already a member?{" "}
                    <a
                        href="#"
                        className="font-medium text-graycustom hover:underline"
                    >
                        Log in
                    </a>
            </p>                    
          </div>
        </form>

        <img  className="absolute top-40 right-12 w-130 h-130" src={mobileImage} alt="MobileImage" />
      </div>
    </div>
    );
}

export {Register}