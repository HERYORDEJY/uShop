import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from '../constants';
import { appData } from '../../utils/dataSchema';
import { productList } from '../../api/productList';

const cartList = productList.filter((item) => item.carted === true);

export const ProductListReducer = (state = productList, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, ...action.productItem];
    case UPDATE_PRODUCT:
      return [...action.productList];
    case REMOVE_PRODUCT:
      return [...action.productList];
    default:
      return state;
  }
};
