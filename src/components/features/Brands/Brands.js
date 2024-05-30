import React from 'react';
import styles from './Brands.module.scss';
import { getBrands } from '../../../redux/brandsRedux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  const brands = useSelector(getBrands);
  return (
    <section className='container'>
      <div className={styles.brands}>
        <button className={styles.brandsBtn}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.brandsWrapper}>
          {brands.map(brand => (
            <li key={brand.id}>
              <img src={brand.image} alt={brand.id} />
            </li>
          ))}
        </div>
        <button className={styles.brandsBtn}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};
export default Brands;