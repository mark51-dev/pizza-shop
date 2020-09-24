const initialState = {
  pizzas: [
    {
      name: 'Пицца Пепперони с томатами',
      ingredients: ['Cоус Domino\'s', 'Моцарелла'],
      size: [30, 42, 50],
      doughSize: ['standart', 'slim'],
      basePrice: 50
    },
    {
      name: 'Пицца Техас',
      ingredients: ['Cоус Domino\'s', 'Моцарелла'],
      size: [30, 42, 50],
      doughSize: ['standart', 'slim'],
      basePrice: 50
    }
  ]
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;