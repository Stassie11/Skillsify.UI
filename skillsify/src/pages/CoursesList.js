import React from 'react';
import logoImage from '../images/logo.svg';
import mobileImage from '../images/login illustration.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState,useEffect} from 'react'


library.add(faStar)

export default function CoursesList() {

  const [data, setData] = useState([])
  const [response, setResponse] = useState()

  const fetchData = () => {
    return  fetch("http://localhost:8080/courses", {
      method: "GET",
      dataType: 'jsonp',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
     }
      
      }).then((response) => {
        return response.json()
     })
      .then(data => {
          console.log("server is up")
          console.log(data)
          setData(data)
      })
      .catch((error) => {
        console.error('Error:', error);
        console.log("server is down!!")   
      });
  }
 

  useEffect(() => {
    fetchData();
    
  },[])
    return (
        <div className="relative bg-lightgraycustom flex flex-col min-h-screen overflow-hidden">
            <img className="absolute p-0 left-10 w-60 h-36" src={logoImage} alt="LogoImage" />
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
            {data.map((x)=>(
                    <div className="p-4 bg-white rounded-xl mt-40 ml-64 mr-64 h-52">
                    <div className="border border-white rounded-lg overflow-hidden mt-62 h-40">
                      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="w-1/3">
                          <img className="object-cover" src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" alt=""/>
                        </div>
                        <div className="w-2/3 p-4">
                          <h1 className="text-xl font-medium mb-2 ml-20">{x.name}</h1>
                          <h4 className='ml-20'>By {x.creator.firstName} {x.creator.lastName}</h4>
                          <div className="flex items-center mb-4 ml-20">
                            <FontAwesomeIcon icon={faStar} className="text-orange mr-2" />
                            <FontAwesomeIcon icon={faStar} className="text-orange mr-2" />
                            <FontAwesomeIcon icon={faStar} className="text-orange mr-2" />
                            <FontAwesomeIcon icon={faStar} className="text-orange mr-2" />
                            <FontAwesomeIcon icon={faStar} className="text-orange mr-2" />
                            <span className="text-gray-700">10 reviews</span>
                          </div>
                          <div className="flex items-center mb-4 ml-20">
                            <FontAwesomeIcon icon={faDownload} />
                            <span className="text-gray-700 ml-2">15 Sales</span>
                            <button type="button" 
                            className="inline-block rounded bg-bluecustom 
                            px-6 pb-2 pt-2 text-bold font-medium text-white ml-auto">
                              <Link to={`/course/${x.id}`} 
                            >View Course</Link></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    ))}
        </div>
    );
}

export {CoursesList}