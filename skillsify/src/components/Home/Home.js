import React from 'react';
import homeImage from '../../images/hompage.svg';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../Design.css';


export default function Home() {
    return (
        <div className="flex flex-col bg-lightgraycustom justify-center min-h-screen overflow-hidden">
                <div class="heading">
                    <h1 className="block text-5xl font-playfair">Improve your coding</h1>
                    <h1 className="block text-5xl font-playfair text-white bg-graycustom rounded-full absolute top-16">skills</h1>
                    <h1 className="block text-5xl font-playfair absolute top-16 left-32">faster</h1>
                </div>
                <div className="absolute top-80 right-44 text-3xl text-white flex space-x-4 m-4">
                    <Link to='/courses'>
                        <button class="browse">Browse courses</button>
                    </Link>
                </div>
                <img class="illustration" src={homeImage} alt="HomeImage"/>
        </div>

    );
}

export {Home}
