import React from "react";
import online from "../../images/100 online.svg";
import level from "../../images/level.svg";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {useState,useEffect} from 'react';
import skillsifyService from "../../Service/SkillsifyService";
import course from "../../images/course.png";
import Rating from "../Rating/Rating";

library.add(faUser)

export default function Course(props) {
  const [data, setData] = useState([])
  const { id } = useParams();


  useEffect(() => {
    skillsifyService.getCourseById(id)
        .then(data => {
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
    <div className="container">
      <div className="flex flex-col md:flex-row flex-1 p-6 md:p-12 bg-lightgraycustom rounded-xl mt-5">
        <img class=" ml-10" src={course} alt="" style={{width: "400px", height: "400px"}}/>
        <div class="flex flex-col justify-start p-6">
          <h1 class="mb-2 text-2xl font-bold ml-28" style={{fontSize:"36px"}}>{data.name}</h1>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 ml-28 mr-28">
            {data.description}
          </p>
          <div className="flex ml-28">
            <img className="flex-none w-6 h-6" src={online} alt="online" style={{width:"50px", height:"50px"}}></img>
            <h3 className="flex-none font-bold w-32 h-14 ml-6">100% online</h3>
            <p class="text-sm mt-8 -ml-32">Start instantly and learn at your own schedule.</p>
          </div>
          <div className="flex ml-28 mt-4">
            <img className="flex-none w-6 h-6" src={level} alt="level" style={{width:"50px", height:"50px"}}></img>
            <h3 className="flex-none font-bold w-32 h-14 ml-6">{data.skillRequired}</h3>
            <p class="text-sm mt-8 -ml-32">No previous knowledge needed.</p>
          </div>
          <div className="flex ml-28 mt-4">
              {data.courseReviews && data.courseReviews.length > 0 ? (
                  <>
                      <Rating
                          value={
                              data.courseReviews.reduce(
                                  (sum, i) => sum + i.rating,
                                  0
                              ) / data.courseReviews.length
                          }
                      />
                      <span className="text-gray-700">
              {data.courseReviews.length} reviews
            </span>
                  </>
              ) : (
                  <span>No reviews yet</span>)}
          </div>
        </div>
      </div>
      <div className="ml-24 flex justify-between">
        <div>
          <Link to={`/reviews/`}>
          <button className="text-black font-bold py-2 px-4 mr-4">Reviews</button>
         </Link>
          <button className="text-black font-bold py-2 px-4 mr-4">Syllabus</button>
          <button className="text-black font-bold py-2 px-4 mr-4">Instructors</button>
          <button className="text-black font-bold py-2 px-4 mr-4">Students</button>
        </div>
        <div>
          {props.isUserLoggedIn &&
          <Link to={"/enroll-course"}>
          <button className="inline-block rounded bg-bluecustom px-6 pb-2 pt-2 text-bold font-medium text-white mr-40 mb-10">Enroll Course</button>
          </Link>
          }
          <Link to={"/courses"}>
          <button className="inline-block rounded bg-bluecustom px-6 pb-2 pt-2 text-bold font-medium text-white mr-40 mb-10">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Course };
