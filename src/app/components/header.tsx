// Header.tsx

import Image from 'next/image';
import styles from '../styles/header.module.scss';
import React from 'react';



const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContent}>
        <p className={styles.description}>PHÒNG KHÁM TAO ĐÀN</p>
      </div>
      <div className={styles.searchInputContainer}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div>
      <div className={styles.rightContent}>
        <button className={styles.button} style={{backgroundColor:'#FFB100'}}>Đặt lịch khám</button>
        <button className={styles.button}>Tư vấn</button>
      </div>
    </header>
  );
};

export default Header;

