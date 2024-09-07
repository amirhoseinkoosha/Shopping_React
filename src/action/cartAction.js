import axios from "axios";
export const addTocard = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);
  dispatch({
    type: "CARD_ADD_ITEM",
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
    },
  });
  localStorage.setItem("Cartitems", JSON.stringify(getState().cart.cardItem));
};

export const Deletecard = (id) => async (dispatch, getState) => {
  dispatch({
    type: "DELETE_ITEM",
    payload: id,
  });
  localStorage.setItem("Cartitems", JSON.stringify(getState().cart.cardItem));
};
