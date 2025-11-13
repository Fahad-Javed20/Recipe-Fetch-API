import type { RecipeType } from "../types/RecipeType";

interface RecipeItemProps {
  item: RecipeType;
}

const RecipeItem = ({ item }: RecipeItemProps) => {
  return (
    <div className="bg-white shadow-lg/30 w-[600px] h-170">
      <img className="h-52 w-full object-cover" src={item.image} alt="" />
      <h1 className="text-red-700 font-bold text-2xl mt-2">{item.name}</h1>
      <h1 className="font-bold text-left pl-4">Ingredients:</h1>
      <ul className="flex flex-wrap space-x-2 px-3 justify-center items-center">
        {item.ingredients.map((ingredient: string) => (
          <li key={item.id}>{ingredient}</li>
        ))}
      </ul>

      <h1 className="font-bold text-left pl-4">Instructions:</h1>
      <ul className="flex flex-col flex-wrap px-3 justify-center items-center">
        {item.instructions.map((instruction: string) => (
          <li key={item.id}>{instruction}</li>
        ))}
      </ul>

      <h1 className="font-bold text-left pl-4">
        Total Calories: {item.caloriesPerServing}
      </h1>
    </div>
  );
};

export default RecipeItem;
