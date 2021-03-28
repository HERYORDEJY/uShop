import { ADD_ADDRESS, REMOVE_ADDRESS, UPDATE_ADDRESS } from '../constants';

export const AddAddressAction = (addressList, address) => {
  return {
    type: ADD_ADDRESS,
    addressList: [...addressList, address],
  };
};

export const DeleteAddressAction = (addressList, addressID) => {
  const newAddressList = addressList.filter((adrs) => adrs.id !== addressID);
  return {
    type: REMOVE_ADDRESS,
    addressList: newAddressList,
  };
};

export const EditAddressAction = (addressList, addressID, addressUpdate) => {
  const newAddressList = addressList.map((adrs) =>
    adrs.id === addressID ? { ...adrs, ...addressUpdate } : { ...adrs },
  );
  return {
    type: UPDATE_ADDRESS,
    addressList: newAddressList,
  };
};
