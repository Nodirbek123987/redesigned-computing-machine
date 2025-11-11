import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Логотип */}
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>
            yellow<span>kitchen</span>
          </h2>
          <div className={styles.socials}>
            <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/facebook.svg" alt="Facebook" /></a>
          </div>
        </div>

        {/* Разделы */}
        <div className={styles.links}>
          <div>
            <h4>About us</h4>
            <ul>
              <li><a href="#">Concept</a></li>
              <li><a href="#">Franchise</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Restaurant signup</a></li>
              <li><a href="#">For investors</a></li>
            </ul>
          </div>

          <div>
            <h4>Get help</h4>
            <ul>
              <li><a href="#">Read FAQ</a></li>
              <li><a href="#">Restaurants</a></li>
              <li><a href="#">Specialities</a></li>
              <li><a href="#">Sign up to deliver</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact us</h4>
            <ul>
              <li>Yellow Kitchen Paris 11</li>
              <li>20 avenue de la République 75011 Paris</li>
              <li>0800 333 123</li>
              <li><a href="mailto:contact@yellowkitchens.com">contact@yellowkitchens.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        <p>© 2025 Yellow Kitchen — All rights reserved</p>
      </div>
    </footer>
  );
}
