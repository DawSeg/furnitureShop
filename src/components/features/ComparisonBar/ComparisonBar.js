import React from 'react';
import styles from './ComparisonBar.module.scss';
import { getCompared, removeCompare } from '../../../redux/productsRedux';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const ComparisonBar = () => {
  const comparedProducts = useSelector(state => getCompared(state));
  const dispatch = useDispatch();
  const removeHandler = (productId) => {
    dispatch(removeCompare(productId));
  };

  return (
    <div className={styles.productCard}>
      {comparedProducts.map(product =>
        <div className={styles.product} key={product.id}>
          <img src={product.image} alt={product.name} />
          <Button className={styles.removeButton} onClick={(e) => { e.preventDefault(); removeHandler(product.id); }}
            variant='small'
          >
            <FontAwesomeIcon icon={faWindowClose} />
          </Button>
        </div>
      )}
      <OverlayTrigger
        placement='right'
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id='button-tooltip-2'>Compare</Tooltip>}
      >
        <Button onClick={e => e.preventDefault()} variant='small'
          className={comparedProducts.length > 0 ? styles.compareVisible : styles.compare}
        >
          <FontAwesomeIcon icon={faExchangeAlt} />
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default ComparisonBar;