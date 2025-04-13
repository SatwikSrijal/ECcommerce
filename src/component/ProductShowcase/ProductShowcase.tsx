'use client';

import React from 'react';
import Image from 'next/image';
import './ProductShowcase.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  colors?: string[];
  isNew?: boolean;
  showAddToCart?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Breed Dry Dog Food',
    price: 100,
    image: '/products/dog-food.jpg',
    rating: 3,
    reviews: 38,
    colors: [],
    isNew: false
  },
  {
    id: 2,
    name: 'CANON EOS DSLR Camera',
    price: 360,
    image: '/products/camera.jpg',
    rating: 4,
    reviews: 98,
    colors: [],
    isNew: false,
    showAddToCart: true
  },
  {
    id: 3,
    name: 'ASUS FHD Gaming Laptop',
    price: 700,
    image: '/products/laptop.jpg',
    rating: 5,
    reviews: 325,
    colors: [],
    isNew: false
  },
  {
    id: 4,
    name: 'Curology Product Set',
    price: 500,
    image: '/products/skincare.jpg',
    rating: 4,
    reviews: 145,
    colors: [],
    isNew: false
  },
  {
    id: 5,
    name: 'Kids Electric Car',
    price: 960,
    image: '/products/kids-car.jpg',
    rating: 5,
    reviews: 65,
    colors: ['#FF0000', '#000000'],
    isNew: true
  },
  {
    id: 6,
    name: 'Jr. Zoom Soccer Cleats',
    price: 1160,
    image: '/products/soccer-cleats.jpg',
    rating: 4,
    reviews: 35,
    colors: ['#CCFF00', '#000000'],
    isNew: false
  },
  {
    id: 7,
    name: 'GP11 Shooter USB Gamepad',
    price: 660,
    image: '/products/gamepad.jpg',
    rating: 4,
    reviews: 55,
    colors: ['#000000', '#FF0000'],
    isNew: true
  },
  {
    id: 8,
    name: 'Quilted Satin Jacket',
    price: 660,
    image: '/products/jacket.jpg',
    rating: 5,
    reviews: 59,
    colors: ['#1A472A', '#2563EB'],
    isNew: false
  }
];

const StarRating = ({ rating, reviews }: { rating: number, reviews: number }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
      ))}
      <span className="reviews">({reviews})</span>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
      {product.isNew && <span className="new-badge">NEW</span>}
      
      <div className="product-image-container">
        <Image 
          src={product.image} 
          alt={product.name} 
          width={200} 
          height={200} 
          className="product-img"
        />
        
        <div className="product-actions">
          <button className="wishlist-button" aria-label="Add to wishlist">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="view-button" aria-label="Quick view">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="price-rating">
          <span className="product-price">${product.price}</span>
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
        
        {'colors' in product && product.colors && product.colors.length > 0 && (
          <div className="product-colors">
            {product.colors.map((color) => (
              <span 
                key={color} 
                className="color-option" 
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
      
      {'showAddToCart' in product && product.showAddToCart && (
        <button className="add-to-cart-button">Add To Cart</button>
      )}
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section className="product-showcase">
      <div className="header">
        <div className="header-left">
          <div className="header-icon"></div>
          <span className="header-label">Our Products</span>
        </div>
        
        <h2 className="section-title">Explore Our Products</h2>
        
        <div className="navigation-arrows">
          <button className="arrow-prev" aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="arrow-next" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="view-all-container">
        <button className="view-all-button">View All Products</button>
      </div>
    </section>
  );
};

export default ProductShowcase; 