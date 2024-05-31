import React, { useState } from 'react';
import styles from './Brands.module.scss';
import { getBrands } from '../../../redux/brandsRedux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Swipeable from '../Swipeable/Swipeable';

const Brands = () => {
  const brands = useSelector(getBrands);
  const [startIndex, setStartIndex] = useState(0);

  const handleNextBrands = () => {
    if (startIndex + getThumbnailsPerPage() < brands.length) {
      setStartIndex(startIndex + getThumbnailsPerPage());
    }
  };

  const handlePrevBrands = () => {
    if (startIndex - getThumbnailsPerPage() >= 0) {
      setStartIndex(startIndex - getThumbnailsPerPage());
    }
  };

  const fivePhotos =useMediaQuery({minWidth: 1024, maxWidth: 1200});
  const fourPhotos = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const onePhoto = useMediaQuery({ maxWidth: 767 });

  const getThumbnailsPerPage = () => {
    if (fivePhotos) return 4;
    if (fourPhotos) return 3;
    if (onePhoto) return 1;
    return 6;
  };

  const handleSwipeLeft = () => {
    handlePrevBrands();
  };

  const handleSwipeRight = () => {
    handleNextBrands();
  };

  return (
    <Container>
      <div className={styles.brands}>
        <button className={styles.brandsBtn} onClick={handlePrevBrands}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Swipeable leftAction={handleSwipeLeft} rightAction={handleSwipeRight}>
          <div className={styles.brandsWrapper}>
            {brands.slice(startIndex, startIndex + getThumbnailsPerPage()).map(brand => (
              <li key={brand.id}>
                <img src={brand.image} alt={brand.id} />
              </li>
            ))}
          </div>
        </Swipeable>
        <button className={styles.brandsBtn} onClick={handleNextBrands}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </Container>
  );
};
export default Brands;