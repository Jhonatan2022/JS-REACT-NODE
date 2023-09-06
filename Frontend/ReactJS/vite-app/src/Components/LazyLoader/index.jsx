import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LazyLoader = ({ src, alt }) => {

  LazyLoader.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return <img src={imageSrc} alt={alt} />;
};

export { LazyLoader };