import React from "react";
import logoImage from "../../images/logo.svg";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";


library.add(faUser)

export default function EnrollCourse() {
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
                <p className='mt-10'>Hi, username</p>
                <FontAwesomeIcon icon={faUser} className="text-lg mt-10" />
            </div>
            <div className="flex flex-col md:flex-row flex-1 p-6 md:p-12 bg-lightgraycustom rounded-xl mt-40">
             <div className="mb-4">
                <h1 className="text-2xl font-bold -mt-12 ml-20">Activity</h1>
            </div>
                <img className="rounded-t-lg object-cover -ml-28 mt-6" src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" alt="" style={{width: "500px", height: "400px"}}/>
                <span class="text-black font-bold" style={{marginTop:"450px", marginLeft:"-134px"}}>See<span class="ml-1 text-black font-bold">transcription</span></span>

            </div>

        </div>
    );
}

export {EnrollCourse}
