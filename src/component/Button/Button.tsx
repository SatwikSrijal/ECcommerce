import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button = ({ children, onClick, type = 'button' }: ButtonProps) => (
  <button onClick={onClick} className={styles.button} type={type}>
    {children}
  </button>
);

export default Button;
