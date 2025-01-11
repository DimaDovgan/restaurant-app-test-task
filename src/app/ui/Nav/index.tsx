"use client"

import Link from "next/link";
import twitterIcon from "@/../public/images/tviter-icon.svg";
import facebookIcon from "@/../public/images/facebook-icon.svg";
import instagramIcon from "@/../public/images/instagram-icon.svg";
import Image from "next/image";
import Logo from "../logo";
import styles from "./index.module.scss";
import { useState } from "react";
import BurgerMenu from "../burgerbtn";

const linkSocialNet = [
        {title:"twiter",src:twitterIcon,href:"https://www.instagram.com/"},
        {title:"facebook",src:facebookIcon ,href:"https://www.instagram.com/"},
        {title:"instagram",src:instagramIcon,href:"https://www.instagram.com/"}
  ];

  
  export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu=()=>{
    setIsMenuOpen((open)=>!open);
  }  

    return (
      <div className={styles.navContainer}>
        <Logo  mode="mobile" />
        <BurgerMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />
        {isMenuOpen && <div className={styles.menuOverlay} onClick={toggleMenu} />}
        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.openMenu : ""}`}>
          <Link href="/" >
            <p className={styles.homeLink}>Home</p>
          </Link>
          <Link href="/menu">
            <p className={styles.menuLink}>Menu</p>
          </Link>
          <Logo  mode="desktop" />
          <Link href="/contacts">
            <p className={styles.contactsLink}>Contacts</p>
          </Link>
          <a href="tel:+380777777777" className={styles.phonNumber}><p>+380 (77) 77 77 777</p></a>
          <div className={styles.socialIcons}>
            {linkSocialNet.map((icon) => (
              <a target="_blank" key={icon.title} href={icon.href}>
                <Image
                  priority
                  src={icon.src}
                  alt={icon.title}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </nav>
      </div>
    );
  }
