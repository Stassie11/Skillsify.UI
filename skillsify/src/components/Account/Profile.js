import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from "@fortawesome/free-solid-svg-icons";


library.add(faUser)

export default function Profile(props) {
    return (
        <div className="relative bg-lightgraycustom flex flex-col min-h-screen overflow-hidden">
            <div class="container mx-auto py-10 -ml-20" style={{marginTop:"10px" }}>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="hidden md:block md:col-span-1"></div>
                        <div class="col-span-1 md:col-span-2 bg-white rounded-lg shadow-lg p-6">
                            <h2 class="text-2xl font-poppins font-bold text-left text-bluecustom ml-10 mt-4">Personal Details</h2>
                            <h2 class="text-2xl font-poppins font-bold text-right text-bluecustom mr-80 -mt-8">Courses</h2>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12 mt-4">Name</h3>
                            <h3 class="font-poppins font-bold text-right text-gray mt-2" style={{marginRight:"20px"}}>
                                <span class="border p-32 border-white rounded-lg bg-lightgraycustom text-sm" style={{paddingTop:"30px"}}>
                                    Active
                                    <span class="ml-32 text-sm border border-black rounded-full p-1 text-xs">3 courses</span>
                                </span>
                            </h3>
                            <p className="font-poppins text-sm font-bold mt-4" style={{marginLeft:"550px"}}>Course 1 ........................................................................</p>
                            <p className="font-poppins text-sm font-bold mt-4" style={{marginLeft:"550px"}}>Course 2 .......................................................................</p>
                            <p className="font-poppins text-sm font-bold mt-4" style={{marginLeft:"550px"}}>Course 3 ........................................................................</p>
                            <h3 class="font-poppins font-bold text-left text-gray ml-12 -mt-32">{props.userData.fullName}</h3>
                            <button class="font-poppins text-bluecustom text-xs" style={{marginLeft:'860px', marginTop:"100px"}}>View more</button>
                            <h3 class="font-poppins font-bold text-right text-gray mt-16" style={{marginRight:"10px"}}>
                                <span class="border p-32 border-white rounded-lg bg-lightgraycustom text-sm" style={{paddingTop:"30px"}}>
                                    Finished
                                    <span class="ml-32 text-sm border border-black rounded-full p-1 text-xs">5 courses</span>
                                </span>
                            </h3>
                            <p className="font-poppins text-sm font-bold mt-4" style={{marginLeft:"550px"}}>Course 1 ........................................................................</p>
                            <p className="font-poppins text-sm font-bold mt-4" style={{marginLeft:"550px"}}>Course 2 .......................................................................</p>
                            <p className="font-poppins text-sm font-bold mt-4" style={{marginLeft:"550px"}}>Course 3 ........................................................................</p>
                            <button class="font-poppins text-bluecustom text-xs" style={{marginLeft:'860px'}}>View more</button>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12" style={{marginTop:"-320px"}}>Date of Birth</h3>
                            <h3 class="font-poppins font-bold text-left  text-gray ml-12  mt-2">{props.userData.dateOfBirth.substring(0, 10)}</h3>
                            <h2 class="text-2xl font-poppins font-bold text-left text-bluecustom ml-10 mt-8">Address</h2>
                            <h3 class="font-poppins font-bold text-left  text-gray ml-12  mt-2">{props.userData.address}</h3>
                            <h2 class="text-2xl font-poppins font-bold text-left text-bluecustom ml-10 mt-8">Contact</h2>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12 mt-2">Phone Number</h3>
                            <h3 class="font-poppins font-bold text-left  text-gray ml-12  mt-2">{props.userData.phoneNumber}</h3>
                            <h3 class="font-poppins font-bold text-left text-darkgraycustom ml-12 mt-2">Email</h3>
                            <h3 class="font-poppins font-bold text-left  text-gray ml-12  mt-2">{props.userData.email}</h3>
                            <button class="font-poppins rounded-full border border-lightgraycustom bg-lightgraycustom px-4 py-2 text-bluecustom ml-10 mt-10">Edit</button>
                            <button class="font-poppins rounded-full border border-lightgraycustom bg-lightgraycustom px-4 py-2 text-bluecustom ml-4">Change password</button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export {Profile}
