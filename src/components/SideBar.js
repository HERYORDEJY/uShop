import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { blue } from '../styles/color';
import _Text from './Text';
import { Icon } from 'native-base';
import normzer from '../utils/normalizer';
import {
  DrawerContentScrollView,
  DrawerContentView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useSelector, useDispatch } from 'react-redux';
import { Divider } from 'react-native-elements';
import { useNavigationState } from '@react-navigation/native';
import { SignOutAction } from '../redux/bio/actions';
import { RFValue } from 'react-native-responsive-fontsize';
// import { DrawerItem } from 'react-native-paper';
// import { DrawerItem } from 'react-native-elements';

const _SideBar = ({ ...props }) => {
  // const navigation = useNavigation();
  const { navigation } = props;
  const [state, setState] = useState({ activeScreen: 'Home' });
  const { activeScreen } = state;
  const activeScreenHandler = (screen) => {
    navigation.navigate(screen);
    setState({ ...state, activeScreen: screen });
  };
  const stated = useSelector((state) => state);
  const {
    state: { index, routes },
  } = props;
  const { backgroundColor } = routes[index].params.sideBarProps;
  const dispatch = useDispatch();
  const onSignOut = () => {
    // navigation.navigate('SignUp');
    dispatch(SignOutAction);
  };
  return (
    <>
      <StatusBar backgroundColor={backgroundColor} barStyle={'light-content'} />
      <DrawerContentScrollView
        {...props}
        scrollEnabled={true}
        contentContainerStyle={{
          ...styles.container,
          backgroundColor: backgroundColor,
        }}
      >
        {/* <View style={{ flex: 1, backgroundColor: backgroundColor }}> */}
        <View style={{}}>
          <DrawerItemList {...props} activeTintColor={backgroundColor} />
        </View>
        <Divider
          style={{
            borderWidth: 1,
            borderColor: '#eee',
            marginTop: RFValue(20),
          }}
        />
        <View style={styles.footer}>
          <TouchableOpacity style={styles.drawerItemBody} onPress={onSignOut}>
            <_Text
              text={'Sign/// Out'}
              color={'#fff'}
              style={styles.drawerItemName}
            />
            <Icon
              name={'logout'}
              type={'AntDesign'}
              style={styles.drawerItemIcon}
            />
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </DrawerContentScrollView>
    </>
  );
};

export default _SideBar;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    // elevation: 2000,
    // width: '100%',
  },
  home: {
    // backgroundColor: blue,
    // flex: 1,
    // paddingVertical: 10,
    paddingHorizontal: RFValue(20),
    paddingLeft: RFValue(20),

    borderBottomWidth: 0.4,
    borderBottomColor: '#fff',
  },
  top: {
    // backgroundColor: blue,
    // flex: 1,
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(20),
    paddingLeft: RFValue(20),

    borderBottomWidth: 0.4,
    borderBottomColor: '#fff',
  },
  bottom: {
    // backgroundColor: blue,
    // flex: 1,
    paddingVertical: RFValue(10),
    paddingLeft: RFValue(20),

    paddingHorizontal: RFValue(20),
    borderBottomWidth: 0.4,
    borderBottomColor: '#fff',
  },
  drawerItemHomeBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    marginTop: RFValue(30),
  },
  drawerItemBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
  },
  drawerItemName: {},
  drawerItemIcon: { color: '#fff', fontSize: RFValue(15), alignSelf: 'center' },
  footer: {
    // backgroundColor: blue,
    // flex: 1,
    // position: 'absolute',
    bottom: 0,
    paddingVertical: RFValue(10),
    paddingLeft: RFValue(20),
    paddingRight: RFValue(20),
    width: '100%',
    // paddingHorizontal: 25,
  },
});
