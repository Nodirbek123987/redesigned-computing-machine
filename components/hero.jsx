import styles from './Hero.module.css';
import Image from 'next/image';
import salad from '@/public/salad.jpg';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h2>Your Food court at home</h2>
        <div className={styles.buttons}>
          <button className={styles.delivery}>Delivery</button>
          <button className={styles.takeout}>Takeout</button>
        </div>
        <ul className={styles.features}>
          <li>🚀 Delivery in all Paris in less than 20 minutes</li>
          <li>🚚 Free delivery from 29 euros</li>
          <li>🥗 Only fresh and local products</li>
        </ul>
      </div>
      <div className={styles.image}>
        <Image src={salad} alt="Fresh salad" width={400} height={400} />
      </div>
    </section>
  );
}
