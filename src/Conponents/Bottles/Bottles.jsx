import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { getDat, setDataToArray } from '../../Utilites/LS';
import Carts from '../Carts/Carts';

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('bottlesData.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        setDataToArray(bottle.id)
    }
    console.log(cart);

    useEffect(() => {
        const storedCart = getDat()
        const findsCart = []
        if (storedCart.length > 0) {
            for (let id of storedCart) {
                const findBottle = bottles.find(bottle => bottle.id === id)
                findsCart.push(findBottle)
            }
        }
        setCart(findsCart)
    }, [bottles, ])

    const removeAllCart = () => {
        localStorage.removeItem('cart')
        setCart([])
    }
    return (
        <div>
            <div className='stiky'>
                <Carts cart={cart}></Carts>
                <button onClick={removeAllCart}>remove all cart</button>
            </div>


            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div >
    );
};

export default Bottles;