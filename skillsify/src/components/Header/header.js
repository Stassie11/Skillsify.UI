import logoImage from "../../images/logo.svg";
import {Link} from "react-router-dom";
import React from "react";

const header = (props) => {
    if(props.isUserLoggedIn){
        const username = props.userData.username;
            return(
                <header>
                    <a href={"/home"}>
                    <img className="absolute p-0 left-10 top-4 w-48 h-20" src={logoImage} alt="LogoImage" />
                    </a>
                    <div className="absolute top-0 right-0 flex space-x-4 m-4">
                        <span className="block font-oswald text-right text-2xl px-4 py-4 mt-3">{username}</span>
                        <button onClick={ () => {props.logOutUser();}}
                            className="block font-oswald text-right text-2xl px-10 border-2 border-black rounded-full bg-lightbluecustom mt-7">Log out
                        </button>
                    </div>
                </header>
            )
    }else{
        return(
            <header>
                <a href={"/home"}>
                <img className="absolute p-0 left-10 top-4 w-48 h-20" src={logoImage} alt="LogoImage"/>
                </a>
                <div className="absolute top-0 right-0 flex space-x-4 m-4">
                    <Link to='/login'>
                        <button className="block font-oswald text-right text-2xl px-4 py-4 mt-3">Login</button>
                    </Link>
                    <Link to='/register'>
                        <button
                            className="block font-oswald text-right text-2xl px-10 border-2 border-black rounded-full bg-lightbluecustom mt-7">Register
                        </button>
                    </Link>
                </div>
            </header>
        )
    }
}
export  default header;
