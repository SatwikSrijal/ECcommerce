'use client';

import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import './BrandShowcase.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const BrandShowcase = () => {
  return (
    <section className={`brand-showcase ${poppins.className}`}>
      <div className="brand-grid">
        <div className="brand-item">
          <Image src="/brands/graphic-studio.jpg" alt="Graphic Studio" width={120} height={60} priority />
        </div>
        
        <div className="brand-item">
          <Image src="/brands/s-salva.jpg" alt="S. Salva" width={120} height={60} priority />
        </div>
        
        <div className="brand-item">
          <Image src="/brands/music.jpg" alt="Music" width={120} height={60} priority />
        </div>
        
        <div className="brand-item">
          <Image src="/brands/furniture.jpg" alt="Furniture Design" width={120} height={60} priority />
        </div>
        
        <div className="brand-item">
          <Image src="/brands/travel.jpg" alt="Travel Lookbook" width={120} height={60} priority />
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase; 