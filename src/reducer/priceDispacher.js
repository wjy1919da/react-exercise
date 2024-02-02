function priceReducer(state, action) {
  switch (action.type) {
    case "UPDATE_PRICE":
      return state.map((product) => {
        return product.pName === action.payload.pName
          ? { ...product, price: action.payload.price }
          : product;
      });
    default:
      return state;
  }
}
export default priceReducer;
