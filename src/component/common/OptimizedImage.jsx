import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  placeholderSrc,
  threshold = 100,
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImageSrc(src);
    setError(false);
  }, [src]);

  const handleError = () => {
    setError(true);
    // You can set a fallback image here
    setImageSrc('/path-to-fallback-image.jpg');
  };

  if (error) {
    return (
      <div 
        className={`image-error ${className || ''}`}
        style={{ width, height, ...style }}
      >
        <span>Image failed to load</span>
      </div>
    );
  }

  return (
    <LazyLoadImage
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      effect="blur"
      placeholderSrc={placeholderSrc}
      threshold={threshold}
      onError={handleError}
    />
  );
};

export default OptimizedImage;
