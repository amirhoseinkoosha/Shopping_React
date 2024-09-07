export const cartreducer = (state = { cardItem: [] }, action) => {
  switch (action.type) {
    case "CARD_ADD_ITEM":
      const Item = action.payload;
      const existingItem = state.cardItem.find(
        (i) => i.product === Item.product
      );

      if (existingItem) {
        return {
          ...state,
          cardItem: state.cardItem.map((i) =>
            i.product === existingItem.product ? Item : i
          ),
        };
      } else {
        return {
          ...state,
          cardItem: [...state.cardItem, Item],
        };
      }
    case "DELETE_ITEM":
      return {
        ...state,
        cardItem: state.cardItem.filter((i) => i.product !== action.payload),
      };
    default:
      return state;
  }
};
