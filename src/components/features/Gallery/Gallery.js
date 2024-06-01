import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from './Gallery.module.scss';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faExchangeAlt, faEye, faShoppingBasket, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import RatingStars from '../RatingStars/RatingStars';
import { useDispatch, useSelector } from 'react-redux';
import { addToCompare, getAll, toggleFavourite } from '../../../redux/productsRedux';
import clsx from 'clsx';
import Swipeable from '../Swipeable/Swipeable';

const Gallery = () => {
  const products = useSelector(getAll);
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [category, setCategory] = useState('featured');
  const [isFadingCategory, setIsFadingCategory] = useState(false);
  const [isFadingProduct, setIsFadingProduct] = useState(false);
  const [isFadingThumbnails, setIsFadingThumbnails] = useState(false);
  const dispatch = useDispatch();

  const fourteenPhotos = useMediaQuery({ minWidth: 996, maxWidth: 1199 });
  const sixPhotos = useMediaQuery({ minWidth: 768, maxWidth: 995 });
  const threePhotos = useMediaQuery({ minWidth: 400, maxWidth: 767 });
  const twoPhotos = useMediaQuery({ maxWidth: 425 });

  const favouriteClickHandler = (e, id) => {
    e.preventDefault();
    dispatch(toggleFavourite(id));
  };

  const compareClickHandler = (e, id) => {
    e.preventDefault();
    dispatch(addToCompare(id));
  };

  const handleThumbnailClick = (index) => {
    setIsFadingProduct(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsFadingProduct(false);
    }, 500);
  };

  const handleNextThumbnails = () => {
    setIsFadingThumbnails(true);
    setTimeout(() => {
      if (startIndex + getThumbnailsPerPage() < filteredProducts.length) {
        setStartIndex(startIndex + getThumbnailsPerPage());
      }
      setIsFadingThumbnails(false);
    }, 500);
  };

  const handlePrevThumbnails = () => {
    setIsFadingThumbnails(true);
    setTimeout(() => {
      if (startIndex - getThumbnailsPerPage() >= 0) {
        setStartIndex(startIndex - getThumbnailsPerPage());
      }
      setIsFadingThumbnails(false);
    }, 500);
  };

  const handleCategoryChange = (category) => {
    setIsFadingCategory(true);
    setTimeout(() => {
      setCategory(category);
      setStartIndex(0);
      setActiveIndex(0);
      setIsFadingCategory(false);
    }, 500);
  };

  const handleSwipeLeft = () => {
    handlePrevThumbnails();
  };

  const handleSwipeRight = () => {
    handleNextThumbnails();
  };

  const filteredProducts = products.filter((product) => {
    if (category === 'featured') return product.featured;
    if (category === 'topSeller') return product.topSeller;
    if (category === 'saleOff') return product.saleOff;
    if (category === 'topRated') return product.topRated;
    return true;
  });

  const getThumbnailsPerPage = () => {
    if (fourteenPhotos) return 9;
    if (sixPhotos) return 6;
    if (threePhotos) return 3;
    if (twoPhotos) return 2;
    return 7;
  };

  return (
    <Container>
      <div className={styles.gallery}>

        <div className={styles.leftSide}>
          <div className={styles.header}>
            <h3>furniture gallery</h3>
          </div>
          <div className={styles.navigation}>
            <a href='#' onClick={(e) => { e.preventDefault(); handleCategoryChange('featured'); }}
              className={category === 'featured' ? styles.active : ''}>featured
            </a>
            <a href='#' onClick={(e) => { e.preventDefault(); handleCategoryChange('topSeller'); }}
              className={category === 'topSeller' ? styles.active : ''}>top seller
            </a>
            <a href='#' onClick={(e) => { e.preventDefault(); handleCategoryChange('saleOff'); }}
              className={category === 'saleOff' ? styles.active : ''}>sale off
            </a>
            <a href='#' onClick={(e) => { e.preventDefault(); handleCategoryChange('topRated'); }}
              className={category === 'topRated' ? styles.active : ''}>top rated
            </a>
          </div>
          <div className={clsx(styles.slider, !isFadingCategory ? styles.fadeIn : styles.fadeOut)}>
            <div className={styles.productBox}>
              <div className={clsx(styles.mainImage, !isFadingProduct ? styles.fadeIn : styles.fadeOut)}>
                {filteredProducts.length > 0 && (
                  <>
                    <img src={filteredProducts[activeIndex].image} alt={filteredProducts[activeIndex].name} />
                    <div className={styles.actions}>
                      <OverlayTrigger
                        placement='right'
                        delay={{ show: 250, hide: 400 }}
                        overlay={<Tooltip id='button-tooltip-2'>Add to favourite</Tooltip>}
                      >
                        <Button onClick={(e) => favouriteClickHandler(e, filteredProducts[activeIndex].id)}
                          variant='outline'
                          className={filteredProducts[activeIndex].favourite ? styles.active : ''}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement='right'
                        delay={{ show: 250, hide: 400 }}
                        overlay={<Tooltip id='button-tooltip-2'>Add to compare</Tooltip>}
                      >
                        <Button onClick={(e) => compareClickHandler(e, filteredProducts[activeIndex].id)}
                          variant='outline'
                          className={filteredProducts[activeIndex].comparison ? styles.active : ''}
                        >
                          <FontAwesomeIcon icon={faExchangeAlt} />
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement='right'
                        delay={{ show: 250, hide: 400 }}
                        overlay={<Tooltip id='button-tooltip-2'>Show more</Tooltip>}
                      >
                        <Button variant='outline'>
                          <FontAwesomeIcon icon={faEye} />
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement='right'
                        delay={{ show: 250, hide: 400 }}
                        overlay={<Tooltip id='button-tooltip-2'>Add to cart</Tooltip>}
                      >
                        <Button variant='outline'>
                          <FontAwesomeIcon icon={faShoppingBasket} />
                        </Button>
                      </OverlayTrigger>
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
                        userRating={filteredProducts[activeIndex].userRating}
                        id={filteredProducts[activeIndex].id}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className={styles.thumbnails}>
                <button onClick={handlePrevThumbnails} className={styles.navButtonLeft}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <Swipeable leftAction={handleSwipeLeft} rightAction={handleSwipeRight}>
                  <div className={clsx(styles.thumbnailsList, !isFadingThumbnails ? styles.fadeIn : styles.fadeOut)}>
                    {filteredProducts.slice(startIndex, startIndex + getThumbnailsPerPage()).map((product, index) => (
                      <img
                        key={startIndex + index}
                        src={product.image}
                        alt={product.name}
                        onClick={() => handleThumbnailClick(startIndex + index)}
                        className={startIndex + index === activeIndex ? styles.activeThumbnail : ''}
                      />
                    ))}
                  </div>
                </Swipeable>
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
          <img src={products[12].image} alt={filteredProducts[0].name} />
        </div>
      </div>
    </Container>
  );
};

export default Gallery;