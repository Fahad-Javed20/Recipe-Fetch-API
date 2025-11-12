import { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";
import type { RecipeType } from "../types/RecipeType";

const RecipeList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<RecipeType[]>([]);
  const [errors, setErrors] = useState<string>("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        throw new Error("There is a problem in fetching data");
      }
      const data = await response.json();
      setData(data.recipes);
    } catch (error) {
      console.log("There is an error:", error);
      setErrors((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Recipe Book by Fahad Bin Javed</h1>
      <div className="flex gap-4 flex-wrap">
        {loading && <p>Loading...</p>}
        {errors && <p>There is Error in WebPage</p>}

        {data.map((recipe) => (
          <RecipeItem key={recipe.id} item={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
