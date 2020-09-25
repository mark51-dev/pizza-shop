import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import Pizza from "../../components/pizza/pizza";


const PizzasPage = () => {
  const { pizzas, availableSizesOfPizza } = useSelector(({products: {pizzas, availableSizesOfPizza}}) => {
    return {
      pizzas,
      availableSizesOfPizza
    }
  }, shallowEqual);

  const getPizzas = () => {
    return pizzas.map((pizza, index) => (<Pizza key={index} pizza={pizza} availableSizesOfPizza={availableSizesOfPizza} />));
  };

  return (
    <div>
      { getPizzas() }
    </div>
  );
};

export default PizzasPage;