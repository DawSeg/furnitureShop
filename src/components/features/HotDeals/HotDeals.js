import { useDispatch, useSelector } from 'react-redux';
import styles from './HotDeals.module.scss';
import React, { useEffect, useState } from 'react';
import { addToCompare, getCompared, getHotDeals, toggleFavourite } from '../../../redux/productsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faExchangeAlt, faShoppingBasket, faCircle, faChevronLeft, faChevronRight }
  from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import RatingStars from '../../features/RatingStars/RatingStars';
import Button from '../../common/Button/Button';
import { Container } from 'react-bootstrap';
import Swipeable from '../Swipeable/Swipeable';

const PromotedProducts = () => {
  const hotDeals = useSelector(getHotDeals);
  const comparisonList = useSelector(getCompared);
  const dispatch = useDispatch();
  const [activeDealLeft, setActiveDealLeft] = useState(0);
  const [activeDealRight, setActiveDealRight] = useState(0);
  const [autoPlayLeft, setAutoPlayLeft] = useState(true);
  const [isFading, setIsFading] = useState(false);

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

  const handleDealChangeLeft = (newDeal) => {
    setActiveDealLeft(newDeal);
    setAutoPlayLeft(false);
    setTimeout(() => {
      setAutoPlayLeft(true);
    }, 10000);
  };

  useEffect(() => {
    const dealIntervalLeft = setInterval(() => {
      if (autoPlayLeft) {
        setActiveDealLeft((prevPage) => (prevPage + 1) % hotDeals.length);
      }
    }, 3000);
    return () => {
      clearInterval(dealIntervalLeft);
    };
  }, [autoPlayLeft]);

  const leftArrowhandler = (e) => {
    e.preventDefault();
    setActiveDealRight((prevPage) => (prevPage - 1 + hotDeals.length) % hotDeals.length);
    if (activeDealRight === 0) {
      setActiveDealRight(hotDeals.length - 1);
    }
  };

  const rightArrowHandler = (e) => {
    e.preventDefault();
    setActiveDealRight((prevPage) => (prevPage + 1) % hotDeals.length);
  };


  const handleSwipeLeft = () => {
    if (activeDealRight > 0) {
      setActiveDealRight(activeDealRight - 1);
    }
  };

  const handleSwipeRight = () => {
    if (activeDealRight < hotDeals.length - 1) {
      setActiveDealRight(activeDealRight + 1);
    }
  };


  return (
    <Container>
      <div className={`${styles.hotDeals} row`}>
        <div className={`${styles.leftSideDeal}`}>
          <div className={`${styles.hotDealsHeader}`}>
            <h3>hot deals</h3>
            <div className={styles.dots}>
              <ul>
                {hotDeals.map((product, index) => (
                  <li key={index}>
                    <a
                      onClick={() => handleDealChangeLeft(index)}
                      className={index === activeDealLeft ? styles.active : ''}
                    >
                      <FontAwesomeIcon icon={faCircle} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {hotDeals.map((product, index) => (
            index === activeDealLeft && (
              <div key={index} className={styles.hotDealBox}>
                <img src={product.image} alt={product.name} />
                <div className={styles.hotDealmid}>
                  <Button className={styles.cartButton} variant='small'>
                    <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>ADD TO CART
                  </Button>
                  <div className={`${styles.timer}`}>
                    <div className={styles.wheele}>
                      <p>
                        <span>25</span><br />days
                      </p>
                    </div>
                    <div className={styles.wheele}>
                      <p>
                        <span>10</span><br />hrs
                      </p>
                    </div>
                    <div className={styles.wheele}>
                      <p>
                        <span>45</span><br />mins
                      </p>
                    </div>
                    <div className={styles.wheele}>
                      <p>
                        <span>30</span><br />secs
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.hotDealBottom}>
                  <h4>{product.name}</h4>
                  <RatingStars stars={product.stars} userRating={product.userRating} id={product.id} />
                  <div className={styles.line}></div>
                  <div className={styles.lowerSection}>
                    <div className={styles.buttons}>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faEye} />
                      </Button>
                      <Button onClick={(e) => favouriteClickHandler(e, product.id)} variant='outline'
                        className={`${styles.outlineButton} ${product.favourite ? styles.active : ''}`}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </Button>
                      <Button onClick={(e) => compareClickHandler(e, product.id)} variant='outline'
                        className={`${styles.outlineButton} ${product.comparison ? styles.active : ''}`}
                      >
                        <FontAwesomeIcon icon={faExchangeAlt} />
                      </Button>
                    </div>
                    <div className={styles.prices}>
                      {product.oldPrice ? (
                        <div className={styles.oldPrice}>
                          $ {product.oldPrice}
                        </div>
                      ) : null}
                      <div className={styles.price}>
                        <Button noHover variant='small' className={styles.price}>
                          $ {product.price}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        <div className={`${styles.rightSideDeal}`}>
          <Swipeable leftAction={handleSwipeLeft} rightAction={handleSwipeRight}>
            {hotDeals.map((product, index) => (
              index === activeDealRight && (
                <div className={`${styles.insideBanner}`} key={index}>
                  <img src={product.image} alt={product.name}></img>
                  <div className={`${styles.imgBanner} text-center`}>
                    <h3>
                      Indoor <span>Furniture</span>
                    </h3>
                    <h4>Save up to 50% on all furniture</h4>
                    <Button className={styles.shopNow}>SHOP NOW</Button>
                  </div>
                  <Button onClick={leftArrowhandler} className={`${styles.arrLeft} col-4 text-center`}>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  </Button>
                  <Button onClick={rightArrowHandler} className={styles.arrRight}>
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </Button>
                </div>
              )
            ))}
          </Swipeable>
        </div>

      </div>
    </Container>
  );
};

export default PromotedProducts;