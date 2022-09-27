import React from 'react';
import './Food.css'

const Food = (props) => {
    const { strMealThumb, strMeal, idMeal, strCategory } = props.food
    const { handleOrder } = props
    // console.log(props.food)
    return (
        <div className='food-container'>
            <img src={strMealThumb} alt="" />
            <div className='text-container'>
                <h3>{strMeal}</h3>
                <h6>{strCategory}</h6>
                <h6>ID: {idMeal}</h6>
            </div>
            <button onClick={() => handleOrder(props.food)}>Order</button>
        </div>
    );
};

export default Food;