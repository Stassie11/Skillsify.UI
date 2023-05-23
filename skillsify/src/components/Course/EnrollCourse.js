import React from "react";
import logoImage from "../../images/logo.svg";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import course from "../../images/course.png";
import profile from "../../images/profile picture.png";


library.add(faUser)

export default function EnrollCourse() {
    return (

        <div className="relative bg-lightgraycustom flex flex-col min-h-screen overflow-hidden">
            <div className="flex flex-col md:flex-row flex-1 p-6 md:p-12 bg-lightgraycustom rounded-xl mt-16">
             <div className="mb-4">
                <h1 className="text-2xl font-bold -mt-12 ml-20">Activity</h1>
            </div>
            <img class="-ml-20" src={course} alt="" style={{width: "400px", height: "400px"}}/>
                <span class="text-black font-bold" style={{marginTop:"450px", marginLeft:"-134px"}}>See<span class="ml-1 text-black font-bold">transcription</span></span>
                <div className="flex flex-col md:flex-row flex-1 p-6 md:p-12 bg-white rounded-xl shadow-md -mt-16 ml-96 opacity-50" style={{maxWidth: "450px", maxHeight: "400px"}}>
                    <div class="space-y-1 border-4 border-dotted border-bluecustom -mt-8" style={{height:"360px", width:"50px"}}>
                        <div class="flex items-center">
                            <input type="checkbox" id="checkbox" class="hidden" />
                            <label for="checkbox" class="flex items-center cursor-pointer">
                            <div class="w-6 h-6 border-2 border-bluecustom rounded-full mr-2">
                                <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                            </div>
                            <span class="text-black ml-10">Value Description</span>
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="checkbox1" class="hidden" />
                            <label for="checkbox1" class="flex items-center cursor-pointer">
                            <div class="w-6 h-6 border-2 border-bluecustom rounded-full mr-2">
                                <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                            </div>
                            <span class="text-black ml-10">Value Description</span>
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="checkbox2" class="hidden" />
                            <label for="checkbox2" class="flex items-center cursor-pointer">
                            <div class="w-6 h-6 border-2 border-bluecustom rounded-full mr-2">
                                <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                            </div>
                            <span class="text-black ml-10">Value Description</span>
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="checkbox3" class="hidden" />
                            <label for="checkbox3" class="flex items-center cursor-pointer">
                            <div class="w-6 h-6 border-2 border-bluecustom rounded-full mr-2">
                                <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                            </div>
                            <span class="text-black ml-10">Value Description</span>
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="checkbox4" class="hidden" />
                            <label for="checkbox4" class="flex items-center cursor-pointer">
                            <div class="w-6 h-6 border-2 border-bluecustom rounded-full mr-2">
                                <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                            </div>
                            <span class="text-black ml-10">Value Description</span>
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="checkbox5" class="hidden" />
                            <label for="checkbox5" class="flex items-center cursor-pointer">
                            <div class="w-6 h-6 border-2 border-bluecustom rounded-full mr-2">
                                <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                            </div>
                            <span class="text-black ml-10">Value Description</span>
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="checkbox6" class="hidden" />
                            <label for="checkbox6" class="flex items-center cursor-pointer">
                            <div class="w-6 h-6 border-2 border-bluecustom rounded-full mr-2">
                                <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                            </div>
                            <span class="text-black ml-10">Value Description</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row flex-1 p-6 md:p-12 bg-white rounded-xl shadow-md" style={{maxWidth: "650px", maxHeight: "400px", marginLeft:"800px", marginTop:"-150px"}}>
                <h1 className="text-black font-bold -mt-8">Comments</h1>
                <img class="-ml-20 mt-2" src={profile} alt="" style={{width: "50px", height: "50px"}}/>
                <span className="text-xs mt-6 font-bold -ml-1">John</span>
                <p className="text-xs mt-16 -ml-16">I just tried this recipe and it was amazing! The instructions were clear and easy to follow, and the end result was delicious. I will definitely be making this again. Thanks for sharing!</p>
                <button className="rounded bg-bluecustom text-xs text-white mt-28 mr-4" style={{height:"30px", width:"200px"}}>Comment</button>
            </div>

        </div>
    );
}

export {EnrollCourse}
