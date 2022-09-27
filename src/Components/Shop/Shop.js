import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Shop.css'

const Shop = () => {
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')
    const [cart, setCart] = useState([])
    const handleSearch = (e) => {
        setSearch(e)
    }
    useEffect(() => {
        if (search) {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                .then(res => res.json())
                .then(data => setFoods(data?.meals))
        }
        else {
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=p')
                .then(res => res.json())
                .then(data => setFoods(data.meals))
        }
    }, [search])

    const handleOrder = (selectedFoods) => {
        setCart(selectedFoods)
    }
    return (
        <div className='container'>
            <input onChange={(e) => handleSearch(e.target.value)} type="text" />
            <div className='shop-container'>
                <div className='meal-container'>
                    {
                        foods.map(food => <Food key={food.idMeal} food={food} handleOrder={handleOrder}></Food>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>

        </div>
    );
};

export default Shop;