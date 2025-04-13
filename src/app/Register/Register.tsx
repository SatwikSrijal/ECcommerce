'use client';

import React, { useState } from 'react';
import styles from './Register.module.css';
import Input from '@/component/Input/Input';
import Button from '@/component/Button/Button';
import Navbar from '@/component/Navbar/Navbar';
import PromoBar from '@/component/PromoBar/PromoBar';
import Footer from '@/component/Footer/Footer';
import GoogleButton from '@/component/GoogleButton/GoogleButton';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit=(e:React.FormEvent)=>{
      e.preventDefault();
      console.log('Name:',name)
      console.log('Email:',emailOrPhone);
      console.log('Password:',password);
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/register-banner.jpg" alt="Sale" />
      </div>
      <div className={styles.right}>
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <form action="action" onSubmit={handleSubmit}>
          <div>
            <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input type="text" placeholder="Email or Phone Number" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit">Create Account</Button>
            <GoogleButton>
                <img src="google.png" alt="" />Sign in with Google
            </GoogleButton>
            <div className={styles.acc}>
                <p>Already have account? </p>
                <a href="/login">Log in</a>
            </div>
          </div>
        </form>
        
        
      </div>
    </div>
  );
}
