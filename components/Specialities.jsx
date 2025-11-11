import styles from './Specialities.module.css';
import SectionTitle from './SectionTitle';

export default function Specialities() {
  const items = [
    "Bagel", "Burger", "Chicken", "Fish", "Salads", "Pizza", "Pasta"
  ];

  return (
    <section className={styles.specialities}>
      <SectionTitle title="Specialities" />
      <div className={styles.grid}>
        {items.map((el, i) => (
          <div key={i} className={styles.item}>
            <span>{el}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

