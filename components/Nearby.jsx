import styles from './Nearby.module.css';
import SectionTitle from './SectionTitle';

export default function Nearby() {
  return (
    <section className={styles.nearby}>
      <SectionTitle title="Your nearest restaurants" />
      <div className={styles.box}>
        <p className={styles.text}>
          Each kitchen works with its own delivery area to deliver food to you as soon as possible.
        </p>
        <div className={styles.form}>
          <input className={styles.input} type="text" placeholder="Enter delivery address" />
          <button className={styles.button}>Send</button>
        </div>
      </div>
    </section>
  );
}
