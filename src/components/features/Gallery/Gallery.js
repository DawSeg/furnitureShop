import { Container } from 'react-bootstrap';
import styles from './Gallery.module.scss';
import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faExchangeAlt, faEye, faShoppingBasket, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import RatingStars from '../RatingStars/RatingStars';
import { useDispatch, useSelector } from 'react-redux';
import { addToCompare, getAll, getCompared, toggleFavourite } from '../../../redux/productsRedux';

const Gallery = () => {
  const products = useSelector(getAll);
  const comparisonList = useSelector(getCompared);
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [category, setCategory] = useState('featured');
  const dispatch = useDispatch();

  const favouriteClickHandler = (e, id) => {
    e.preventDefault();
    dispatch(toggleFavourite(id));
  };

  const compareClickHandler = (e, id) => {
    e.preventDefault();
    if (comparisonList.length >= 4) {
      alert('The maximum number of products for comparison is 4');
    } else {
      dispatch(addToCompare(id));
    }
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const handleNextThumbnails = () => {
    if (startIndex + 7 < filteredProducts.length) {
      setStartIndex(startIndex + 7);
    }
  };

  const handlePrevThumbnails = () => {
    if (startIndex - 7 >= 0) {
      setStartIndex(startIndex - 7);
    }
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    setStartIndex(0);
    setActiveIndex(0);
  };

  const filteredProducts = products.filter((product) => {
    if (category === 'featured') return product.featured;
    if (category === 'topSeller') return product.topSeller;
    if (category === 'saleOff') return product.saleOff;
    if (category === 'topRated') return product.topRated;
    return true; 
  });

  return (
    <Container>
      <div className={styles.gallery}>
        <div className={styles.leftSide}>
          <div className={styles.header}>
            <h3>furniture gallery</h3>
          </div>
          <div className={styles.navigation}>
            <a href='#' onClick={(e) => { e.preventDefault(); handleCategoryChange('featured'); }} className={category === 'featured' ? styles.active : ''}>featured</a>
            <a href='#' onClick={(e) => { e.preventDefault(); handleCategoryChange('topSeller'); }} className={category === 'topSeller' ? styles.active : ''}>top seller</a>
            <a href='#' onClick={(e) => { e.preventDefault(); handleCategoryChange('saleOff'); }} className={category === 'saleOff' ? styles.active : ''}>sale off</a>
            <a href='#' onClick={(e) => { e.preventDefault(); handleCategoryChange('topRated'); }} className={category === 'topRated' ? styles.active : ''}>top rated</a>
          </div>

          <div className={styles.slider}>
            <div className={styles.productBox}>
              <div className={styles.mainImage}>
                {filteredProducts.length > 0 && (
                  <>
                    <img src={filteredProducts[activeIndex].image} alt={filteredProducts[activeIndex].name} />
                    <div className={styles.actions}>
                      <Button onClick={(e) => favouriteClickHandler(e, filteredProducts[activeIndex].id)} variant='outline'>
                        <FontAwesomeIcon icon={faHeart} />
                      </Button>
                      <Button onClick={(e) => compareClickHandler(e, filteredProducts[activeIndex].id)} variant='outline'>
                        <FontAwesomeIcon icon={faExchangeAlt} />
                      </Button>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faEye} />
                      </Button>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faShoppingBasket} />
                      </Button>
                    </div>
                    <div className={styles.prices}>
                      <p>${filteredProducts[activeIndex].price}</p>
                      {filteredProducts[activeIndex].oldPrice && (
                        <p className={styles.oldPrice}>${filteredProducts[activeIndex].oldPrice}</p>
                      )}
                    </div>
                    <div className={styles.rating}>
                      <p>{filteredProducts[activeIndex].name}</p>
                      <RatingStars stars={filteredProducts[activeIndex].stars}
                        userRating={filteredProducts[activeIndex].userRating} id={filteredProducts[activeIndex].id}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className={styles.thumbnails}>
                <button onClick={handlePrevThumbnails} className={styles.navButtonLeft}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {filteredProducts.slice(startIndex, startIndex + 7).map((product, index) => (
                  <img
                    key={startIndex + index}
                    src={product.image}
                    alt={product.name}
                    onClick={() => handleThumbnailClick(startIndex + index)}
                    className={startIndex + index === activeIndex ? styles.activeThumbnail : ''}
                  />
                ))}
                <button onClick={handleNextThumbnails} className={styles.navButtonRight}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>

          <div className={styles.description}>
            <p className={styles.price}>FROM
              <span> ${filteredProducts[0].price}</span>
            </p>
            <p className={styles.title}>Bedroom Bed</p>
            <Button className={styles.shopNow}>shop now</Button>
          </div>
          <img src={products[29].image} alt={filteredProducts[0].name} />


        </div>
      </div>
    </Container>
  );
};

export default Gallery;