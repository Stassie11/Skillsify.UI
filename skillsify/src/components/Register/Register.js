import React, {useState} from 'react';
import logoImage from '../../images/logo.svg';
import mobileImage from '../../images/login illustration.svg';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';


export default function Register(props) {

    const history = useNavigate();

    const [fullName, setFullName] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === 'fullName'){
            setFullName(value);
        }
        if(id === 'dateOfBirth'){
            setDateOfBirth(value);
        }
        if(id === 'phoneNumber'){
            setPhoneNumber(value);
        }
        if(id === 'address'){
            setAddress(value);
        }
        if(id === 'email'){
            setEmail(value);
        }
        if(id === 'password'){
            setPassword(value);
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.registerUser(fullName, dateOfBirth, phoneNumber, address, email, password);
    }


    return (
            <div className="flex flex-col md:flex-row flex-1 p-6 md:p-12 bg-white rounded-xl shadow-md mt-20 ml-60" style={{width: "600px", maxHeight: "720px"}}>
                <form onSubmit={onFormSubmit} className="flex-1 mt-50 p-4">
                    <h1 className="text-4xl font-poppins font-bold text-left text-graycustom -mt-6">Skillsify</h1>
                    <h1 className='text-5xl font-poppins font-bold text-left text-black mt-6'> Register</h1>
                    <h1 className="mt-2 text-left text-darkgraycustom">Hello new user!</h1>
                    <div className="mt-6 flex">
                        <span><label for="fullName" className="block font-poppins text-left text-gray-800y">Full Name</label></span>
                        <span style={{marginLeft:"170px"}}><label for="dateOfBirth" className="block font-poppins text-left text-gray-800y">Date of birth</label></span>
                    </div>
                     <div className='flex'>
                        <span><input type="text" id={"fullName"} value={fullName}  onChange = {(e) => handleInputChange(e)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/></span>
                        <span className='ml-8'><input type="date" id={"dateOfBirth"}  value={dateOfBirth}  onChange = {(e) => handleInputChange(e)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/></span>
                    </div>
                    <div className="mt-6 flex">
                        <span><label for="phoneNumber" className="block font-poppins text-left text-gray-800y">Phone Number</label></span>
                        <span style={{marginLeft:"130px"}}><label for="address" className="block font-poppins text-left text-gray-800y">Address</label></span>
                    </div>
                    <div className='flex'>
                        <span><input type="text" id={"phoneNumber"}  value={phoneNumber}  onChange = {(e) => handleInputChange(e)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/></span>
                        <span className='ml-8'><input type="text" id={"address"} value={address}  onChange = {(e) => handleInputChange(e)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/></span>
                    </div>
                    <div className="mt-6">
                        <label for="email" className="block font-poppins text-left text-gray-800y">Email</label>
                        <input type="email" id={"email"} value={email}  onChange = {(e) => handleInputChange(e)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mt-6">
                        <label for="password" className="block font-poppins text-left text-gray-800y">Password</label>
                        <input type="password" id={"password"} value={password}  onChange = {(e) => handleInputChange(e)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-whitecustom rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mt-6">
                        <button className="ml-44 rounded-full font-poppins font-buttons rounded-3xl font-bold bg-graycustom w-15 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">REGISTER</button>
                        <p className="mt-8 text-sm font-poppins text-darkgraycustom text-center">
                         {" "}
                         Already a member?{" "}
                        <Link to='/login'>
                            <a
                             href="#"
                             className="font-medium text-graycustom hover:underline"
                            >
                            Log in
                            </a>
                        </Link>
                        </p>
                    </div>
                 </form>
                <img  className="absolute top-40 right-12 w-130 h-130 " style={{marginRight:'170px', marginTop:'100px'}} src={mobileImage} alt="MobileImage" />
        </div>
    );
}

export {Register}
