import React from 'react';
import logoImage from '../images/logo.svg';
import mobileImage from '../images/login illustration.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faStar)

export default function CoursesList() {
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
            <div className="p-4 bg-white rounded-xl mt-40 ml-64 mr-64 h-52">
              <div className="border border-white rounded-lg overflow-hidden mt-62 h-40">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="w-1/3">
                    <img className="object-cover" src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" alt=""/>
                  </div>
                  <div className="w-2/3 p-4">
                    <h1 className="text-xl font-medium mb-2 ml-20">WEB DEVELOPMENT</h1>
                    <h4 className='ml-20'>By Jane Cooper</h4>
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
                      <button type="button" className="inline-block rounded bg-bluecustom px-6 pb-2 pt-2 text-bold font-medium text-white ml-auto"><Link to='/course'>View Course</Link></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl mt-12 ml-64 mr-64 h-52">
              <div className="border border-white rounded-lg overflow-hidden mt-62 h-40">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="w-1/3">
                    <img className="object-cover" src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" alt=""/>
                  </div>
                  <div className="w-2/3 p-4">
                    <h1 className="text-xl font-medium mb-2 ml-20">WEB DEVELOPMENT</h1>
                    <h4 className='ml-20'>By Jane Cooper</h4>
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
                      <button type="button" className="inline-block rounded bg-bluecustom px-6 pb-2 pt-2 text-bold font-medium text-white ml-auto"><Link to='/course'>View Course</Link></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl mt-12 ml-64 mr-64 h-52">
              <div className="border border-white rounded-lg overflow-hidden mt-62 h-40">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="w-1/3">
                    <img className="object-cover" src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" alt=""/>
                  </div>
                  <div className="w-2/3 p-4">
                    <h1 className="text-xl font-medium mb-2 ml-20">WEB DEVELOPMENT</h1>
                    <h4 className='ml-20'>By Jane Cooper</h4>
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
                      <button type="button" className="inline-block rounded bg-bluecustom px-6 pb-2 pt-2 text-bold font-medium text-white ml-auto"><Link to='/course'>View Course</Link></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div
          className="flex-1 mt-30 p-4"
          style={{ width: "400px", height: "200px" }}
        >
          <div class="block rounded-lg bg-white">
            <div class="relative overflow-hidden bg-pinkcustom">
              <img
                class="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt=""
              />
              <a href="#!">
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/course">
                <button
                  type="button"
                  class="inline-block rounded bg-bluecustom px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white"
                >
                  Button
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CoursesList };
