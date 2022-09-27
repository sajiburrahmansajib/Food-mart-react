import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { strMeal } = props.cart
    console.log(strMeal)
    if (strMeal) {
        const ol = document.getElementById('selectFood')
        const li = document.createElement('li')
        li.innerText = strMeal
        ol.appendChild(li)
    }
    return (
        <div className='cart-container'>
            <h1>Selected Food</h1>
            <ol id='selectFood'>

            </ol>
        </div>
    );
};

export default Cart;