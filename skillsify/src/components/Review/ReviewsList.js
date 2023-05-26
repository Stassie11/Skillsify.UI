import { useState } from 'react';
import Rating from "../Rating/Rating";
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';

export default function ReviewsList(props) {
    const { courseReviews } = props;

    return (
        <div className="container mt-5 p-4">
            {courseReviews.map((x) => (
                <div className="p-4 bg-white rounded-xl mt-10 ml-64 mr-64 h-22" key={x.id}>
                    <div className="border border-white rounded-lg overflow-hidden mt-62 h-50">
                        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="w-2/3 p-2 mt-5">
                                <h1 className="text-xl font-medium mb-2 ml-20">{x.rating}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export { ReviewsList };
