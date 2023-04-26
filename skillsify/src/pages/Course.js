import React from "react";
import logoImage from "../images/logo.svg";
import mobileImage from "../images/login illustration.svg";
import online from "../images/100 online.svg";
import level from "../images/level.svg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Course() {
  return (
    <div className="relative bg-lightgraycustom flex flex-col min-h-screen overflow-hidden">
      <img
        className="absolute p-0 left-10 w-60 h-36"
        src={logoImage}
        alt="LogoImage"
      />
      <div className="absolute top-0 right-0 flex space-x-4 m-4">
        <Link to="/login">
          <button className="block font-oswald text-right text-2xl px-4 py-4 mt-4">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="block font-oswald text-right text-2xl px-4 py-4 border-2 border-black rounded-full bg-lightbluecustom mt-4">
            Register
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row flex-1 p-6 md:p-12 bg-lightgraycustom rounded-xl shadow-md mt-40">
        <img
          class="h-96 w-96 rounded-t-lg object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
          alt=""
        />
        <div class="flex flex-col justify-start p-6">
          <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Course Name
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Course Description: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla efficitur felis at erat suscipit rhoncus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            velit odio, pharetra vitae ex vitae, volutpat dictum mauris. Nam vel
            lacus nec est dictum accumsan. Duis congue, ligula viverra
            condimentum venenatis, tellus ex tempus odio, quis convallis tellus
            eros ac risus. Quisque finibus dolor metus, in auctor enim laoreet
            id.
          </p>
          <div className="flex">
          <img
            className="flex-none w-6 h-6"
            src={online}
            alt="online"
          ></img>
          
          <h3 className="flex-none w-32 h-14">100% online</h3>
          </div>
          <p class="text-xs text-neutral-500 dark:text-neutral-300">
          Start instantly and learn at your 

own schedule.
          </p>
          <div className="flex">
          <img
            className="flex-none w-6 h-6"
            src={level}
            alt="level"
          ></img>
          
          <h3 className="flex-none w-32 h-14">Beginer level</h3>
          </div>
          <p class="text-xs text-neutral-500 dark:text-neutral-300">
          No previous knowledge needed.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export { Course };
