export function ProductReducer(state = { products: [] }, action) {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, products: [] };
    case "PRODUCT_LIST_SUCCSESS":
      return { loading: false, products: action.payload };
    default:
      return state;
  }
}

export function ProductDetailReducer(state = { product: {} }, action) {
  switch (action.type) {
    case "PRODUCT_DETAIL_REQUEST":
      return { loading: true, ...state };
    case "PRODUCT_DETAIL_SUCCSESS":
      return { loading: false, product: action.payload };
    default:
      return state;
  }
}
