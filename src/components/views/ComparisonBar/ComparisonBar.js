import styles from './ComparisonBar.module.scss';
import React from 'react';
import ProductCard from '../../features/ProductCard/ProductCard';

const ComparisonBar = () => {

  return (
    <div className={styles.bar}>
      <ProductCard />
    </div>
  );
};

export default ComparisonBar;