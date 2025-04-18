'use client';
import React, { useState } from 'react';
import styles from './Verify_code.module.css';
import Link from 'next/link';

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const [showCode, setShowCode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add code verification logic here
    alert(`Verifying code: ${code}`);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Left Side - Form */}
        <div className={styles.left}>
          <Link href="/login" className={styles.backLink}>
            ← Back to login
          </Link>

          <h2 className={styles.heading}>Verify code</h2>
          <p className={styles.description}>
            An authentication code has been sent to your email.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="code" className={styles.label}>Enter Code</label>
            <div className={styles.inputWrapper}>
              <input
                type={showCode ? 'text' : 'password'}
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className={styles.input}
                required
              />
              <button
                type="button"
                className={styles.toggleBtn}
                onClick={() => setShowCode(!showCode)}
                aria-label="Toggle code visibility"
              >
                👁️
              </button>
            </div>

            <p className={styles.resendText}>
              Didn’t receive a code? <span className={styles.resendLink}>Resend</span>
            </p>

            <button type="submit" className={styles.verifyButton}>Verify</button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className={styles.right}>
          <img src="/verify.png" alt="Verify Illustration" />
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
