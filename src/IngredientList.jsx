import PropTypes from 'prop-types';
import IngredientItem from './IngredientItem';
import { useState } from 'react';

function Ingredientlist({setItems, items}){

    const onEdit = (toRemove) => {
        setItems(prevItems => prevItems.filter((_, index) => index !== toRemove));
        // console.log(items);
    };

    return(
        <>
            {items.map((ing, index) => (
                <IngredientItem key={index} name={ing.name} qty={ing.quantity} unit={ing.qType} index = {index} onEdit={onEdit} />
            )
            )}
        </>
    );
}

// Ingredientlist.propTypes = {
//     ingredients: PropTypes.arrayOf(PropTypes.string)
// };

export default Ingredientlist;