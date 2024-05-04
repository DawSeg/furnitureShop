import { useSelector } from 'react-redux';
import styles from './HotDeals.module.scss';
import React from 'react';
import { getHotDeals } from '../../../redux/productsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faExchangeAlt, faShoppingBasket, faCircle, faChevronLeft, faChevronRight }
  from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import RatingStars from '../../features/RatingStars/RatingStars';
import Button from '../../common/Button/Button';
import { Container } from 'react-bootstrap';

const PromotedProducts = () => {
  const hotDeals = useSelector(getHotDeals);
  const product = hotDeals[0];

  return (
    <Container>
      <div className={`${styles.hotDeals} row`}>
        <div className={`${styles.leftSideDeal}`}>
          <div className={`${styles.hotDealsHeader}`}>
            <h3>hot deals</h3>
            <div className={styles.dots}>
              <a>
                <FontAwesomeIcon icon={faCircle} className={styles.active} />
              </a>
              <a>
                <FontAwesomeIcon icon={faCircle} />
              </a>
              <a>
                <FontAwesomeIcon icon={faCircle} />
              </a>
            </div>
          </div>
          <div className={styles.hotDealBox}>
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
                  <Button variant='outline'
                    className={`${styles.outlineButton} ${product.favourite ? styles.active : ''}`}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </Button>
                  <Button variant='outline'
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
        </div>
        <div className={`${styles.rightSideDeal}`}>
          <div className={`${styles.insideBanner}`}>
            <img src={product.image}></img>
            <div className={`${styles.imgBanner} text-center`}>
              <h3>
                Indoor <span>Furniture</span>
              </h3>
              <h4>Save up to 50% on all furniture</h4>
              <Button className={styles.shopNow}>SHOP NOW</Button>
            </div>
            <Button className={`${styles.arrLeft} col-4 text-center`}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
            <Button className={styles.arrRight}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PromotedProducts;