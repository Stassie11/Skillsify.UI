import React from 'react';
import Login from './Login.js';
import Register from './Register.js';
import logoImage from '../images/logo.svg';
import homeImage from '../images/hompage illustration.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col bg-lightgraycustom justify-center min-h-screen overflow-hidden">
          <div className="relative flex flex-col min-h-screen overflow-hidden">
            <img className="absolute p-0 left-10 w-60 h-36" src={logoImage} alt="LogoImage" />
            <div className="absolute top-0 right-0 flex space-x-4 m-4">
            <Link to='/login'>
                <button className="block font-oswald text-right text-2xl px-4 py-4 mt-4">Login</button>
                </Link>
                <Link to='/register'>
                <button className="block font-oswald text-right text-2xl px-4 py-4 border-2 border-black rounded-full bg-lightbluecustom mt-4">Register</button>
                </Link>
                    </div>
                    <div className="absolute top-40 left-52 flex space-x-4 m-4">
                        <h1 className="block text-5xl font-playfair">Improve your coding</h1>
                    <h1 className="block text-5xl font-playfair text-white bg-graycustom rounded-full absolute top-16">skills</h1>
                    <h1 className="block text-5xl font-playfair absolute top-16 left-32">faster</h1>
                        </div>
                        <div className="absolute top-80 right-44 text-3xl text-white flex space-x-4 m-4">
                            <Link to='/allCourses'>
                                <button className="block px-2 py-2 border-2 border-pinkcustom rounded-full bg-pinkcustom">Browse courses</button>
                            </Link>
                        </div>
        <img  className="absolute top-40 right-96 w-130 h-150" src={homeImage} alt="HomeImage" />
      </div>
        </div>
           
        

        
    );
}

export {Home}