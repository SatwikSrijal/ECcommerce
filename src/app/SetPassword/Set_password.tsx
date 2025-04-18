'use client';
import React, { useState } from 'react';
import styles from './Set_password.module.css';

const SetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Handle password setting logic
    alert('Password has been reset!');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Left - Form */}
        <div className={styles.left}>
          <h2 className={styles.heading}>Set a password</h2>
          <p className={styles.description}>
            Your previous password has been reset. Please set a new password for your account.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>Create Password</label>
            <div className={styles.inputWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
              <button
                type="button"
                className={styles.toggleBtn}
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle visibility"
              >
                👁️
              </button>
            </div>

            <label className={styles.label}>Re-enter Password</label>
            <div className={styles.inputWrapper}>
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
                required
              />
              <button
                type="button"
                className={styles.toggleBtn}
                onClick={() => setShowConfirm(!showConfirm)}
                aria-label="Toggle visibility"
              >
                👁️
              </button>
            </div>

            <button type="submit" className={styles.submitBtn}>Set password</button>
          </form>
        </div>

        {/* Right - Illustration */}
        <div className={styles.right}>
          <img src="/forgot_pass.png" alt="Set Password Illustration" />
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
