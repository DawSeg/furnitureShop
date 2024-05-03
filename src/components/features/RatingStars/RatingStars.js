import React from 'react';
import styles from './RatingStars.module.scss';
import { faStar }
  from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { propTypes } from 'react-bootstrap/esm/Image';

const RatingStars = ({ stars }) => {

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#'>
          {i <= stars ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

RatingStars.propTypes = {
  stars: propTypes.number,
};

export default RatingStars;