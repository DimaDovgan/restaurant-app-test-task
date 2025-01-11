
export interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions:string;
    [key: string]: unknown;
    
  }
  
  const API_URL = "https://www.themealdb.com/api/json/v1/1";
  
  export const fetchRandomMeals = async (count: number = 5): Promise<Meal[]> => {
    try {
      const meals: Meal[] = [];
      for (let i = 0; i < count; i++) {
        const response = await fetch(`${API_URL}/random.php`);
        const data = await response.json();
        if (!data.meals || data.meals.length === 0) {
          throw new Error('Не вдалося отримати страву');
        }
        const meal = {
            idMeal: data.meals[0].idMeal,
            strMeal: data.meals[0].strMeal,
            strMealThumb: data.meals[0].strMealThumb,
            strInstructions:data.meals[0].strInstructions,
          };
        meals.push(meal); 
      }
      return meals;
    } catch (error) {
      if (error instanceof Error) {
          throw new Error(`Помилка при завантаженні страв: ${error.message}`);
      } else {
          throw new Error('Невідома помилка при завантаженні страв');
      }
  }
  };
  export const fetchMealsByName = async (name: string): Promise<Meal[]> => {
    try {
      const response = await fetch(`${API_URL}/search.php?s=${name}`);
      const data = await response.json();
      if (!data.meals || data.meals.length === 0) {
        throw new Error('Не вдалося знайти страви');
      }
      const filteredMeals = data.meals.map((meal: Meal) => ({
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strMealThumb: meal.strMealThumb,
        strInstructions:meal.strInstructions,
      }));
  
      return filteredMeals;
    } catch (error) {
      if (error instanceof Error) {
          throw new Error(`Помилка при завантаженні страв: ${error.message}`);
      } else {
          throw new Error('Невідома помилка при завантаженні страв');
      }
  }
  };