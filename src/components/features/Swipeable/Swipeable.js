import React from 'react';
import PropTypes from 'prop-types';
import Swipe from 'react-easy-swipe';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const handleSwipeLeft = () => {
    if (rightAction) {
      rightAction();
    }
  };

  const handleSwipeRight = () => {
    if (leftAction) {
      leftAction();
    }
  };

  return (
    <Swipe onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
      {children}
    </Swipe>
  );
};

Swipeable.propTypes = {
  leftAction: PropTypes.func.isRequired,
  rightAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Swipeable;