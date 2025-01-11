import styles from './index.module.scss';
import Image from 'next/image';
import {Meal} from "@/app/lib/meals";

interface MenuItemProps {
    meal: Meal;
    index: number;
  }
  
  const MenuItem: React.FC<MenuItemProps> = ({ meal, index }) => {
    return (
      <div
        className={`${styles.card} ${index % 2 === 0 ? styles.left : styles.right}`}
      >
        <div className={styles.imageContainer}>
          <Image
            src={meal.strMealThumb}
            width={380}
            height={194}
            className={styles.image}
            alt={meal.strMeal}
            
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{meal.strMeal}</h2>
          <p className={styles.paragraph}>{meal.strInstructions}</p>
        </div>
        
      </div>
    );
  };
  
  export default MenuItem;