import React from 'react';

const Carts = ({ cart, removeItem }) => {
    const other = Object.keys(cart)
    if (other.length <= 0) {
        // console.log(cart)
        <h1>loading...</h1>
    }

    return (
        <div>
            {
                cart.map(item =>
                    <div>
                        <img key={item?.id} width={'100px'} style={{ marginRight: '10px' }} src={item?.img}></img>
                        <button onClick={() => removeItem(item?.id)}>Remove item</button>
                    </div>)
            }
        </div>
    );
};

export default Carts;