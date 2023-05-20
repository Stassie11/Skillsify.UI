import React, {useEffect, useState} from 'react';
import logoImage from '../images/logo.svg';
import mobileImage from '../images/login illustration.svg'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';

const AUTH_TOKEN = 'auth_token';
const loggedInEmail = 'email';

export default function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const login = (email, password) => {
        const data = {
            email: email,
            password: password
        };

        return fetch("http://localhost:8080/users/login", {
            method: "POST",
            dataType: 'jsonp',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json().then((data) => {
                        localStorage.setItem(AUTH_TOKEN, data);
                        localStorage.setItem(loggedInEmail, email);
                        return data;
                    });
                } else if (response.status === 403) {
                    throw new Error('Access Denied: Bad credentials');
                } else {
                    throw new Error('Error:', response.status);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                console.log("Server is down!");
            });
    };


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === 'email'){
            setEmail(value);
        }
        if(id === 'password'){
            setPassword(value);
        }
    }

    const handleSubmit = async () => {
        login(email, password);
        history('/home');
    }

    return (
        <div className="relative flex flex-col bg-lightgraycustom min-h-screen overflow-hidden">
              <Link to='/home'>
          <img className="absolute p-0 left-10 top-4 w-48 h-20" src={logoImage} alt="LogoImage" />
          </Link>
            <div className="absolute top-0 right-0 flex space-x-4 m-4">
            <Link to='/login'>
                <button className="block font-oswald text-right text-2xl px-4 py-4 mt-4">Login</button>
                </Link>
                <Link to='/register'>
                <button className="block font-oswald text-right text-2xl px-4 py-4 border-2 border-black rounded-full bg-lightbluecustom mt-4">Register</button>
                </Link>
                    </div>
        <div className="flex flex-col md:flex-row flex-1 p-6 md:p-12 bg-white rounded-xl shadow-md mt-40 ml-20" style={{width: "600px", height: "400px"}}>
        <form className="flex-1 mt-30 p-4">
        <h1 className="text-4xl font-poppins font-bold text-left text-graycustom">Login</h1>
        <h1 className="mt-1 text-left text-darkgraycustom">Welcome back!</h1>
          <div className="mt-6">
            <label for="email" className="block font-oswald text-left text-gray-800y">Email</label>
            <input type="email" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" id={"email"} value={email} onChange = {(e) => handleInputChange(e)}/>
                    </div>
                    <div className="mt-6">
            <label for="password" className="block font-oswald text-left text-gray-800y">Password</label>
            <input type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 form-control"  id={"password"} value={password}  onChange = {(e) => handleInputChange(e)}/>
                    </div>
          <div className="mt-6">
            <button onClick={()=>handleSubmit()} className="ml-48 rounded-full font-buttons rounded-3xl font-bold bg-graycustom w-15 px-4 py-2 tracking-wide text-whitecustom transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">LOGIN</button>
                <p className="mt-8 text-xs font-lightgraycustom text-center">
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

        <img  className="absolute top-40 right-12 w-130 h-130" src={mobileImage} alt="MobileImage" />
      </div>
        </div>
    );
}

export {Login}
