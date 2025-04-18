'use client';

import React, { useState } from 'react';
import { Outfit } from 'next/font/google';
import './PromoBar.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-outfit',
});

const PromoBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closePromoBar = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`promo-bar ${outfit.className}`}>
      <div className="promo-container">
        <p className="promo-text">Get 50% off on your next purchase with code: <strong>WELCOME50</strong></p>
        <div className="promo-actions">
          <button className="promo-button">Shop Now</button>
          <button className="promo-close" onClick={closePromoBar} aria-label="Close promotion">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBar; 