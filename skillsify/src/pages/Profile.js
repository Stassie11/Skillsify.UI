import React from "react";
import logoImage from "../images/logo.svg";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { HomeIcon } from '@heroicons/react/outline';
import { BookOpenIcon} from '@heroicons/react/outline';
import { CogIcon } from '@heroicons/react/outline';


library.add(faUser)

export default function Profile() {
    return (

        <div className="relative bg-lightgraycustom flex flex-col min-h-screen overflow-hidden">
            <img className="absolute p-0 left-10 w-60 h-36" src={logoImage} alt="LogoImage"/>
            <div className="absolute top-0 right-0 flex space-x-4 m-4">
                <form class="flex items-center border border-darkgraycustom rounded-lg w-96 mr-20 mt-10">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <input type="text" id="simple-search" class="bg-gray-50 border-none text-lightgraycustom text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-darkgraycustom dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                    </div>
                </form>
                <p className='mt-10'>Name Surname</p>
                <FontAwesomeIcon icon={faUser} className="text-lg mt-10" />
            </div>
            <div class="flex items-center mt-48 ml-20">
                <HomeIcon className="h-16 w-16 text-darkgraycustom" />
                <Link to=''>
                    <button className="text-darkgraycustom text-lg mr-4 ml-6">Dashboard</button>
                </Link>
                <div class="bg-gray-100 h-10 w-10"></div>
            </div>
            <div class="flex items-center mt-6 ml-20">
                <BookOpenIcon className="h-16 w-16 text-darkgraycustom" />
                <Link to='/allCourses'>
                    <button className="text-darkgraycustom text-lg mr-4 ml-6">Courses</button>
                </Link>
                <div class="bg-gray-100 h-10 w-10"></div>
            </div>
            <div class="flex items-center mt-96 ml-20">
                <CogIcon className="h-16 w-16 text-darkgraycustom" />
                <p className="text-darkgraycustom text-lg mr-4 ml-6">Settings</p>
                <div class="bg-gray-100 h-10 w-10"></div>
            </div>
            <div class="container mx-auto py-10 -ml-20" style={{marginTop:"-680px" }}>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="hidden md:block md:col-span-1"></div>
                        <div class="col-span-1 md:col-span-2 bg-white rounded-lg shadow-lg p-6">
                            <h2 class="text-2xl font-poppins font-bold text-left text-bluecustom ml-10 mt-4">Personal Details</h2>
                            <h2 class="text-2xl font-poppins font-bold text-right text-bluecustom mr-80 -mt-8">Courses</h2>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12 mt-2">Name</h3>
                            <h3 class="font-poppins font-bold text-right text-gray -mt-4" style={{marginRight:"150px"}}>
                                <span class="border p-2 border-white rounded-full bg-lightgraycustom">Active<span class="ml-32 text-sm border border-black rounded-full p-1">2 courses</span></span>
                            </h3>
                            <button className="block font-oswald text-right text-bluecustom text-sm mt-2" style={{marginLeft:"730px"}}>View Courses</button>
                            <h3 class="font-poppins font-bold text-left text-gray ml-12 -mt-6">Jane Dpe</h3>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12  mt-4">Gender</h3>
                            <h3 class="font-poppins font-bold text-right text-gray -mt-4" style={{marginRight:"135px"}}>
                                <span class="border p-2 border-white rounded-full bg-lightgraycustom">Finished<span class="ml-32 text-sm border border-black rounded-full p-1">2 courses</span></span>
                            </h3>
                            <button className="block font-oswald text-right text-bluecustom text-sm mt-2" style={{marginLeft:"750px"}}>View Courses</button>
                            <h3 class="font-poppins font-bold text-left  text-gray ml-12  -mt-6">Female</h3>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12 mt-4">Date of Birth</h3>
                            <h3 class="font-poppins font-bold text-left  text-gray ml-12  mt-2">August 27th, 1999</h3>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12  mt-4">Nationality</h3>
                            <h3 class="font-poppins font-bold text-left  text-gray ml-12  mt-2">French</h3>
                            <h2 class="text-2xl font-poppins font-bold text-left text-bluecustom ml-10 mt-4">Address</h2>
                            <h2 class="text-2xl font-poppins font-bold text-right text-bluecustom mr-80 -mt-8">Contact</h2>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12  mt-4">Address Line</h3>
                            <h3 class="font-poppins font-bold text-right text-darkgraycustom mr-72 -mt-6">Phone Number</h3>
                            <h3 class="font-poppins font-bold text-left  text-gray ml-12  mt-2">No 35 Jimmy Ebi Street</h3>
                            <h3 class="font-poppins font-bold text-right text-gray mr-72 -mt-6" style={{marginRight:"297px" }}>09034867656</h3>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12  mt-4">City</h3>
                            <h3 class="font-poppins font-bold text-right text-darkgraycustom -mt-6" style={{marginRight:"360px" }}>Email</h3>
                            <h3 class="font-poppins font-bold text-left  text-gray ml-12  mt-2">Value</h3>
                            <h3 class="font-poppins font-bold text-right text-gray mr-72 -mt-6" style={{marginRight:"255px" }}>tomilola@me.com</h3>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12  mt-4">State</h3>
                            <h3 class="font-poppins font-bold text-left  text-gray ml-12  mt-2">Value</h3>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12 mt-4">Country</h3>
                            <h3 class="font-poppins font-bold text-left  text-gray ml-12  mt-2">Value</h3>
                            <button className="inline-block rounded bg-bluecustom px-6 pb-2 pt-2 text-bold font-medium text-white" style={{marginLeft:"850px" }}>Edit</button>
                        </div>
                </div>
            </div>

        </div>
    );
}

export {Profile}