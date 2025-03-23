import styles from './CardDescription.module.css';

const CardDescription = ({ title }: { title: string }) => {
  return (
    <div className={styles.card_container}>
      <h4 className={styles.card_title}>{title}</h4>
      <div className={`${styles.card_description} ${styles.block_description}`}>
        <div className={styles.card_description_text}>Monday - Friday</div>
        <div className={styles.card_description_value}>11:00 - 21:00</div>
      </div>

      <div className={`${styles.card_description} ${styles.block_description}`}>
        <div className={styles.card_description_text}>Saturday & Sunday</div>
        <div className={styles.card_description_value}>11:00 - 23:00</div>
      </div>
    </div>
  );
};

export default CardDescription;
