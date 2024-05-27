import { Container, Overlay, Tooltip } from 'react-bootstrap';
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
    if (startIndex + 7 < products.length) {
      setStartIndex(startIndex + 7);
    }
  };

  const handlePrevThumbnails = () => {
    if (startIndex - 7 >= 0) {
      setStartIndex(startIndex - 7);
    }
  };

  return (
    <Container>
      <div className={styles.gallery}>
        <div className={styles.leftSide}>
          <div className={styles.header}>
            <h3>furniture gallery</h3>
          </div>
          <div className={styles.navigation}>
            <a href='' className={styles.active}>featured</a>
            <a href=''>top seller</a>
            <a href=''>sale off</a>
            <a href=''>top rated</a>
          </div>

          <div className={styles.slider}>
            <div className={styles.productBox}>
              <div className={styles.mainImage}>
                <img src={products[activeIndex].image} alt={products[activeIndex].name} />
                <div className={styles.actions}>
                  <Button onClick={(e) => favouriteClickHandler(e, products[activeIndex].id)} variant='outline'>
                    <FontAwesomeIcon icon={faHeart} />
                  </Button>
                  <Button onClick={(e) => compareClickHandler(e, products[activeIndex].id)} variant='outline'>
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
                  <p>${products[activeIndex].price}</p>
                  {products[activeIndex].oldPrice && (
                    <p className={styles.oldPrice}>${products[activeIndex].oldPrice}</p>
                  )}
                </div>
                <div className={styles.rating}>
                  <p>{products[activeIndex].name}</p>
                  <RatingStars stars={products[activeIndex].stars} />
                </div>
              </div>
              <div className={styles.thumbnails}>
                <button onClick={handlePrevThumbnails} className={styles.navButtonLeft}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {products.slice(startIndex, startIndex + 7).map((product, index) => (
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
              <span> ${products[0].price}</span>
            </p>
            <p className={styles.title}>Bedroom Bed</p>
            <Button className={styles.shopNow}>shop now</Button>
          </div>
          <img src={products[29].image} alt={products[29].name}></img>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;