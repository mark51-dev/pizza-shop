import {ADD_TO_CART} from "./actionTypes";

export function addPizzaToCart(pizza) {
  return (dispatch, getState) => {
    const state = getState().cart;
    const currentItem = state.cartProducts[pizza.id] ? state.cartProducts: {[pizza.id]: {items: []}}
    const newItem = {
      ...state.cartProducts,
      [pizza.id]: {
        items: [...currentItem[pizza.id].items, pizza]
      }
    }
    dispatch({
      type: ADD_TO_CART,
      payload: newItem
    })
  }
}