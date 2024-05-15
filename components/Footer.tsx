import React from 'react';
import styles from '../styles/globals.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Brazilian Financial Tracker. All rights reserved.</p>
    </footer>
  );
};

export default Footer;