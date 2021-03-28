import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import * as pColor from 'react-native-paper/src/styles/colors';
import MyText from './Text';
import { normalizer } from '../utils/fontSetup';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { RFValue } from 'react-native-responsive-fontsize';

export default function _NavBar({
  rightMenu = true,
  leftIconName,
  leftIconType,
  leftIconStyle,
  leftIconColor = '#fff',
  rightIconColor = '#fff',
  rightIconStyle,
  screenTitle,
  bellValue,
  backgroundColor,
  subtitle,
  bodyStyles,
  showRight = true,
  openDrawer,
  menuIconName,
  drawerScreen,
  stackScreen,
  cartValue,
  translucent,
  settingScreen,
  ...props
}) {
  const navigation = useNavigation();
  const [data, setData] = useState({ mIcon: false });
  const menuIcon = () => {
    setData({ ...data, mIcon: !data.mIcon });
  };
  const state = useSelector((state) => state);

  // ==================== cart value ==================== //
  const { cartList } = state;
  let _cartValue = cartValue
    ? cartValue.toString()
    : Number(cartList.length) > 99
    ? `99+`
    : String(cartList.length);

  // ==================== notifications value ==================== //
  const { notification } = state;
  let _bellValue = bellValue
    ? bellValue.toString()
    : Number(notification.length) > 99
    ? `99+`
    : String(notification.length);

  // ==================== toggle Drawer ==================== //
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  // ==================== NavBar for Drawer Screens ==================== //
  function _renderNavBarType_1() {
    return (
      <View
        style={[
          styles._renderNavBarType_1,
          {
            backgroundColor: backgroundColor,
            paddingTop: translucent ? RFValue(20) : RFValue(0),
          },
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 0,
            marginLeft: 0,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.4}
            delayLongPress={100}
            // delayPressIn={2000}
            style={{
              paddingLeft: 0,
              marginLeft: 0,
            }}
            onPress={() => toggleDrawer()}
          >
            <Icon
              name={'menu-fold'}
              type={'antdesign'}
              color={'#fff'}
              size={RFValue(20)}
              style={styles.menuFoldIcon}
            />
          </TouchableOpacity>
          <View style={{}}>
            <MyText text={screenTitle} styles={styles.screenTitle} />
            {subtitle && (
              <MyText
                text={subtitle}
                fontSize={RFValue(10)}
                textStyle={'italic'}
                styles={{ paddingTop: RFValue(1) }}
              />
            )}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={styles.bellIcon}
            onPress={() => navigation.navigate('Notification')}
          >
            <Icon
              name={'bell'}
              type={'entypo'}
              color={'#fff'}
              size={RFValue(20)}
            />
            <Badge
              badgeStyle={[
                styles.badgeStyle,
                {
                  left: _bellValue.length < 2 ? RFValue(15) : RFValue(10),
                  width: _bellValue.length > 2 ? RFValue(25) : null,
                },
              ]}
              value={_bellValue}
              textStyle={{ fontSize: RFValue(10) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cartlIconContainer}
            onPress={() => navigation.navigate('Cart')}
          >
            <Icon
              name={'shopping-bag'}
              type={'entypo'}
              color={'#fff'}
              size={RFValue(20)}
            />
            <Badge
              badgeStyle={[
                styles.badgeStyle,
                {
                  left: _cartValue.length < 2 ? RFValue(15) : RFValue(10),
                  width: _cartValue.length > 2 ? RFValue(25) : null,
                },
              ]}
              value={_cartValue}
              textStyle={{ fontSize: RFValue(10) }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // ==================== NavBar for Stack Screens ==================== //
  function _renderNavBarType_2() {
    return (
      <View
        style={[
          styles._renderNavBarType_1,
          {
            backgroundColor: backgroundColor,
            paddingTop: RFValue(20),
          },
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 0,
            marginLeft: 0,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.4}
            delayLongPress={100}
            // delayPressIn={2000}
            style={{
              paddingLeft: 0,
              marginLeft: 0,
            }}
            onPress={() => navigation.canGoBack()}
          >
            <Icon
              name={'chevron-thin-left'}
              type={'entypo'}
              color={'#fff'}
              size={RFValue(20)}
              style={styles.menuFoldIcon}
            />
          </TouchableOpacity>
          <View style={{}}>
            <MyText text={screenTitle} styles={styles.screenTitle} />
            {subtitle && (
              <MyText
                text={subtitle}
                fontSize={RFValue(10)}
                textStyle={'italic'}
                styles={{ paddingTop: RFValue(1) }}
              />
            )}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {!settingScreen && (
            <>
              <TouchableOpacity
                style={styles.bellIcon}
                onPress={() => navigation.navigate('Notification')}
              >
                <Icon
                  name={'bell'}
                  type={'entypo'}
                  color={'#fff'}
                  size={RFValue(20)}
                />
                <Badge
                  badgeStyle={[
                    styles.badgeStyle,
                    {
                      left: _bellValue.length < 2 ? RFValue(15) : RFValue(10),
                      width: _bellValue.length > 2 ? RFValue(25) : null,
                    },
                  ]}
                  value={_bellValue}
                  textStyle={{ fontSize: RFValue(10) }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.cartlIconContainer, { paddingLeft: RFValue(5) }]}
                onPress={() => navigation.navigate('Cart')}
              >
                <Icon
                  name={'shopping-bag'}
                  type={'entypo'}
                  color={'#fff'}
                  size={RFValue(20)}
                />
                <Badge
                  badgeStyle={[
                    styles.badgeStyle,
                    {
                      left: _cartValue.length < 2 ? RFValue(15) : RFValue(10),
                      width: _cartValue.length > 2 ? RFValue(25) : null,
                    },
                  ]}
                  value={_cartValue}
                  textStyle={{ fontSize: RFValue(10) }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.4}
                delayLongPress={100}
                // delayPressIn={2000}
                style={{
                  paddingLeft: 0,
                  marginLeft: 0,
                }}
                onPress={() => toggleDrawer()}
              >
                <Icon
                  name={'menu-fold'}
                  type={'antdesign'}
                  color={'#fff'}
                  size={RFValue(20)}
                  style={[
                    // styles.menuFoldIcon,
                    {
                      paddingLeft: RFValue(10),
                      paddingRight: RFValue(0),
                      marginLeft: RFValue(15),
                    },
                  ]}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      {drawerScreen && _renderNavBarType_1()}
      {stackScreen && _renderNavBarType_2()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(20),
    backgroundColor: 'transparent',
    elevation: 1000,
  },
  _renderNavBarType_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  screenTitle: { fontSize: RFValue(20), textTransform: 'uppercase' },
  menuFoldIcon: {
    paddingLeft: 0,
    marginLeft: 0,
    marginRight: 15,
  },
  bellIcon: { paddingHorizontal: 10 },
  cartlIcon: { paddingHorizontal: 10 },
  cartlIconContainer: {
    paddingLeft: RFValue(10),
    paddingRight: RFValue(0),
    marginLeft: RFValue(20),
  },
  badgeStyle: {
    backgroundColor: pColor.lightGreen600,
    // backgroundColor: pColor.purple500,
    position: 'absolute',
    left: RFValue(15),
    top: RFValue(-25),
    borderWidth: 0,
    width: RFValue(30),
  },
});
