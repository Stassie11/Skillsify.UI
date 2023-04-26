import React from "react";
import logoImage from "../images/logo.svg";
import mobileImage from "../images/login illustration.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function CoursesList() {
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
      <div className="flex flex-col md:flex-row flex-1 p-6 md:p-12 bg-white rounded-xl shadow-md mt-40">
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
              <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full"></div>
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
