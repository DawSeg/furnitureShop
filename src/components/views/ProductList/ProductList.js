import React from 'react';
import ProductBox from '../../common/ProductBox/ProductBox';
import Brands from '../../features/Brands/Brands';
import styles from './ProductList.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getCategoryById } from '../../../redux/categoriesRedux';
import { getProductsByCategory } from '../../../redux/productsRedux';

const ProductList = () => {
  const { categoryId } = useParams();
  const currentCategory = useSelector(state =>
    getCategoryById(state, categoryId)
  );
  const currentProducts = useSelector(state =>
    currentCategory ? getProductsByCategory(state, currentCategory.id) : []
  );

  if (!currentCategory) {
    return <div className={styles.root}>Category not found</div>;
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <p>
          Bedroom <strong>Furniture</strong>
        </p>
        <div className={styles.productsHeader}>
          <h2>{currentCategory.title}</h2>
        </div>
        <section className='row'>
          {currentProducts.map(product => (
            <div key={product.id} className='col-md-4 col-sm-12'>
              <ProductBox {...product} {...product.image} />
            </div>
          ))}
        </section>
        <Brands />
      </div>
    </div>
  );
};

export default ProductList;