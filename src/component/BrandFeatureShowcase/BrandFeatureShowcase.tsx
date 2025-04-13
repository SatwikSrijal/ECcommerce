'use client';

import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import './BrandFeatureShowcase.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const BrandFeatureShowcase = () => {
  return (
    <section className={`brand-feature-showcase ${poppins.className}`}>
      {/* Brand logos */}
      <div className="brand-logos">
        <div className="brand-logo">
          <Image src="/brands/graphic-studio.jpg" alt="Graphic Studio" width={120} height={40} />
        </div>
        <div className="brand-logo">
          <Image src="/brands/s-salva.jpg" alt="S. Salva" width={120} height={40} />
        </div>
        <div className="brand-logo">
          <Image src="/brands/music.jpg" alt="Brand" width={120} height={40} />
        </div>
        <div className="brand-logo">
          <Image src="/brands/furniture.jpg" alt="Furniture Design" width={120} height={40} />
        </div>
        <div className="brand-logo">
          <Image src="/brands/travel.jpg" alt="Travel Lookbook" width={120} height={40} />
        </div>
      </div>
    </section>
  );
};

export default BrandFeatureShowcase; 