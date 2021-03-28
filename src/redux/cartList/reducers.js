import { ADD_CART, REMOVE_CART, UPDATE_CART } from '../constants';
import { productList } from '../../api/productList';

const cartList = productList.filter((item) => item.carted === true);

export const CartListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return [...action.cartList];
    case UPDATE_CART:
      return [...action.cartList];
    case REMOVE_CART:
      return [...action.cartList];
    default:
      return state;
  }
};
