import React from 'react';
import styles from './RatingStars.module.scss';
import { faStar }
  from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const RatingStars = ({ stars, userRating }) => {

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#'>
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
  stars: PropTypes.number,
  userRating: PropTypes.number,
};

export default RatingStars;