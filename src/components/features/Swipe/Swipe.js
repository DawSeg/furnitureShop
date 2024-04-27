import React from 'react';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-swipeable';

const Swipe = ({ leftAction, rightAction, children }) => {
  const handleSwipeLeft = () => {
    if (leftAction) {
      leftAction();
    }
  };

  const handleSwipeRight = () => {
    if (rightAction) {
      rightAction();
    }
  };

  return (
    <Swipeable
      onSwipedLeft={handleSwipeLeft}
      onSwipedRight={handleSwipeRight}
      preventDefaultTouchmoveEvent={true}
      trackMouse={true}
    >
      {children}
    </Swipeable>
  );
};

Swipe.propTypes = {
  leftAction: PropTypes.func.isRequired,
  rightAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Swipe;