import {ADD_TO_CART} from "../actions/actionTypes";

const initialState = {
  cartProducts: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(state);
      return {
        ...state,
        cartProducts: [action.payload]
      };
    default:
      return state;
  }
};

export default productsReducer;