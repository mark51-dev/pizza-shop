import React from 'react';

const CartPage = ({cart: {cartProducts}}) => {


  return (
    <div>
      { JSON.stringify(cartProducts) }
    </div>
  );
};

export default CartPage;