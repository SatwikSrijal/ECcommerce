'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import './Navbar.css';
import NavIcons from './NavIcons';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`navbar ${poppins.className}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          LOGO HERE
        </div>

        {/* Navigation Links - Desktop */}
        <div className="nav-links desktop-only">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/new-arrival" className="nav-link">New Arrival</Link>
          <Link href="/categories" className="nav-link">Categories</Link>
          <Link href="/sale" className="nav-link">Sale</Link>
        </div>
        
        {/* Search Bar - Desktop */}
        <div className="search-container desktop-only">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="search-input"
          />
          <button className="search-button">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
          
        <NavIcons/>
        {/* Mobile Icons */}
        <div className="mobile-navbar-icons">
          {/* Search Icon - Mobile */}
          <button 
            className="mobile-search-icon" 
            onClick={toggleSearch} 
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-button ${mobileMenuOpen ? 'hide' : ''}`} 
            onClick={toggleMobileMenu} 
            aria-label="Menu"
          >
            <svg className="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Expandable Search */}
      <div className={`mobile-expandable-search ${searchOpen ? 'open' : ''}`}>
        <form onSubmit={(e) => {
          e.preventDefault();
          // You can add search functionality here
        }}>
          <input
            type="search"
            placeholder="What are you looking for?"
            className="mobile-expandable-search-input"
            autoFocus={searchOpen}
          />
        </form>
        <button className="mobile-expandable-search-close" onClick={toggleSearch} aria-label="Close search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Background overlay for mobile menu */}
      <div 
        className={`menu-overlay ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu - With slide animation */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {/* Mobile menu header with X button */}
        <div className="mobile-menu-header">
          <button className="mobile-close-button" onClick={toggleMobileMenu} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
          
        {/* Navigation Links - Mobile */}
        <div className="mobile-nav-links">
          <Link href="/" className="mobile-nav-link">Home</Link>
          <Link href="/new-arrival" className="mobile-nav-link">New Arrival</Link>
          <Link href="/categories" className="mobile-nav-link">Categories</Link>
          <Link href="/sale" className="mobile-nav-link">Sale</Link>
        </div>
        
        {/* Action Icons - Mobile */}
        <div className="mobile-action-icons">
          <button className="mobile-icon-button">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>Wishlist</span>
          </button>
          <button className="mobile-icon-button">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span>Cart</span>
          </button>
          <button className="mobile-icon-button">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Account</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 