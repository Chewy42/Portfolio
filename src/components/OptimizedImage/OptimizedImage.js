import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  sizes = '100vw',
  loading = 'lazy'
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Generate WebP version if the source is not already WebP
    if (src && !src.endsWith('.webp')) {
      const generateWebPSrc = (originalSrc) => {
        // In a real implementation, you would have a server endpoint to convert images
        // For now, we'll just use the original source
        return originalSrc;
      };
      setImageSrc(generateWebPSrc(src));
    } else {
      setImageSrc(src);
    }
  }, [src]);

  return (
    <picture>
      {imageSrc && (
        <>
          <source
            srcSet={imageSrc}
            type="image/webp"
            sizes={sizes}
          />
          <img
            src={src}
            alt={alt}
            className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            style={{
              transition: 'opacity 0.3s ease-in-out',
              ...style
            }}
            loading={loading}
            decoding="async"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </>
      )}
    </picture>
  );
};

export default OptimizedImage;
