import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Rating = (props) => {
    const renderStars = () => {
        const stars = [];
        const maxStars = 5;
        const filledStars = Math.min(props.value, maxStars);

        for (let i = 0; i < maxStars; i++) {
            if (i < filledStars) {
                stars.push(<FontAwesomeIcon icon={faStar} className="text-orange mr-2" key={i} />);
            } else {
                stars.push(<FontAwesomeIcon icon={emptyStar} className="text-orange mr-2" key={i} />);
            }
        }

        return stars;
    };

    return <div className="rating">{renderStars()}</div>;
};

export default Rating;
