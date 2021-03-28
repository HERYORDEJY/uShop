import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from '../constants';

export const AddProductAction = (productItem) => {
  return {
    type: ADD_PRODUCT,
    productItem: productItem,
  };
};

export const UpdatedProductAction = (productList = [], itemID, data = {}) => {
  let allProduct = productList;
  let extraData = data;
  let updatedProductList = allProduct.map((item) =>
    item.id !== itemID ? item : { ...item, ...extraData },
  );
  return {
    type: UPDATE_PRODUCT,
    productList: [...updatedProductList],
  };
};

// export const RemoveProductAction = (productList, _itemID, _item) => {
//   const updatedProductList = productList.map((item) =>
//     item.id !== _itemID ? item : { ...item, ..._item },
//   );
//   const updatedProductList = updatedProductList.filter(
//     (item) => item.carted === true,
//   );
//   return {
//     type: REMOVE_PRODUCT,
//     cartList: [...updatedProductList],
//   };
// };
