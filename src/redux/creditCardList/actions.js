import {
  ADD_CREDIT_CARD,
  REMOVE_CREDIT_CARD,
  UPDATE_CREDIT_CARD,
} from '../constants';

export const AddCreditCardAction = (creditCardList, creditCard) => {
  return {
    type: ADD_CREDIT_CARD,
    creditCardList: [...creditCardList, creditCard],
  };
};

export const DeleteCreditCardAction = (creditCardList, creditCardID) => {
  const newCreditCardList = creditCardList.filter(
    (card) => card.id !== creditCardID,
  );
  return {
    type: REMOVE_CREDIT_CARD,
    creditCardList: newCreditCardList,
  };
};

export const EditCreditCardAction = (
  creditCardList,
  creditCardID,
  creditCardUpdate,
) => {
  const newCreditCardList = creditCardList.map((card) =>
    card.id === creditCardID ? { ...card, ...creditCardUpdate } : { ...card },
  );
  return {
    type: UPDATE_CREDIT_CARD,
    creditCardList: newCreditCardList,
  };
};
