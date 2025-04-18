import React from 'react';
import styles from './GoogleButton.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const GoogleButton = ({ children, onClick, type = 'button' }: ButtonProps) => (
  <button onClick={onClick} className={styles.button} type={type}>
    {children}
  </button>
);

export default GoogleButton;
