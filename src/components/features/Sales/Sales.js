import { Container } from 'react-bootstrap';
import styles from './Sales.module.scss';
import React from 'react';

const Sales = () => {

  return (
    <Container>
      <div className={styles.Sales}>
        <div className={styles.leftSide}>
          <h3>Guest room <span>sofa</span> </h3>
          <p>-20%</p>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.topSection}>

          </div>
          <div className={styles.bottomSection}>

          </div>
        </div>
      </div>
    </Container>
  );
};