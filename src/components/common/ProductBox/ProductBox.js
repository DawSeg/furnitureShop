import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExchangeAlt, faShoppingBasket }
  from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCompare, getCompared, toggleFavourite } from '../../../redux/productsRedux';

const ProductBox = ({ name, id, price, promo, stars, image, favourite, comparison, oldPrice }) => {
  const comparisonList = useSelector(state => getCompared(state));
  const dispatch = useDispatch();
  const favouriteClickHandler = (e) => {
    e.preventDefault();
    dispatch(toggleFavourite(id));
  };
  const compareClickHandler = e => {
    e.preventDefault();
    if (comparisonList.length >= 4) {
      alert('The maximum number of products for comparison is 4');
    } else {
      dispatch(addToCompare(id));
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {<img key={name} src={image} alt={name} />}
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button onClick={favouriteClickHandler} variant='outline'
            className={`${styles.outlineButton} ${favourite ? styles.active : ''}`}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button onClick={compareClickHandler} variant='outline'
            className={`${styles.outlineButton} ${comparison ? styles.active : ''}`}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        {oldPrice ? (
          <div className={styles.oldPrice}>
            $ {oldPrice}
          </div>
        ) : null}
        <div className={styles.price}>
          <Button noHover variant='small' className={styles.price}>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string.isRequired,
  favourite: PropTypes.bool.isRequired,
  comparison: PropTypes.bool.isRequired,
  oldPrice: PropTypes.number,
  id: PropTypes.string,
};

export default ProductBox;
