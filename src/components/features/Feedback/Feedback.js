import React, { useState } from 'react';
import styles from './Feedback.module.scss';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getFeedback } from '../../../redux/feedbackRedux';
import Swipeable from '../Swipeable/Swipeable';

const Feedback = () => {
  const feedbacks = useSelector(getFeedback);
  const [activeFeedback, setActiveFeedback] = useState(0);

  const handleDotClick = (index) => {
    setActiveFeedback(index);
  };

  const handleSwipeLeft = () => {
    setActiveFeedback((prevPage) => (prevPage - 1 + feedbacks.length) % feedbacks.length);
  };

  const handleSwipeRight = () => {
    setActiveFeedback((prevPage) => (prevPage + 1) % feedbacks.length);
  };

  return (
    <Container>
      <div className={styles.feedback}>
        <div className={styles.header}>
          <h3>Client Feedback</h3>
          <div className={styles.dots}>
            {feedbacks.map((feedback, index) => (
              <a
                key={index}
                href='#'
                onClick={(e) => { e.preventDefault(); handleDotClick(index); }}
                className={index === activeFeedback ? styles.active : ''}
              >
                <FontAwesomeIcon icon={faCircle} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.apostrophe}>
          <img src='../../../../images/feedback/apostrophe.png' alt='apostrophe' />
        </div>
        {(
          <Swipeable leftAction={handleSwipeRight} rightAction={handleSwipeLeft}>
            <div className={styles.feedbackBox}>
              <p className={styles.feedbackText}>
                {feedbacks[activeFeedback].comment}
              </p>
              <div className={styles.author}>
                <img src={feedbacks[activeFeedback].image} alt={feedbacks[activeFeedback].name} />
                <p className={styles.name}>
                  {feedbacks[activeFeedback].name} <br />
                  <span className={styles.client}>{feedbacks[activeFeedback].client}</span>
                </p>
              </div>
            </div>
          </Swipeable>
        )}
      </div>
    </Container>
  );
};

export default Feedback;