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
          <img src={products[50].image}></img>
          <div className={styles.saleDescription}>
            <h3>Guest room <span><br />{products[50].category}</span> </h3>
            <p>-20%</p>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.topSection}>
            <img className={styles.productLeft} src={products[28].image}></img>
            <img className={styles.productRight} src={products[29].image}></img>
            <div className={styles.topDescription}>
              <h3>
                <span className={styles.bold}>office </span>
                chair
                <span className={styles.letterSpacing}> collection</span>
                <p>$200</p>
              </h3>
            </div>
          </div>
          <div className={styles.bottomSection}>
            <img src={products[13].image}></img>
            <div className={styles.bottomDescription}>
              <h3><span>special</span> collection</h3>
              <p>save up to 45% of furniture</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Sales;