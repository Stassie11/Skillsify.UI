import logoImage from "../../images/logo.svg";
import { Link } from "react-router-dom";
import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookOpenIcon, CogIcon, HomeIcon } from "@heroicons/react/outline";

library.add(faUser);

const header = (props) => {
    if (props.isUserLoggedIn) {
        const username = props.userData.username;
        return (
            <header className="flex justify-between items-center p-4">
                    <a href="/home">
                        <img className="w-48 h-20" src={logoImage} alt="LogoImage" />
                    </a>
                <nav className="flex items-center space-x-9">
                    <Link to="/home" className="text-darkgraycustom">
                        <HomeIcon className="h-16 w-12 ml-2" />
                        <span className="ml-2">Home</span>
                    </Link>
                    <Link to="/courses" className="text-darkgraycustom">
                        <BookOpenIcon className="h-16 w-12 ml-2" />
                        <span className="ml-2">Courses</span>
                    </Link>
                    <Link to="/profile" className="text-darkgraycustom">
                        <CogIcon className="h-16 w-12 ml-2" />
                        <span className="ml-2">Profile</span>
                    </Link>
                </nav>
                <div className="flex items-center justify-end space-x-4">
          <span className="block font-oswald text-right text-2xl px-4 py-4 mt-0">
            {username}
          </span>
                    <FontAwesomeIcon icon={faUser} className="text-lg mt-0" />
                    <button
                        onClick={() => {
                            props.logOutUser();
                        }}
                        className="block font-oswald text-right text-2xl px-10 mt-0 border-2 border-black rounded-full bg-lightbluecustom mt-7"
                    >
                        Log out
                    </button>
                </div>
            </header>
        );
    } else {
        return (
            <header className="flex justify-between items-center p-4">
                    <a href="/home">
                        <img className="w-48 h-20" src={logoImage} alt="LogoImage" />
                    </a>

                <nav className="flex items-center space-x-9">
                    <Link to="/home" className="text-darkgraycustom">
                        <HomeIcon className="h-16 w-12 ml-2" />
                        <span className="ml-2">Home</span>
                    </Link>
                    <Link to="/courses" className="text-darkgraycustom">
                        <BookOpenIcon className="h-16 w-12 ml-2" />
                        <span className="ml-2">Courses</span>
                    </Link>
                </nav>
                <div className="flex items-center justify-end space-x-4">
                    <Link to="/login">
                        <button className="block font-oswald text-right text-2xl px-3 py-3 mt-0">
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="block font-oswald text-right text-2xl px-3 py-3 mt-0 border-2 border-black rounded-full bg-lightbluecustom mt-7">
                            Register
                        </button>
                    </Link>
                </div>
            </header>
        );
    }
};

export default header;
