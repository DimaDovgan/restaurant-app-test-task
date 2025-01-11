import styles from './index.module.scss';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.paragraph}>
          I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services.
        </p>
        <p className={styles.paragraph}>
          I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long
        </p>
      </div>
      <div className={styles.imageContainer}>
      <Image
        src="/images/aboutUsDeskt.png"
        width={540}
        height={301}
        className={`hidden md:block ${styles.image}`}
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/images/aboutUsMob.png"
        width={380}
        height={254}
        className={`block md:hidden ${styles.image}`}
        alt="Screenshot of the dashboard project showing mobile version"
      />
     
      </div>
    </div>
  );
}
