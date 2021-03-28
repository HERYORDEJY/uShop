import { ADD_ORDER } from '../constants';

export const OrderReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.order];
    default:
      return state;
  }
};
