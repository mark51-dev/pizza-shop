import {ADD_TO_CART} from "../actions/actionTypes";

const initialState = {
  cartProducts: {}
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartProducts: {...action.payload}
      };
    default:
      return state;
  }
};

export default cartReducer;