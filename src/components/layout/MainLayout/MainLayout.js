import React from 'react';
import PropTypes from 'prop-types';
import ComparisonBar from '../../features/ComparisonBar/ComparisonBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <ComparisonBar />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
