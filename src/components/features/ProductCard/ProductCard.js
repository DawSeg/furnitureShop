import React from 'react';
import styles from './ProductCard.module.scss';
import { getCompared, removeCompare } from '../../../redux/productsRedux';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const ProductCard = () => {
  const comparedProducts = useSelector(state => getCompared(state));
  const dispatch = useDispatch();
  const removeHandler = (productId) => {
    dispatch(removeCompare(productId));
  };

  return (
    <div className={'col-3' + styles.productCard}>
      {comparedProducts.map(product =>
        <div className={styles.product} key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <Button onClick={(e) => { e.preventDefault(); removeHandler(product.id); }}
            variant='small'
          >
            <FontAwesomeIcon icon={faWindowClose} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;