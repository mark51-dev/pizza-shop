import React from 'react';
import {useSelector} from 'react-redux';
import Pizza from "../../components/pizza/pizza";
import CartPage from "../cart-page/cart-page";


const PizzasPage = () => {
  const { pizzas, availableSizesOfPizza, cart } = useSelector(({products: {pizzas, availableSizesOfPizza}, cart}) => {
    return {
      pizzas,
      availableSizesOfPizza,
      cart
    }
  });

  const getPizzas = () => {
    return pizzas.map((pizza, index) => (<Pizza key={index} pizza={pizza} availableSizesOfPizza={availableSizesOfPizza} cart={cart} />));
  };

  return (
    <div>
      <CartPage cart={cart}/>
      { getPizzas() }
    </div>
  );
};

export default PizzasPage;