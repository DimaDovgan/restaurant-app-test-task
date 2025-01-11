"use client"
import { fetchRandomMeals } from "@/app/lib/meals";
import { useEffect,useState } from "react";
import Spinner from "../spiner";
import MenuItem from "../menuItem/menuItem";
import { Meal } from "@/app/lib/meals";
import styles from './index.module.scss';
import ToastNotification from "../ToastNotification";

export default function Menu() {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [loadMore, setLoadMore] = useState<boolean>(false);

    useEffect(() => {
      if (error) {
        <ToastNotification message={error} />;
      }
    }, [error]);
   
    useEffect(() => {
        const loadMeals = async () => {
          try {
            setLoading(true);
            setError(null);
            const mealsData = await fetchRandomMeals(3); 
            setMeals((prevMeals) => [...prevMeals, ...mealsData]);
            setLoading(false);
          } catch (error: any) {
            setError(`Помилка: ${error.message}`);
            setLoading(false);
          }
        };
        if (loadMore) {
          loadMeals(); 
          setLoadMore(false); 
        } else if (meals.length === 0) {
          loadMeals();
        }
      }, [loadMore, meals.length]);
      const handleMoreClick = () => {
        if (!loading) { 
          setLoadMore(true);
        }
      };

      return (
        <div className={styles.menuContainer}>
          <h2 className={styles.title}>Menu</h2>
          <div >
            {meals.length > 0 &&
              meals.map((item, index) => (
                <MenuItem key={item.idMeal} meal={item} index={index} />
              ))}
          </div>
          <Spinner loading={loading} />
          {error && <ToastNotification message={error} />}
          <button className={styles.btnMore} onClick={handleMoreClick} disabled={loading}>
            {loading ? "Loading..." : "MORE"}
          </button>
        </div>
      );
  }  

    

