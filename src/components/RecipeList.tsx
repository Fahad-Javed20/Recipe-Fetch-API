import { useState } from "react"
import RecipeItem from "./RecipeItem"
import type { RecipeType } from "../types/RecipeType"


const RecipeList = () => {

    const [loading,setLoading] = useState<boolean>(false)
    const [data,setData] = useState<RecipeType[]>([])
    const [errors,setErrors] = useState<string>("")


  return (
    <div>
        {loading && <p>Loading...</p>}
        <h1>Recipe Booklet: Find Delecious Recipes</h1>
        {errors && <p>There is Error in WebPage</p>}
        
        {data.map((recipe)=>(

        <RecipeItem 
        key={data.id}
        item={recipe}
        />
        ))}
        
    </div>
  )
}

export default RecipeList
