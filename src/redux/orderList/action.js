import { ADD_ORDER, ORDER_ENTRY } from '../constants';
export const orderEntry = (orderEntry) => {
  return { type: ORDER_ENTRY, orderEntry: orderEntry };
};
export const AddOrderAction = (order) => {
  return {
    type: ADD_ORDER,
    order: order,
  };
};
