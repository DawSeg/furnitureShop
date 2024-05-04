import { useSelector } from 'react-redux';
import styles from './HotDeals.module.scss';
import React from 'react';
import { getHotDeals } from '../../../redux/productsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket, faCircle, faChevronLeft, faChevronRight }
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
        <div className={`${styles.leftSideDeal} col-4`}>
          <div className={styles.hotDealHeader}>
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
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>ADD TO CART
            </Button>
            <div className={styles.timer}>
              <div className={styles.wheele}>
                <p>25<br />days</p>
              </div>
              <div className={styles.wheele}>
                <p>10<br />hrs</p>
              </div>
              <div className={styles.wheele}>
                <p>5<br />mins</p>
              </div>
              <div className={styles.wheele}>
                <p>30<br />secs</p>
              </div>
              <div className={styles.hotDealBottom}>
                <h4>{product.name}</h4>
                <RatingStars stars={product.stars} userRating={product.userRating} id={product.id} />
                <div className={styles.line}></div>
                <div className={styles.actions}>
                  <div className={styles.outlines}>
                    <Button variant='outline'
                      className={`${styles.outlineButton} ${product.favourite ? styles.active : ''}`}
                    >
                      <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                    </Button>
                    <Button variant='outline'
                      className={`${styles.outlineButton} ${product.comparison ? styles.active : ''}`}
                    >
                      <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                    </Button>
                  </div>
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
        <div className={`${styles.rightSideDeal} col-8`}>
          <div className={`${styles.inside_banner}`}>
            <img src={product.image}></img>
            <div className={styles.img_banner}>
              <h3>
                Indoor <span>Furniture</span>
              </h3>
              <h4>Save up to 50% on all furniture</h4>
              <Button className={styles.shop_now}>SHOP NOW</Button>
            </div>
            <Button className={styles.arr_left}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
            <Button className={styles.arr_right}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PromotedProducts;