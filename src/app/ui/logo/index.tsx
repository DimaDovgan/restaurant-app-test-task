interface NavProps {
    mode: "desktop" | "mobile";
  }

import styles from './index.module.scss';
export default function Logo({ mode }: NavProps) {
    return (
      <div className={mode === "desktop" ? styles.desktopLogo : styles.mobileLogo}>
        Selve Restourant
      </div>
    );
  }
  