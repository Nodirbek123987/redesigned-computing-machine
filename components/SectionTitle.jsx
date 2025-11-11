import styles from './SectionTitle.module.css';

export default function SectionTitle({ title }) {
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
    </div>
  );
}
