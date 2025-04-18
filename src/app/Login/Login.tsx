'use client';

import React, { useState } from 'react';
import styles from './Login.module.css';
import Input from '@/component/Input/Input';
import Button from '@/component/Button/Button';
import Navbar from '@/component/Navbar/Navbar';
import PromoBar from '@/component/PromoBar/PromoBar';
import Footer from '@/component/Footer/Footer';
import GoogleButton from '@/component/GoogleButton/GoogleButton';

export default function LoginPage() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    console.log('Email:',emailOrPhone);
    console.log('Password:',password);
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/register-banner.jpg" alt="Sale" />
      </div>
      <div className={styles.right}>
        <h2>Log in to Continue</h2>
        <p>Enter your details below</p>
        <form action="action" onSubmit={handleSubmit}>
          <Input type="text" placeholder="Email or Phone Number" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <div className={styles.flexBetween}>
            <Button type="submit">Log in</Button>
            <span><a href="#">Forgot Password?</a></span>
          </div>
          <GoogleButton>
            <img src="/google.png" alt="" />Sign in with Google
          </GoogleButton>
          <div className={styles.acc}>
            <p>Don't have account? </p>
            <a href="/Register">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}
