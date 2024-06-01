import React from 'react';
import styles from './Feedback.module.scss';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getFeedback } from '../../../redux/feedbackRedux';

const Feedback = () => {

  const feedback = useSelector(getFeedback);

  return (
    <Container>
      <div className={styles.header}>
        <h3>client feedback</h3>
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faCircle} />
      </div>
      <div className={styles.feedbackBox}>
        <p className={styles.apostrophe}>&apos;&apos;</p>
        <p className={styles.feedbackText}>
          {feedback[0].comment}
        </p>
        <img src={feedback[0].image}></img>
        <p className={styles.name}>
          {feedback[0].name}
        </p>
        <p className={styles.client}>{feedback[0].client}</p>
      </div>
    </Container>
  );
};

export default Feedback;