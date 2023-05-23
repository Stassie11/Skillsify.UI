import React, {useState} from 'react';
import mobileImage from '../../images/login illustration.svg';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';

export default function Login(props) {

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === 'email'){
            setEmail(value);
        }
        if(id === 'password'){
            setPassword(value);
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.loginUser(email, password);
    }

    return (
            <div className="flex flex-col md:flex-row flex-1 p-6 md:p-12 bg-white rounded-xl shadow-md mt-20 ml-60" style={{width: "600px", maxHeight: "530px"}}>
                <form onSubmit={onFormSubmit} className="flex-1 mt-30 p-4">
                    <h1 className="text-4xl font-poppins font-bold text-left text-graycustom -mt-6">Skillsify</h1>
                    <h1 className="mt-5 text-left text-darkgraycustom">Welcome back!</h1>
                    <h1 className='text-5xl font-poppins font-bold text-left text-black mt-6'> Log in</h1>
                    <div className="mt-6">
                        <label for="email" className="block font-poppins text-left text-gray-800y">Email</label>
                        <input type="email"  id={"email"} value={email} onChange = {(e) => handleInputChange(e)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />                    </div>
                    <div className="mt-6">
                        <label for="password" className="block font-poppins text-left text-gray-800y">Password</label>
                        <input type="password"  id={"password"} value={password}  onChange = {(e) => handleInputChange(e)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 form-control"  />                    </div>
                    <div className="mt-6">
                        <button className="ml-48 rounded-full font-buttons rounded-3xl font-bold bg-graycustom w-15 px-4 py-2 tracking-wide text-poppins text-whitecustom transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">LOGIN</button>
                        <p className="mt-8 text-sm font-poppins text-darkgraycustom text-center">
                        {" "}
                        I don’t have an account ?{" "}
                        <Link to='/register'>
                            <a
                                href="#"
                                className="font-medium text-graycustom hover:underline"
                            >
                                Sign up
                            </a>
                        </Link>
                        </p>
                    </div>
                </form>
                <img  className="absolute top-40 right-12 w-130 h-130" style={{marginRight:'170px', marginTop:'100px'}} src={mobileImage} alt="MobileImage" />
        </div>
    );
}

export {Login}
