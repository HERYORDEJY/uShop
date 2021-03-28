import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native';
import { Content, Container } from 'native-base';
import { Icon } from 'react-native-elements';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { menSwiperImage } from '../../api/images';
import NavBar from '../../components/NavBar';
import { menWearCategory } from '../../api/wearsList';
import _CategoryHeader from '../../components/CategoryHeader';
import normzer from '../../utils/normalizer';
import _Text from '../../components/Text';
import { DrawerActions } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';
import _OrdersItem from '../../components/OrdersItem';
import { _screenTheme } from '../../styles/themes';
const Orders = ({ navigation, ...props }) => {
  const [state, setState] = useState({
    openDrawer: false,
    openDrawerIcon: 'menu-unfold',
  });
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  const { route } = props;
  const bgc = _screenTheme.Orders.theme;

  return (
    <Container>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <View
        style={{
          // position: 'absolute',
          // top: 0,
          // left: 0,
          // right: 0,
          elevation: 20000,
          flex: 0,
          width: '100%',
          backgroundColor: bgc,
        }}
      >
        <NavBar
          translucent={true}
          screenTitle={'ORDERS'}
          bellValue={11}
          cartValue={9}
          navigation={navigation}
          drawerScreen={true}
        />
      </View>
      <Content style={{ flex: 1, backgroundColor: '#eee' }}>
        <_OrdersItem />
        <_OrdersItem />
        <_OrdersItem />
      </Content>

      {/*</_Drawer>*/}
    </Container>
  );
};

export default Orders;

const styles = StyleSheet.create({
  wrapper: { position: 'relative', height: 350, elevation: 2 },
  slide1: {
    flex: 1,
    width: responsiveScreenWidth(100),
    height: 300,
  },
});
