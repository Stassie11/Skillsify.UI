import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faStar, faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState,useEffect} from 'react'
import skillsifyService from "../../Service/SkillsifyService";
import Rating from "../Rating/Rating";

library.add(faStar)

export default function CoursesList(props) {

  const [data, setData] = useState([])
  const [response, setResponse] = useState()

  useEffect(() => {
    props.loadCourses().then(data => {
        console.log("server is up")
        console.log(data)
        setData(data)
    })
        .catch((error) => {
            console.error('Error:', error);
            console.log("server is down!!")
        });

  },[])
    return (
        <div className="container mt-5 p-4" >
            {data.map((x)=>(
                    <div className="p-4 bg-white rounded-xl mt-10 ml-64 mr-64 h-22">
                    <div className="border border-white rounded-lg overflow-hidden mt-62 h-50">
                      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="w-1/3">
                          <img className="object-cover" src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" alt=""/>
                        </div>
                        <div className="w-2/3 p-2 mt-5">
                          <h1 className="text-xl font-medium mb-2 ml-20">{x.name}</h1>
                          <h1 className='ml-20'>By {x.creator.fullName} </h1>
                          <h4 className={'ml-20'}>{x.about}</h4>
                          <div className="flex items-center mb-4 ml-20">
                             <Rating value={x.courseReviews.reduce((sum,i) => sum + i.rating, 0) / x.courseReviews.length} />
                            <span className="text-gray-700">{x.courseReviews.length} reviews</span>
                          </div>
                          <div className="flex items-center mb-4 ml-20">
                              <FontAwesomeIcon icon={faUser} />
                            <span className="text-gray-700 ml-2">{x.participants.length} participants</span>
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
