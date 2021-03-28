import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/drawer/Home';
import Men from '../screens/drawer/Men';
import SignIn from '../screens/authentication/SignIn';
import SignUp from '../screens/authentication/SignUp';
import Women from '../screens/drawer/Women';
import Topwear from '../screens/stack/Topwear';
import OfferZone from '../screens/drawer/OfferZone';
import ProductDescription from '../screens/stack/ProductDescription';
import Cart from '../screens/stack/Cart';
import Address from '../screens/stack/Address';
import Payment from '../screens/stack/Payment';
import AddCreditCard from '../screens/stack/AddCreditCard';
import OrderDetail from '../screens/stack/OrderDetail';
import Track from '../screens/stack/Track';
import Profile from '../screens/drawer/Profile';
import Notification from '../screens/stack/Notification';
import WhishList from '../screens/stack/WishList';
import ContactUs from '../screens/drawer/ContactUs';
import { useSelector } from 'react-redux';
import AddAddress from '../screens/stack/AddAddress';
import * as COLOR from '../styles/color';
import More from '../screens/drawer/More';
import CreditCards from '../screens/stack/CreditCards';
import Addresses from '../screens/stack/Addresses';
import EditAddress from '../screens/stack/EditAddress';
import EditCreditCard from '../screens/stack/EditCreditCard';
import Filter from '../screens/stack/Filter';
import Orders from '../screens/drawer/Orders';
//
const StackNavigator = createStackNavigator();
const StackNavigation = ({ openDrawer }) => {
  const stated = useSelector((state) => {
    return state;
  });
  //
  const { bio } = stated;
  return (
    <StackNavigator.Navigator
      // initialRouteName={bio.isSignedIn === true ? 'Home' : 'SignIn'}
      initialRouteName={'Home'}
    >
      {/*//*/}
      <StackNavigator.Screen name={'Home'} options={{ headerShown: false }}>
        {(props) => {
          return <Home {...props} openDrawer={openDrawer} />;
        }}
      </StackNavigator.Screen>
      {/*//*/}
      <StackNavigator.Screen name={'Men'} options={{ headerShown: false }}>
        {(props) => {
          return <Men {...props} openDrawer={openDrawer} />;
        }}
      </StackNavigator.Screen>
      {/*//*/}
      <StackNavigator.Screen name={'Women'} options={{ headerShown: false }}>
        {(props) => {
          return <Women {...props} openDrawer={openDrawer} />;
        }}
      </StackNavigator.Screen>
      {/*//*/}
      <StackNavigator.Screen name={'Orders'} options={{ headerShown: false }}>
        {(props) => {
          return <Orders {...props} openDrawer={openDrawer} />;
        }}
      </StackNavigator.Screen>
      {/*//*/}
      <StackNavigator.Screen
        name={'Topwear'}
        component={Topwear}
        options={{ headerShown: false }}
      />
      {/*//*/}
      <StackNavigator.Screen
        name={'OfferZone'}
        component={OfferZone}
        options={{ headerShown: false }}
      />
      {/*//*/}
      <StackNavigator.Screen
        name={'ProductDescription'}
        component={ProductDescription}
        options={{ headerShown: false }}
      />
      {/*//*/}

      {/*//*/}

      {/*//*/}

      {/*//*/}

      {/*//*/}

      {/*//*/}

      {/*//*/}

      {/*//*/}
      <StackNavigator.Screen
        name={'ContactUs'}
        component={ContactUs}
        options={{ headerShown: false }}
      />
      {/*//*/}

      {/*//*/}
    </StackNavigator.Navigator>
  );
};
export default StackNavigation;

export const MoreStackNavigation = () => {
  return (
    <StackNavigator.Navigator initialRouteName={'More'}>
      <StackNavigator.Screen
        name={'More'}
        component={More}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.brown500 },
          subStackScreen: [
            { name: 'Cart', slug: 'Cart' },
            { name: 'Track Order', slug: 'Track' },
            { name: 'Notifications', slug: 'Notification' },
            { name: 'Wishlist', slug: 'WishList' },
            { name: 'Address List', slug: 'Addresses' },
            { name: 'Credit Card List', slug: 'CreditCards' },
          ],
        }}
      />
      <StackNavigator.Screen
        name={'Cart'}
        component={Cart}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.green500 } }}
      />
      <StackNavigator.Screen
        name={'ProductDescription'}
        component={ProductDescription}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.green500 } }}
      />
      <StackNavigator.Screen
        name={'Track'}
        component={Track}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.red300 } }}
      />
      <StackNavigator.Screen
        name={'Notification'}
        component={Notification}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.indigo500 } }}
      />
      <StackNavigator.Screen
        name={'WishList'}
        component={WhishList}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightBlue700 },
        }}
      />
      <StackNavigator.Screen
        name={'Address'}
        component={Address}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightBlue700 },
        }}
      />
      <StackNavigator.Screen
        name={'Addresses'}
        component={Addresses}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightBlue700 },
        }}
      />
      <StackNavigator.Screen
        name={'AddAddress'}
        component={AddAddress}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightGreen700 },
        }}
      />
      <StackNavigator.Screen
        name={'EditAddress'}
        component={EditAddress}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightGreen700 },
        }}
      />
      <StackNavigator.Screen
        name={'Payment'}
        component={Payment}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.indigo800 },
        }}
      />
      <StackNavigator.Screen
        name={'AddCreditCard'}
        component={AddCreditCard}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.indigo800 },
        }}
      />
      <StackNavigator.Screen
        name={'EditCreditCard'}
        component={EditCreditCard}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.indigo800 },
        }}
      />
      <StackNavigator.Screen
        name={'CreditCards'}
        component={CreditCards}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.pink900 },
        }}
      />
    </StackNavigator.Navigator>
  );
};

export const HomeStackNavigation = () => {
  return (
    <StackNavigator.Navigator initialRouteName={'Home'}>
      <StackNavigator.Screen
        name={'Home'}
        component={Home}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.blue } }}
      />
      <StackNavigator.Screen
        name={'ProductDescription'}
        component={ProductDescription}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.blue } }}
      />
      <StackNavigator.Screen
        name={'Cart'}
        component={Cart}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.green500 } }}
      />
      <StackNavigator.Screen
        name={'Notification'}
        component={Notification}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.indigo500 } }}
      />
      <StackNavigator.Screen
        name={'Address'}
        component={Address}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightBlue700 },
        }}
      />
      <StackNavigator.Screen
        name={'Addresses'}
        component={Addresses}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightBlue700 },
        }}
      />
      <StackNavigator.Screen
        name={'AddAddress'}
        component={AddAddress}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightGreen700 },
        }}
      />
      <StackNavigator.Screen
        name={'EditAddress'}
        component={EditAddress}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightGreen700 },
        }}
      />
      <StackNavigator.Screen
        name={'Payment'}
        component={Payment}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.indigo800 },
        }}
      />
      <StackNavigator.Screen
        name={'AddCreditCard'}
        component={AddCreditCard}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.indigo800 },
        }}
      />
      <StackNavigator.Screen
        name={'EditCreditCard'}
        component={EditCreditCard}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.indigo800 },
        }}
      />
      <StackNavigator.Screen
        name={'CreditCards'}
        component={CreditCards}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.pink900 },
        }}
      />
      <StackNavigator.Screen
        name={'SignIn'}
        component={SignIn}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name={'SignUp'}
        component={SignUp}
        options={{ headerShown: false }}
      />
    </StackNavigator.Navigator>
  );
};

export const MenStackNavigation = () => {
  return (
    <StackNavigator.Navigator initialRouteName={'Home'}>
      <StackNavigator.Screen
        name={'Men'}
        component={Men}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.black } }}
      />
      <StackNavigator.Screen
        name={'TopWear'}
        component={Topwear}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.black } }}
      />
      <StackNavigator.Screen
        name={'ProductDescription'}
        component={ProductDescription}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.black } }}
      />
      <StackNavigator.Screen
        name={'Filter'}
        component={Filter}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.black } }}
      />
      <StackNavigator.Screen
        name={'Cart'}
        component={Cart}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.green500 } }}
      />
      <StackNavigator.Screen
        name={'Notification'}
        component={Notification}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.indigo500 } }}
      />
    </StackNavigator.Navigator>
  );
};

export const WomenStackNavigation = () => {
  return (
    <StackNavigator.Navigator initialRouteName={'Home'}>
      <StackNavigator.Screen
        name={'Women'}
        component={Women}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightBlue300 },
        }}
      />
      <StackNavigator.Screen
        name={'Topwear'}
        component={Topwear}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightBlue300 },
        }}
      />
      <StackNavigator.Screen
        name={'ProductDescription'}
        component={ProductDescription}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightBlue300 },
        }}
      />
      <StackNavigator.Screen
        name={'Cart'}
        component={Cart}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.green500 } }}
      />
      <StackNavigator.Screen
        name={'Notification'}
        component={Notification}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.indigo500 } }}
      />
    </StackNavigator.Navigator>
  );
};

export const OrdersStackNavigation = () => {
  return (
    <StackNavigator.Navigator initialRouteName={'Orders'}>
      <StackNavigator.Screen
        name={'Orders'}
        component={Orders}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.teal500 },
        }}
      />
      <StackNavigator.Screen
        name={'OrderDetail'}
        component={OrderDetail}
        options={{ headerShown: false }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.teal500 },
        }}
      />
      <StackNavigator.Screen
        name={'Cart'}
        component={Cart}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.green500 } }}
      />
      <StackNavigator.Screen
        name={'Notification'}
        component={Notification}
        options={{ headerShown: false }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.indigo500 } }}
      />
    </StackNavigator.Navigator>
  );
};
