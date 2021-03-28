import {
  ADD_CREDIT_CARD,
  REMOVE_CREDIT_CARD,
  UPDATE_CREDIT_CARD,
} from '../constants';

export const CreditCardReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CREDIT_CARD:
      return action.creditCardList;
    case UPDATE_CREDIT_CARD:
      return action.creditCardList;
    case REMOVE_CREDIT_CARD:
      return action.creditCardList;
    default:
      return state;
  }
};
