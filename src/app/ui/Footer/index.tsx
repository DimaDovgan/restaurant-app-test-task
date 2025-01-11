import styles from "./index.module.scss"
export default function Footer() {
        return (
            <footer className={styles.footer}>
              <div className={styles.container}>
                <div className={`${styles.section} ${styles.center}`}>
                  <h3 className={styles.title}>Opening hours</h3>
                  <p>Mon - Sat: 11:00 - 23:00</p>
                  <p>Sun: 11:00 - 19:00</p>
                  <p>Food in the restaurant and takeaway!</p>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.section} ${styles.linel}`}>
                    <h3 className={styles.title}>Location</h3>
                    <p>130 Fulton St</p>
                    <p>New York</p>
                    <p>NY 10038, USA</p>
                  </div>
                  <div className={`${styles.section} ${styles.liner}`}>
                    <h3 className={styles.title}>Sociale</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                  </div>
                </div>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.copyright}>
                <p>Copyright ©2025 by Dima Dovhan</p>
              </div>
            </footer>
          );
}