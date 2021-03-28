import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import { AuthReducer } from './bio/reducers'
import { CartListReducer } from './cartList/reducers'
import { ProductListReducer } from './productList/reducers'
import { WishListReducer } from './wishList/reducers'
import { OrderReducer } from './orderList/reducer'
import { CreditCardReducer } from './creditCardList/reducer'
import { AddressReducer } from './addressList/reducer'
import { NavigationReducer } from './navigation/reducer'
//

// Middleware :: Redux Persist Config
const persistConfig = {
  key: 'uShop',
  storage: AsyncStorage,
  whitelist: [
    'bio',
    'wishList',
    'cartList',
    'creditCardList',
    'addressList',
    'orderList',
    'productList',
  ],
  blacklist: ['navigation'],
}

export function logCurrentStorage() {
  AsyncStorage.getAllKeys().then((keyArray) => {
    AsyncStorage.multiGet(keyArray).then((keyValArray) => {
      let myStorage: any = {}
      for (let keyVal of keyValArray) {
        // let persistConfigElement = persistConfig[keyVal];
        myStorage[keyVal[0]] = keyVal[1]
      }
      console.log(' CURRENT STORAGE::: ', myStorage)
    })
  })
}

logCurrentStorage()

const CombinedReducers = combineReducers({
  // user_details: rootReducer.AuthReducer,
  bio: AuthReducer,
  productList: ProductListReducer,
  cartList: CartListReducer,
  wishList: WishListReducer,
  orderList: OrderReducer,
  creditCardList: CreditCardReducer,
  addressList: AddressReducer,
  navigation: NavigationReducer,
  // cartList:
})
//
const persistedReducer = persistReducer(persistConfig, CombinedReducers)
//
export const store = createStore(persistedReducer, applyMiddleware(createLogger()))
//
export let persistor = persistStore(store)
