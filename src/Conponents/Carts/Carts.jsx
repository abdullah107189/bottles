import React from 'react';

const Carts = ({ cart }) => {
    const other = Object.keys(cart)
    if (other.length <= 0) {
        // console.log(cart)
        return <h1>loading...</h1>   
    }

    return (
        <div>
            <h3>Cart items {cart.length}</h3>
            <div>
                {
                    cart.map(item => <img key={item?.id} width={'100px'} style={{ marginRight: '10px' }} src={item?.img}></img>)
                }
            </div>
        </div >
    );
};

export default Carts;