import React from 'react';
import ProductBox from '../../common/ProductBox/ProductBox';
import Brands from '../../features/Brands/Brands';
import styles from './ProductList.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getCategoryById } from '../../../redux/categoriesRedux';
import { getProductsByCategory } from '../../../redux/productsRedux';
import { Container } from 'react-bootstrap';

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
      <Container>
        <div className={styles.productsHeader}>
          <h2 className={styles.categoryHeader}>
            Products in {currentCategory.name} category:
          </h2>
        </div>
        <section className='row'>
          {currentProducts.map(product => (
            <div key={product.id} className='col-md-4 col-sm-12'>
              <ProductBox {...product} />
            </div>
          ))}
        </section>
        <Brands />
      </Container>
    </div>
  );
};

export default ProductList;