import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Swipeable from '../Swipeable/Swipeable';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import clsx from 'clsx';

const NewFurniture = ({ categories, products }) => {
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');
  const [isFading, setIsFading] = useState(true);

  const handlePageChange = (newPage) => {
    setIsFading(true);
    setTimeout(() => {
      setActivePage(newPage);
      setIsFading(false);
    }, 300);
  };

  const handleCategoryChange = (newCategory) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveCategory(newCategory);
      setIsFading(false);
    }, 500);
  };

  const categoryProducts = products.filter(item => item.category === activeCategory);
  const pagesCount = Math.ceil(categoryProducts.length / 8);
  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : ''}
        >
          page {i}
        </a>
      </li>
    );
  }

  const handleSwipeLeft = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  const handleSwipeRight = () => {
    if (activePage < pagesCount - 1) {
      setActivePage(activePage + 1);
    }
  };

  return (
    <div className={clsx(styles.root, isFading ? styles.fadeOut : styles.fadeIn)}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row ms-0 w-100 no-gutters align-items-end'>
            <div className={`col-auto ${styles.heading}`}>
              <h3>New furniture</h3>
            </div>
            <div className={'col ' + styles.menu}>
              <ul>
                {categories.map(item => (
                  <li key={item.id}>
                    <a
                      className={item.id === activeCategory ? styles.active : ''}
                      onClick={() => handleCategoryChange(item.id)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <Swipeable leftAction={handleSwipeLeft} rightAction={handleSwipeRight}>
          <div className={clsx('row', isFading ? styles.fadeOut : styles.fadeIn)}>
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-xl-3 col-md-6 col-sm-12'>
                <ProductBox {...item} />
              </div>
            ))}
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;