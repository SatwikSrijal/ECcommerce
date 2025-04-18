'use client';
import React from 'react';
import styles from './Forgot_pass.module.css';
import Link from 'next/link';
import GoogleButton from '@/component/GoogleButton/GoogleButton';

const ForgotPass = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add password recovery logic here
    alert('Password reset email sent!');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Left Side - Form */}
        <div className={styles.left}>
          <Link href="/login" className={styles.backLink}>
            ← Back to login
          </Link>

          <h2 className={styles.heading}>Forgot your password?</h2>
          <p className={styles.description}>
            Don&apos;t worry, happens to all of us. Enter your email below to recover your password
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="john.doe@gmail.com"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>

          <div className={styles.separator}>
            <span className={styles.separatorText}>Or login with</span>
          </div>

          <button className={styles.googleButton}>
            <img src="/google.png" alt="Google Icon" />
            Sign In with Google
          </button>
        </div>

        {/* Right Side - Image */}
        <div className={styles.right}>
          <img src="/forgot_pass.png" alt="Reset Illustration" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
