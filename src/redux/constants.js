import AsyncStorage from '@react-native-async-storage/async-storage'

export async function setAsync(key, data) {
  const json_data = JSON.stringify(data)
  try {
    await AsyncStorage.setItem(key, json_data)
  } catch (e) {
    console.log('data read error:::', e)
  }
}

export async function getAsync(key) {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    } else {
      console.log('read data error')
    }
  } catch (e) {
    console.log('data read error')
  }
}

export async function removeAsync(key) {
  try {
    await AsyncStorage.removeItem(key)
    await console.log('data removed')
  } catch (e) {
    console.log(e)
  }
}

export function setStorage(key, data) {
  setAsync(key, data)
}

export function readStorage(key) {
  let json_data
  return getAsync(key).then((result) => {
    json_data = JSON.parse(result)
    // return json_data;
    console.log('\n \n \n the result is \n \n \n ', json_data, ' \n \n \n')
  })
}
//
export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
//
export const ADD_WISHLIST = 'ADD_WISHLIST'
export const REMOVE_WISHLIST = 'REMOVE_WISHLIST'
//
export const ADD_CART = 'ADD_CART'
export const UPDATE_CART = 'UPDATE_CART'
export const REMOVE_CART = 'REMOVE_CART'
//
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
//
export const ADD_CREDIT_CARD = 'ADD_CREDIT_CARD'
export const UPDATE_CREDIT_CARD = 'UPDATE_CREDIT_CARD'
export const REMOVE_CREDIT_CARD = 'REMOVE_CREDIT_CARD'
//
export const ORDER_ENTRY = 'ORDER_ENTRY'
export const ADD_ORDER = 'ADD_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'
//
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const REMOVE_ADDRESS = 'REMOVE_ADDRESS'
//
export const NAVIGATE = 'NAVIGATE'
