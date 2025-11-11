import styles from './Restaurants.module.css';
import Image from 'next/image';
import burger from '@/public/burger.jpg';
import pasta from '@/public/pasta.jpg';
import bowl from '@/public/bowl.jpg';
import tacos from '@/public/tacos.jpg';
import SectionTitle from './SectionTitle';

export default function Restaurants() {
  const data = [
    { id: 1, img: burger, name: "Burger Olive" },
    { id: 2, img: pasta, name: "Il Pastifico" },
    { id: 3, img: bowl, name: "Balim Healthy" },
    { id: 4, img: tacos, name: "Taco Street" },
  ];

  return (
    <section className={styles.restaurants}>
      <SectionTitle title="Restaurants" />
      <div className={styles.list}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image src={item.img} alt={item.name} width={220} height={150} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
