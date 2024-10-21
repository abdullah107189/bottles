import React from 'react';
import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    return (
        <div className='bottle'>
            <h3>{bottle.name}</h3>
            <img src={bottle.img} alt="" />
            <button onClick={() => handleAddToCart(bottle)}>add to Card</button>
        </div>
    );
};

export default Bottle;