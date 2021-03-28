import { ADD_WISHLIST, REMOVE_WISHLIST } from '../constants';

export const WishListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_WISHLIST:
      return action.wishList;
    case REMOVE_WISHLIST:
      return action.wishList;
    default:
      return state;
  }
};
