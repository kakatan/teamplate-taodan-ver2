// footer.tsx

import Image from 'next/image';
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
        <div className={styles.logoContainer}>
          <Image
            src="/logotaodan.png"
            alt="Logo Tao Dan"
            width={100}
            height={30}
            priority
          />
        </div>
        <div className={styles.info}>
          <p>Tên phòng khám: Phòng khám Tao Đàn</p>
          <p>Địa chỉ: Địa chỉ phòng khám</p>
          <p>Số điện thoại: Số điện thoại phòng khám</p>
        </div>
       
     
    </footer>
  );
};

export default Footer;
