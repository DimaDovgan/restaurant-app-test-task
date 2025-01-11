"use client"
import { fetchRandomMeals,fetchMealsByName } from "@/app/lib/meals";
import { useEffect,useState } from "react";
import Spinner from "@/app/ui/spiner";
import MenuItem from "../ui/menuItem/menuItem";
import { Meal } from "@/app/lib/meals";
import styles from './index.module.scss';
import ToastNotification from "../ui/ToastNotification";

export default function Page() {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

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
            const mealsData = await fetchRandomMeals(5); 
            setMeals(mealsData);
            setLoading(false);
          } catch (error: any) {
            setError(`Помилка: ${error.message}`);
            setLoading(false);
          }
        };
        loadMeals();
      }, []);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleSearch = async () => {
    if (!searchQuery.trim()){
        setError('Введіть страву');
        return; 
    } 
    try {
      setLoading(true);
      setError(null);
      const mealsData = await fetchMealsByName(searchQuery); 
      setMeals(mealsData);
      setLoading(false);
    } catch (error: any) {
      setError(`Помилка: ${error.message}`);
      setLoading(false);
    }
  };
      return (
        <div className={styles.menuContainer}>
          <h2 className={styles.title}>Menu</h2>
          <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
    </div>
          <div >
            {meals.length > 0 &&
              meals.map((item, index) => (
                <MenuItem key={item.idMeal} meal={item} index={index} />
              ))}
          </div>
          <Spinner loading={loading} />
          {error && <ToastNotification message={error} />}
        </div>
      );
  }  
