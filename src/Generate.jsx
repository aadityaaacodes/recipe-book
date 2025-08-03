import { useEffect, useState } from "react";

function Generate(){

    const displayRecipe = () => {
        return "This is the recipe generated using AI"
    };

    const regenerateRecipe = () => {
        return "This is the regenerated recipe"
    };

    const [recipe, setRecipe] = useState("");

    const handleClick = (reGenerate) => {
        setRecipe(displayRecipe());
    };

    return(
            <>
                {
                    recipe === ""?
                    (
                        <>
                            <button onClick={handleClick}>Generate Recipe</button>
                            <p>Click to generate a recipe</p>
                        </>
                ):(
                    <>
                        <p>{recipe}</p>
                        <button onClick={handleClick}>Regenrate</button>
                    </>
                    )
                }
            </>
    )
}

export default Generate;