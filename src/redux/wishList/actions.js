import { ADD_WISHLIST, REMOVE_WISHLIST } from '../constants';

export const AddWishAction = (wishList, itemID) => {
  const data = [...wishList, itemID];
  // const uniqueData = [...new Set(data.map((d) => d.id))];
  // const uniqueData = [...new Set(data.map((d) => d.id))];
  const uniqueData = [...new Set(data)];
  return {
    type: ADD_WISHLIST,
    wishList: uniqueData,
  };
};
export const RemoveWishAction = (wishList, itemID) => {
  const updatedWishList = wishList.filter((item) => item.id !== itemID);
  return {
    type: REMOVE_WISHLIST,
    wishList: [...updatedWishList],
  };
};
