import React from 'react';
// import PropTypes from 'prop-types';
import HotDeals from '../../features/HotDeals/HotDeals';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Sales from '../../features/Sales/Sales';
import Gallery from '../../features/Gallery/Gallery';
import Brands from '../../features/Brands/Brands';
import Feedback from '../../features/Feedback/Feedback';

const Homepage = () => (
  <div className={styles.root}>
    <HotDeals />
    <FeatureBoxes />
    <Sales />
    <NewFurniture />
    <Gallery />
    <Brands />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
