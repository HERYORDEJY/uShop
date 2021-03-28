import { ADD_ADDRESS, REMOVE_ADDRESS, UPDATE_ADDRESS } from '../constants';

export const AddressReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return action.addressList;
    case REMOVE_ADDRESS:
      return action.addressList;
    case UPDATE_ADDRESS:
      return action.addressList;
    default:
      return state;
  }
};
