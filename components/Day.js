import styles from '../styles/Day.module.css';

const Day = ({ title, children }) => (
  <article className={styles.day}>
    <h3>{title}</h3>
    {children}
  </article>
);

export default Day;
