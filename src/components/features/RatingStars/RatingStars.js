import React, { useState } from 'react';
import styles from './RatingStars.module.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setUserRating } from '../../../redux/productsRedux';

const RatingStars = ({ stars, userRating, id }) => {
  const [rating, setRating] = useState(userRating || stars);
  const dispatch = useDispatch();

  const handleRating = (rating) => {
    rating === 0 ? setRating(stars) : setRating(rating);
    dispatch(setUserRating({ userRating: rating, id }));
  };

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#' onClick={(e) => { e.preventDefault(); handleRating(i); }}>
          {userRating !== null && i <= userRating ? (
            <FontAwesomeIcon icon={faStar} className={styles.userRated}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={i <= stars ? faStar : farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

RatingStars.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  userRating: PropTypes.number,
};

export default RatingStars;