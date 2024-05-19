import { Container } from 'react-bootstrap';
import styles from './Gallery.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faExchangeAlt, faEye, faShoppingBasket, faChevronLeft, faChevronRight }
  from '@fortawesome/free-solid-svg-icons';
import RatingStars from '../RatingStars/RatingStars';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

const Gallery = () => {
  const products = useSelector(getAll);

  return (
    <Container>
      <div className={styles.gallery}>
        <div className={styles.leftSide}>
          <div className={styles.header}>
            <h3>furniture gallery</h3>
          </div>
          <div className={styles.navigation}>
            <a>featured </a>
            <a>top seller </a>
            <a>sale off </a>
            <a>top rated </a>
          </div>
          <div className={styles.productBox}>
            <img src={products[0].image}></img>
            <div className={styles.ations}>
              <Button variant='outline'  >
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <Button variant='outline'  >
                <FontAwesomeIcon icon={faExchangeAlt} />
              </Button>
              <Button variant='outline'  >
                <FontAwesomeIcon icon={faEye} />
              </Button>
              <Button variant='outline'  >
                <FontAwesomeIcon icon={faShoppingBasket} />
              </Button>
            </div>
            <div className={styles.rating}>
              <RatingStars />
            </div>
            <div className={styles.prices}>
              <p>{products[7].price}</p>
              <p>{products[7].oldPrice}</p>
            </div>
          </div>
          <div className={styles.slider}>
            
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src={products[1].image}></img>
          <p className={styles.price}>from
            <span>{products[0].price}</span>
          </p>
          <p>bedroom bed</p>
          <Button className={styles.shopNow}>shop now</Button>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;