import { ADD_CART, REMOVE_CART, UPDATE_CART } from '../constants';
import { compareValues } from '../../utils/compare-values';

export const AddCartAction = (cartList, itemInfo) => {
  const data = [...cartList, itemInfo];
  const uniqueData = data.sort(compareValues('id', 'ascending'));
  // const uniqueData = [...new Set(data.map((d) => d.id))];
  // const uniqueData = [...new Set(data)];
  return {
    type: ADD_CART,
    cartList: uniqueData,
  };
};
//
export const UpdatedCartedAction = (cartList, itemID, itemData) => {
  // const updatedCartList = cartList.map((item) =>
  //   item.id === itemID ? { ...itemData } : item,
  // );
  return {
    type: UPDATE_CART,
    // cartList: updatedCartList,
    cartList: cartList,
  };
};
//
export const RemoveCartAction = (cartList, itemID) => {
  const updatedCartList = cartList.filter((item) => item.id !== itemID);
  return {
    type: REMOVE_CART,
    cartList: updatedCartList,
  };
};
