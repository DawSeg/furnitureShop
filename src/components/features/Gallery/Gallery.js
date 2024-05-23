import { Container } from 'react-bootstrap';
import styles from './Gallery.module.scss';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faExchangeAlt, faEye, faShoppingBasket, faChevronLeft, faChevronRight }
  from '@fortawesome/free-solid-svg-icons';
import RatingStars from '../RatingStars/RatingStars';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Gallery = () => {
  const products = useSelector(getAll);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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

          <div className={styles.slider}>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.swiper}

            >
              <div className={styles.productBox}>
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
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                </SwiperSlide>
              ))}

            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={8}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.swiper2}
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                </SwiperSlide>
              ))}
            </Swiper>
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