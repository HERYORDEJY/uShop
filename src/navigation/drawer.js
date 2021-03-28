import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/drawer/Home';
import Men from '../screens/drawer/Men';
import Women from '../screens/drawer/Women';
import _SideBar from '../components/SideBar';
import { Icon } from 'native-base';
import { useSelector } from 'react-redux';
import OfferZone from '../screens/drawer/OfferZone';
import OrderDetail from '../screens/stack/OrderDetail';
import Profile from '../screens/drawer/Profile';
import ContactUs from '../screens/drawer/ContactUs';
import Kids from '../screens/drawer/Kids';
import normzer from '../utils/normalizer';
import * as COLOR from '../styles/color';
import {
  HomeStackNavigation,
  MenStackNavigation,
  MoreStackNavigation,
  OrdersStackNavigation,
  WomenStackNavigation,
} from './stacks';
import SignIn from '../screens/authentication/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/authentication/SignUp';
import Orders from '../screens/drawer/Orders';
import { RFValue } from 'react-native-responsive-fontsize';
import _DrawerContent from '../components/DrawerContent';
//
const DrawerNavigator = createDrawerNavigator();
//
const _ItemIcon = (name, type, focused, activeTintColor) => {
  return (
    <Icon
      name={name === 'plus' && focused ? 'arrowright' : name}
      type={type}
      style={{
        fontSize: RFValue(20),
        alignSelf: 'center',
        color: focused ? activeTintColor : '#fff',
        position: 'absolute',
        right: 0,
        paddingRight: RFValue(20),
      }}
    />
  );
};
//

const DrawerNavigation = () => {
  const state = useSelector((state) => {
    return state;
  });
  const { navigation, bio } = state;
  const StackNavigator = createStackNavigator();
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  // if (bio.isSignedIn !== true) {
  if (1 + 1 === 3) {
    return (
      <StackNavigator.Navigator initialRouteName={'SignIn'}>
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
  }
  return (
    <DrawerNavigator.Navigator
      statusBarAnimation={'slide'}
      initialRouteName={'Home'}
      drawerContent={(props) => {
        return <_DrawerContent {...props} />;
      }}
      // drawerType={'slide'}
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      overlayColor="transparent"
      drawerStyle={{
        width: RFValue(250),
        borderRightWidth: 2,
        borderRightColor: 'transparent',
      }}
      drawerContentOptions={{
        labelStyle: { fontSize: RFValue(20), paddingVertical: RFValue(5) },
        activeTintColor: COLOR.blue,
        inactiveTintColor: '#eee',
        activeBackgroundColor: '#eee',
        itemStyle: { flexDirection: 'column-reverse' },
      }}
      // drawerPosition={navigation.drawerPosition}
      // drawerStyle={{ backgroundColor: 'red' }}
    >
      <DrawerNavigator.Screen
        name={'Home'}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => {
            return _ItemIcon('home', 'AntDesign', focused, COLOR.blue);
          },
          unmountOnBlur: true,
        }}
        component={HomeStackNavigation}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.blue } }}
      />
      {/*//*/}
      <DrawerNavigator.Screen
        name={'Men'}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => {
            return _ItemIcon('plus', 'AntDesign', focused, COLOR.black);
          },
        }}
        component={MenStackNavigation}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.black } }}
      />
      {/*//*/}
      <DrawerNavigator.Screen
        name={'Women'}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => {
            return _ItemIcon('plus', 'AntDesign', focused, COLOR.lightBlue300);
          },
        }}
        component={WomenStackNavigation}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.lightBlue300 },
        }}
      />
      {/*//*/}
      <DrawerNavigator.Screen
        name={'Kids'}
        component={Kids}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => {
            return _ItemIcon('plus', 'AntDesign', focused, COLOR.orange800);
          },
        }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.orange800 } }}
      />

      {/*//*/}
      <DrawerNavigator.Screen
        name={'Profile'}
        component={Profile}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => {
            return _ItemIcon('user', 'AntDesign', focused, COLOR.blueGrey500);
          },
        }}
        initialParams={{ sideBarProps: { backgroundColor: COLOR.blueGrey500 } }}
      />
      {/*//*/}
      <DrawerNavigator.Screen
        name={'OfferZone'}
        component={OfferZone}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => {
            return _ItemIcon('gift', 'AntDesign', focused, COLOR.deepPurple200);
          },
        }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.deepPurple200 },
        }}
      />
      {/*//*/}
      <DrawerNavigator.Screen
        name={'Orders'}
        component={OrdersStackNavigation}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => {
            return _ItemIcon('truck', 'Feather', focused, COLOR.teal500);
          },
        }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.teal500 },
        }}
      />
      {/*//*/}
      <DrawerNavigator.Screen
        name={'More'}
        component={MoreStackNavigation}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => {
            return _ItemIcon('plus', 'AntDesign', focused, COLOR.brown500);
          },
        }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.brown500 },
          subStackScreen: ['Cart', 'Track Order', 'Notification', 'Wishlist'],
        }}
      />

      {/*//*/}

      <DrawerNavigator.Screen
        name={'ContactUs'}
        component={ContactUs}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => {
            return _ItemIcon('mail', 'AntDesign', focused, COLOR.amber800);
          },
        }}
        initialParams={{
          sideBarProps: { backgroundColor: COLOR.amber800 },
        }}
      />

      {/*//*/}
      {/*//*/}
    </DrawerNavigator.Navigator>
  );
};

export default DrawerNavigation;
