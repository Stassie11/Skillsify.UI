import React from "react";
import logoImage from "../images/logo.svg";
import mobileImage from "../images/login illustration.svg";
import online from "../images/100 online.svg";
import level from "../images/level.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faUser)

export default function Course() {
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
        <img class="rounded-t-lg object-cover ml-10" src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" alt="" style={{width: "500px", height: "400px"}}/>
        <div class="flex flex-col justify-start p-6">
          <h1 class="mb-2 text-2xl font-bold ml-28" style={{fontSize:"36px"}}>Course Name</h1>
          <h3 class="mb-2 ml-28">Course Description: </h3>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 ml-28 mr-28">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla efficitur felis at erat suscipit rhoncus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            velit odio, pharetra vitae ex vitae, volutpat dictum mauris. Nam vel
            lacus nec est dictum accumsan. Duis congue, ligula viverra
            condimentum venenatis, tellus ex tempus odio, quis convallis tellus
            eros ac risus. Quisque finibus dolor metus, in auctor enim laoreet
            id.
          </p>
          <div className="flex ml-28">
            <img className="flex-none w-6 h-6" src={online} alt="online" style={{width:"50px", height:"50px"}}></img>  
            <h3 className="flex-none font-bold w-32 h-14 ml-6">100% online</h3>
            <p class="text-sm mt-8 -ml-32">Start instantly and learn at your own schedule.</p>
          </div>
          <div className="flex ml-28 mt-4">
            <img className="flex-none w-6 h-6" src={level} alt="level" style={{width:"50px", height:"50px"}}></img>
            <h3 className="flex-none font-bold w-32 h-14 ml-6">Beginer level</h3>
            <p class="text-sm mt-8 -ml-32">No previous knowledge needed.</p>
          </div>
        </div>
      </div>
      <div className="ml-24 flex justify-between">
        <div>
          <button className="text-black font-bold py-2 px-4 mr-4">Reviews</button>
          <button className="text-black font-bold py-2 px-4 mr-4">Syllabus</button>
          <button className="text-black font-bold py-2 px-4 mr-4">Instructors</button>
          <button className="text-black font-bold py-2 px-4 mr-4">Students</button>
        </div>
        <div>
          <button className="inline-block rounded bg-bluecustom px-6 pb-2 pt-2 text-bold font-medium text-white mr-40 mb-10">Start Course</button>
        </div>
      </div>
    </div>
  );
}

export { Course };
