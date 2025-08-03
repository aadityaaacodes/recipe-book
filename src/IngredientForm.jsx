import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Ingredientlist from './IngredientList';


function IngredientForm({items, setItems}){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [qType, setType] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name, 
            quantity: Number(quantity),
            qType
        };

        setItems((prevItems) => [...prevItems, newItem]);
        setName("");
        setQuantity("");
        setType("");
    }

    return(
            <>
                {
                    items.length === 0? 
                            (<p>No items in ingredient list</p> 
                        ):(
                            <Ingredientlist items = {items} setItems={setItems}/>)
                }
                
                <br></br>
                <h2>Add Ingredients:</h2>

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Ingredient name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />

                    <input
                        type="number"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                        min="0"
                    />

                    <input
                        type="text"
                        placeholder="Type"
                        value={qType}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />

                    <button type="submit">Add Ingredient</button>
                </form>

            </>
    )
}

// IngredientForm.propTypes = {
//     ingredients: PropTypes.arrayOf(PropTypes.string, PropTypes.number, PropTypes.string)
// };

export default IngredientForm;