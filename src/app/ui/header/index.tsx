import Nav from '../Nav';
import styles from "./index.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
}