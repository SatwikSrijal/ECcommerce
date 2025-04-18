'use client';

import React from 'react';
import Image from 'next/image';
import { Outfit } from 'next/font/google';
import './NewArrivals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-outfit',
});

const NewArrivals = () => {
  return (
    <section className={`new-arrivals ${outfit.className}`}>
      <div className="vertical-text">
        <span>N</span>
        <span>E</span>
        <span>W</span>
        <span className="spacer"></span>
        <span>A</span>
        <span>R</span>
        <span>R</span>
        <span>I</span>
        <span>V</span>
        <span>A</span>
        <span>L</span>
        <span>S</span>
      </div>
      
      <div className="arrivals-grid">
        <div className="featured-product">
          <div className="hot-tag">HOT</div>
          <Image 
            src="/products/brown-dress.jpg" 
            alt="Brown wrap dress" 
            width={500} 
            height={650}
            sizes="(max-width: 768px) 100vw, 45vw"
            className="product-image"
            priority
          />
          <div className="product-info">
            <span className="product-title">Manto</span>
            <span className="product-count">86 Product</span>
          </div>
        </div>
        
        <div className="product-grid">
          <div className="small-product">
            <Image 
              src="/products/black-jacket.jpg" 
              alt="Black jacket" 
              width={240} 
              height={240}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
              className="product-image"
            />
          </div>
          
          <div className="small-product">
            <div className="sale-tag">SALE</div>
            <Image 
              src="/products/white-sweater.jpg" 
              alt="White sweater" 
              width={240} 
              height={240}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
              className="product-image"
            />
          </div>
          
          <div className="small-product">
            <Image 
              src="/products/floral-dress.jpg" 
              alt="Floral dress" 
              width={240} 
              height={240}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
              className="product-image"
            />
          </div>
          
          <div className="small-product">
            <Image 
              src="/products/black-cardigan.jpg" 
              alt="Black cardigan" 
              width={240} 
              height={240}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
              className="product-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals; 