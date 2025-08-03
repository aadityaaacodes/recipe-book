import PropTypes from 'prop-types';
import './IngredientItem.css';

function IngredientItem({name, qty, unit, onEdit, index}){
    return(
            <>
                <form className="inline-form" onSubmit={(e) => {
                    e.preventDefault();
                    onEdit(index)
                    }}
                >
                    <p>{index} {name} : {qty} [{unit}]</p>
                    <button type="submit">Remove</button>
                </form>
            </>
    );
}

IngredientItem.propTypes = {
    name: PropTypes.string, 
    qty: PropTypes.number, 
    unit: PropTypes.string
};

export default IngredientItem;