import {ADD_TO_CART} from "./actionTypes";

export function addPizzaToCart(pizza) {
  return {
    type: ADD_TO_CART,
    payload: {
      [pizza.id]: [pizza]
    }
  }
}