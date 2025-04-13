'use client';

import React, { useState, useEffect } from 'react';
import { Outfit } from 'next/font/google';
import Link from 'next/link';
import './PromoBanner.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-outfit',
});

// These images will be easily replaceable with links to different pages
const bannerImages = [
  {
    src: '/banners/banner-1.jpg',
    alt: 'Fashion promotional banner 1',
    href: '/collections/featured'
  },
  {
    src: '/banners/banner-2.jpg',
    alt: 'Fashion promotional banner 2',
    href: '/collections/summer'
  },
  {
    src: '/banners/banner-3.jpg',
    alt: 'Fashion promotional banner 3',
    href: '/collections/sale'
  },
  {
    src: '/banners/banner-4.jpg',
    alt: 'Fashion promotional banner 4',
    href: '/collections/new'
  },
  {
    src: '/banners/banner-5.jpg',
    alt: 'Fashion promotional banner 5',
    href: '/collections/brands'
  }
];

const PromoBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-rotation when user interacts
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className={`promo-banner ${outfit.className}`}>
      <div className="banner-container">
        {bannerImages.map((banner, index) => (
          <div 
            key={index} 
            className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              zIndex: index === currentSlide ? 1 : 0
            }}
          >
            <Link href={banner.href} className="banner-link" style={{ display: 'block', width: '100%' }}>
              <div className="banner-image-container">
                <div 
                  className="banner-image" 
                  style={{ backgroundImage: `url(${banner.src})` }}
                  role="img"
                  aria-label={banner.alt}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="banner-navigation">
        {bannerImages.map((_, index) => (
          <button 
            key={index} 
            className={`banner-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoBanner; 