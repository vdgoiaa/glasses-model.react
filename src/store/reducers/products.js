const initialState = {
  productList: [
    {
      id: 1,
      type: "glass",
      price: 30,
      name: "GUCCI G8850U",
      url: "./assets/img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      type: "glass",
      price: 50,
      name: "GUCCI G8759H",
      url: "./assets/img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      type: "glass",
      price: 30,
      name: "DIOR D6700HQ",
      url: "./assets/img/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      type: "glass",
      price: 30,
      name: "DIOR D6005U",
      url: "./assets/img/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      type: "glass",
      price: 30,
      name: "PRADA P8750",
      url: "./assets/img/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      type: "glass",
      price: 30,
      name: "PRADA P9700",
      url: "./assets/img/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      type: "glass",
      price: 30,
      name: "FENDI F8750",
      url: "./assets/img/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      type: "glass",
      price: 30,
      name: "FENDI F8500",
      url: "./assets/img/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      type: "glass",
      price: 30,
      name: "FENDI F4300",
      url: "./assets/img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ],
  selectedProduct: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_PRODUCT":
      state.selectedProduct = {
        ...state.selectedProduct,
        [action.payload.type]: action.payload.url,
      };
      return { ...state };

    default:
      return state;
  }
  // return state;
};
export default reducer;
