import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        yellow<span>kitchen</span>
      </h1>
      <nav className={styles.nav}>
        <a href="#">Delivery</a>
        <a href="#">Takeout</a>
        <button className={styles.login}>Log in</button>
      </nav>
    </header>
  );
}
