import React, {useState} from 'react';
import classes from './pizza.module.css';
import {useDispatch} from "react-redux";
import {addPizzaToCart} from "../../store/actions/cart";


const Pizza = ({pizza: {id, name, ingredients, size, doughSize, basePrice, pizzaImage}, availableSizesOfPizza}) => {
  const dispatch = useDispatch();
  const [pizzaSize, setPizzaSize] = useState(size.length ? size[0].pizzaSize: 0); // if the server returns an empty array (temp. solution)
  const [doughPizzaSize, setDoughSize] = useState(doughSize.length ? doughSize[0]: 0); // if the server returns an empty array (temp. solution)

  const onAddToCart = (id) => {
    dispatch(addPizzaToCart({
      id,
      pizzaSize,
      doughPizzaSize,
      basePrice,
      name,
      pizzaImage
    }));
  };

  const getTotalPrice = () => {
    const index = size.findIndex((item) => {
      return item.pizzaSize === pizzaSize;
    });
    return <span>{basePrice + size[index].price}</span>;
  };

  const onChangePizzaSize = ({target: {value}}) => {
    setPizzaSize(+value);
  };

  const onChangeDoughSize = ({target: {value}}) => {
    setDoughSize(value);
  };

  const getPizzaIngredients = () => {
    return ingredients.map((ingredient, index) => (<span key={index}>{ingredient}</span>));
  };

  const getPizzaSizesButtons = size.map(item => {
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

  const getDoughPizzaSizeButtons = doughSize.map(item => {
    return (
      <button key={item}
              value={item}
              onClick={onChangeDoughSize}
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
      <div>
        <span>{name}</span>
      </div>
      <div>
        {getPizzaIngredients()}
      </div>
      {getPizzaSizesButtons}
      <div>
        {getDoughPizzaSizeButtons}
      </div>
      <div>
        <span>{getTotalPrice()}</span>
      </div>
      <div>
        <button onClick={() => onAddToCart(id)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Pizza;