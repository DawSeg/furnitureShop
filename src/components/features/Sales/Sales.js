import { Container } from 'react-bootstrap';
import styles from './Sales.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

const Sales = () => {

  const products = useSelector(getAll);

  return (
    <Container>
      <div className={styles.Sales}>
        <div className={styles.leftSide}>
          <img src={products[0].image}></img>
          <div className={styles.saleDescription}>
            <h3>Guest room <span>{products[0].category}</span> </h3>
            <p>{products[0].discount}</p>
          </div>
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

export default Sales;