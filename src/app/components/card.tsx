"use client";
import styles from '../styles/card.module.scss';
interface CardProps {
  title: string;
  content: string[];
  backgroundColor: string;
  color: string;
}
const Card = ({ title, content, backgroundColor, color }: CardProps) => {
  const cardStyle = {
    backgroundColor,
    color,
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.content}>
        <p className={styles.heading}>{title}</p>
        <ul className={styles.list} style={{ listStyleType: 'none' }}>
          {content.map((item, index) => (
            <li key={index} className={styles.item}>{item}</li>
          ))}
        </ul>
        <button className={styles.btn}>Read more</button>
      </div>
    </div>
  );
};

export default Card;


