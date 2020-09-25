import React, {useState} from 'react';
import classes from './pizza.module.css';


const Pizza = ({pizza: {name, ingredients, size, doughSize, basePrice, pizzaImage}, availableSizesOfPizza}) => {
  const [pizzaSize, setPizzaSize] = useState(size.length ? size[0].pizzaSize: 0); // if the server returns an empty array (temp. solution)
  const [doughPizzaSize, doughSizeSize] = useState(doughSize.length ? doughSize[0]: 0); // if the server returns an empty array (temp. solution)

  const onChangePizzaSize = ({target: {value}}) => {
    setPizzaSize(+value);
  };

  const onChangeDoughSizeSize = ({target: {value}}) => {
    doughSizeSize(value);
  };

  const getTotalPrice = () => {
    const index = size.findIndex((item) => {
      return item.pizzaSize === pizzaSize;
    });

    return <span>{basePrice + size[index].price}</span>
  };

  const getPizzaSizes = size.map(item => {
    return (
        <button key={item.pizzaSize}
                value={item.pizzaSize}
                disabled={!availableSizesOfPizza.includes(item.pizzaSize)}
                onClick={onChangePizzaSize}
                style={{
                  background: pizzaSize === item.pizzaSize ? "green": null
                }}>{item.pizzaName}</button>
    )
  });

  const getDoughPizzaSize = doughSize.map(item => {
    return (
      <button key={item}
              value={item}
              onClick={onChangeDoughSizeSize}
              style={{
                background: doughPizzaSize === item ? "green": null
              }}>{item}</button>
    )
  });

  return (
    <div className={classes.Pizza}>
      <div>
        <img src={pizzaImage} width="200" alt=""/>
      </div>
      {getPizzaSizes}
      <div>
        {getDoughPizzaSize}
      </div>
      <div>
        {getTotalPrice()}
      </div>
    </div>
  );
};

export default Pizza;