import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { blue } from '../styles/color';
import _Text from './Text';
import { Icon } from 'native-base';
import normzer from '../utils/normalizer';
import { useNavigation } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerContentView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as COLOR from '../styles/color';
import { RFValue } from 'react-native-responsive-fontsize';
import { _screenTheme } from '../styles/themes';

const _DrawerContent = ({
  backgroundColor = blue,
  // activeScreen = 'Home',
  navigation,
  ...props
}) => {
  const [bgc, setBgc] = useState(blue);
  const [activeScreen, setActiveScreen] = useState('Home');

  const _onPress = (screenName, bgc) => {
    setActiveScreen(screenName);
    navigation.navigate(`${screenName}`);
  };

  return (
    <>
      {/* <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} /> */}
      {/* <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://aboutreact.com/')}
        /> */}
      <View style={styles.container}>
        <View
          style={{ flex: 1, backgroundColor: _screenTheme[activeScreen].theme }}
        >
          <Text>`${props.route}`</Text>

          <View style={[styles.home, { paddingVertical: RFValue(10) }]}>
            <TouchableOpacity
              style={{
                ...styles.drawerItemHomeBody,
                backgroundColor:
                  activeScreen === 'Home'
                    ? '#eee'
                    : _screenTheme[activeScreen].theme,
              }}
              onPress={() => _onPress('Home', blue)}
            >
              <_Text
                text={'HOME'}
                color={
                  activeScreen === 'Home'
                    ? _screenTheme[activeScreen].theme
                    : '#fff'
                }
                styles={{
                  ...styles.drawerItemName,
                }}
              />
              <Icon
                name={'home'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color:
                    activeScreen === 'Home'
                      ? _screenTheme[activeScreen].theme
                      : '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.top}>
            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'Men'
                    ? '#eee'
                    : _screenTheme[activeScreen].theme,
              }}
              onPress={() => _onPress('Men', COLOR.black)}
            >
              <_Text
                text={'MEN'}
                color={
                  activeScreen === 'Men'
                    ? _screenTheme[activeScreen].theme
                    : '#fff'
                }
                styles={styles.drawerItemName}
              />
              <Icon
                name={'man'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color:
                    activeScreen === 'Men'
                      ? _screenTheme[activeScreen].theme
                      : '#fff',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'Women'
                    ? '#eee'
                    : _screenTheme[activeScreen].theme,
              }}
              onPress={() => _onPress('Women', COLOR.lightBlue300)}
            >
              <_Text
                text={'WOMEN'}
                color={
                  activeScreen === 'Women'
                    ? _screenTheme[activeScreen].theme
                    : '#fff'
                }
                styles={styles.drawerItemName}
              />
              <Icon
                name={'woman'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color:
                    activeScreen === 'Women'
                      ? _screenTheme[activeScreen].theme
                      : '#fff',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'Kids'
                    ? '#eee'
                    : _screenTheme[activeScreen].theme,
              }}
              onPress={() => _onPress('Kids', COLOR.orange800)}
            >
              <_Text
                text={'KIDS'}
                color={
                  activeScreen === 'Kids'
                    ? _screenTheme[activeScreen].theme
                    : '#fff'
                }
                styles={styles.drawerItemName}
              />
              <Icon
                name={'plus'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color:
                    activeScreen === 'Kids'
                      ? _screenTheme[activeScreen].theme
                      : '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'Profile'
                    ? '#eee'
                    : _screenTheme[activeScreen].theme,
              }}
              onPress={() => _onPress('Profile', COLOR.blueGrey500)}
            >
              <_Text
                text={'PROFILE'}
                color={
                  activeScreen === 'Profile'
                    ? _screenTheme[activeScreen].theme
                    : '#fff'
                }
                styles={styles.drawerItemName}
              />
              <Icon
                name={'user'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color:
                    activeScreen === 'Profile'
                      ? _screenTheme[activeScreen].theme
                      : '#fff',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'OfferZone'
                    ? '#eee'
                    : _screenTheme[activeScreen].theme,
              }}
              onPress={() => _onPress('OfferZone', COLOR.deepPurple200)}
            >
              <_Text
                // text={'GIFT CARDS'}
                text={'OFFER ZONE'}
                color={
                  activeScreen === 'OfferZone'
                    ? _screenTheme[activeScreen].theme
                    : '#fff'
                }
                styles={styles.drawerItemName}
                fontSize={15}
              />
              <Icon
                name={'gift'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color:
                    activeScreen === 'OfferZone'
                      ? _screenTheme[activeScreen].theme
                      : '#fff',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => _onPress('Orders', COLOR.teal500)}
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'Orders'
                    ? '#eee'
                    : _screenTheme[activeScreen].theme,
              }}
            >
              <_Text
                text={'ORDERS'}
                color={
                  activeScreen === 'Orders'
                    ? _screenTheme[activeScreen].theme
                    : '#fff'
                }
                styles={styles.drawerItemName}
                fontSize={15}
              />
              <Icon
                name={'truck'}
                type={'Feather'}
                style={{
                  ...styles.drawerItemIcon,
                  color:
                    activeScreen === 'Orders'
                      ? _screenTheme[activeScreen].theme
                      : '#fff',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => _onPress('More', COLOR.brown500)}
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'More'
                    ? '#eee'
                    : _screenTheme[activeScreen].theme,
              }}
            >
              <_Text
                text={'MORE'}
                color={
                  activeScreen === 'More'
                    ? _screenTheme[activeScreen].theme
                    : '#fff'
                }
                styles={styles.drawerItemName}
                fontSize={15}
              />
              <Icon
                name={'plus'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color:
                    activeScreen === 'More'
                      ? _screenTheme[activeScreen].theme
                      : '#fff',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'ContactUs'
                    ? '#eee'
                    : _screenTheme[activeScreen].theme,
              }}
              onPress={() => _onPress('ContactUs', COLOR.amber800)}
            >
              <_Text
                text={'CONTACT US'}
                color={
                  activeScreen === 'ContactUs'
                    ? _screenTheme[activeScreen].theme
                    : '#fff'
                }
                styles={styles.drawerItemName}
                fontSize={15}
              />
              <Icon
                name={'mail'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color:
                    activeScreen === 'ContactUs'
                      ? _screenTheme[activeScreen].theme
                      : '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.drawerItemBody}
              onPress={() => navigation.navigate('SignIn')}
            >
              <_Text
                text={'SIGN OUT'}
                color={'#fff'}
                styles={styles.drawerItemName}
                fontSize={15}
              />
              <Icon
                name={'logout'}
                type={'AntDesign'}
                style={styles.drawerItemIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </DrawerContentScrollView> */}
    </>
  );
};

export default _DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    elevation: 2000,
    width: '100%',
  },
  home: {
    paddingTop: RFValue(40),
    // backgroundColor: blue,
    // flex: 1,
    // paddingVertical: 10,
    paddingHorizontal: RFValue(20),

    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingVertical: RFValue(0),
  },
  top: {
    // backgroundColor: blue,
    // flex: 1,
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(20),
    paddingLeft: RFValue(20),
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  bottom: {
    // backgroundColor: blue,
    // flex: 1,
    paddingVertical: RFValue(10),
    // paddingLeft: RFValue(20),

    paddingHorizontal: RFValue(20),
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  drawerItemHomeBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(20),
    marginTop: RFValue(5),
  },
  drawerItemBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(20),
    marginBottom: RFValue(5),
  },
  drawerItemName: { fontSize: RFValue(15) },
  drawerItemIcon: { color: '#fff', fontSize: RFValue(15), alignSelf: 'center' },
  footer: {
    // backgroundColor: blue,
    flex: 1,
    paddingVertical: RFValue(10),
    paddingLeft: RFValue(20),
    paddingHorizontal: RFValue(20),
    justifyContent: 'flex-end',
  },
});
