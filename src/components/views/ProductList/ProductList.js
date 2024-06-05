import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { categoryName } = useParams();

  return (
    <div className={styles.root}>

    </div>
  );
};

export default ProductList;
