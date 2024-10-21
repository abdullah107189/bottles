import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { getDat, setDataToArray, setLocalStore } from '../../Utilites/LS';
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

    // load cart from localStorage 
    useEffect(() => {
        const storedCart = getDat()
        const findsCart = []
        if (storedCart.length > 0) {
            for (let id of storedCart) {
                const findBottle = bottles.find(bottle => bottle.id === id)
                if (findBottle) {
                    findsCart.push(findBottle)
                }
            }
        }
        setCart(findsCart)
    }, [bottles])

    const removeAllCart = () => {
        localStorage.removeItem('cart')
        setCart([])
    }

    // remove item 
    const removeItem = (id) => {
        const carts = getDat()
        const remaing = carts.filter(idx => idx !== id)
        setLocalStore(remaing)
        const showRemainCart = bottles.filter(idx => idx !== id)
        setBottles(showRemainCart)
    }
    return (
        <div>
            <div className='stiky'>
                <h3>Cart items {cart.length}</h3>
                <button onClick={removeAllCart}>remove all cart</button>
            </div>
            <Carts
                cart={cart}
                removeItem={removeItem}
            ></Carts>


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