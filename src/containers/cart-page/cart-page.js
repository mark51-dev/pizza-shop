import React from 'react';

const CartPage = ({cart: {cartProducts}}) => {
  const res = Object.keys(cartProducts).map((pizzaIndex, index) => {
    return cartProducts[pizzaIndex].items.map((item, index) => <div key={index}>{JSON.stringify(`${item.name}  ${item.pizzaSize}`)}</div>);
  })

  return (
    <div>
      { res }
    </div>
  );
};

export default CartPage;