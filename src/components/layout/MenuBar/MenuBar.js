import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { getAll } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

const MenuBar = ({ children }) => {
  const categories = useSelector(getAll);
  const location = useLocation();

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className={styles.productSearch + ' col-lg-6 order-sm-2 '}>
            <ProductSearch />
          </div>
          <Navbar expand='sm' className={' order-lg-2 col-lg-6 ' + styles.menu}>
            <Container>
              <Navbar.Toggle
                aria-controls='basic-navbar-nav'
                className={'fs-6 border-0 ' + styles.button}
              >
                <FontAwesomeIcon icon={faBars} className={styles.icon} />
              </Navbar.Toggle>
              <Navbar.Collapse
                className={'bg-white ' + styles.navbarMenu}
                style={{ zIndex: 1 }}
                id='basic-navbar-nav'
              >
                <Nav className={'ms-lg-auto mr-auto  ' + styles.navigation}>
                  <Nav.Link as={Link} to='/' className={clsx({ [styles.active]: location.pathname === '/' })}>Home</Nav.Link>
                  {categories.map(category => (
                    <Nav.Link
                      key={category.id}
                      as={Link}
                      to={`/shop/${category.name}`}
                      className={clsx({ [styles.active]: location.pathname === `/shop/${category.name}` })}
                    >
                      {category.name}
                    </Nav.Link>
                  ))}
                  <Nav.Link as={Link} to='/shop/blog' className={clsx({ [styles.active]: location.pathname === '/shop/blog' })}>Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;