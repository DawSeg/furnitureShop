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
      <div className={styles.feedback}>
        <div className={styles.header}>
          <h3>client feedback</h3>
          <div className={styles.dots}>
            <a href='#' className={styles.active}>
              <FontAwesomeIcon icon={faCircle} />
            </a>
            <a href='#'>
              <FontAwesomeIcon icon={faCircle} />
            </a>
            <a href='#'>
              <FontAwesomeIcon icon={faCircle} />
            </a>
          </div>
        </div>
        <div className={styles.feedbackBox}>
          <div className={styles.apostrophe}>
            <img src='../../../../images/feedback/apostrophe.png'></img>
          </div>
          <p className={styles.feedbackText}>
            {feedback[0].comment}
          </p>
          <div className={styles.author}>
            <img src={feedback[0].image}></img>
            <p className={styles.name}>
              {feedback[0].name} <br />
              <span className={styles.client}>{feedback[0].client}</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Feedback;