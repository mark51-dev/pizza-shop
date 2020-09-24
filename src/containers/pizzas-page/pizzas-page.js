import React from 'react';
import {useSelector, shallowEqual} from "react-redux";


const PizzasPage = () => {
  const { pizzas } = useSelector(({products: {pizzas}}) => {
    return {
      pizzas
    }
  }, shallowEqual);

  return (
    <div>
      {console.log(pizzas)}
    </div>
  );
};

export default PizzasPage;