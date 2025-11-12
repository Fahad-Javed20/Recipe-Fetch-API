import type { RecipeType } from "../types/RecipeType";

interface RecipeItemProps {
  item: RecipeType;
}

const RecipeItem = ({ item }: RecipeItemProps) => {
  return (
    <div className="bg-white shadow-lg/30 w-1/3 h-140">
      <img
        className="h-52 w-full object-cover"
        src={item.image}
        alt=""
      />
      <h1>{item.name}</h1>
      <h1>Ingredients:</h1>
      <ul>
        {item.ingredients.map((ingredient: string, index: number) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h1>Instructions:</h1>
      <ul>
        {item.instructions.map((instruction: string, index: number) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>

      <h1>Total Calories: 300</h1>
    </div>
  );
};

export default RecipeItem;
