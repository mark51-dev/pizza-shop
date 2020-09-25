const initialState = {
  pizzas: [
    {
      pizzaImage: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/03/30/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-thumbnail-960x960-70.jpg',
      name: 'Пицца Пепперони с томатами',
      ingredients: ['Cоус Domino\'s', 'Моцарелла'],
      size: [
        {
          pizzaSize: 30,
          pizzaName: 'small',
          price: 33
        },
        {
          pizzaSize: 42,
          pizzaName: 'middle',
          price: 44
        },
        {
          pizzaSize: 50,
          pizzaName: 'large',
          price: 54
        }
      ],
      doughSize: ['standart', 'slim'],
      basePrice: 50
    },
    {
      pizzaImage: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/03/30/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-thumbnail-960x960-70.jpg',
      name: 'Пицца Техас',
      ingredients: ['Cоус Domino\'s', 'Моцарелла'],
      size: [
        {
          pizzaSize: 30,
          pizzaName: 'small',
          price: 33
        },
        {
          pizzaSize: 42,
          pizzaName: 'middle',
          price: 44
        },
        {
          pizzaSize: 50,
          pizzaName: 'large',
          price: 55
        }
      ],
      doughSize: ['standart', 'slim'],
      basePrice: 50
    }
  ],
  availableSizesOfPizza: [30, 42, 50]
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;