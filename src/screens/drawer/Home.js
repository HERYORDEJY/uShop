import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { blue } from '../../styles/color';
import NavBar from '../../components/NavBar';
import _HeaderScrollView from '../../components/HeaderScrollView';
import _SearchBtn from '../../components/SearchBtn';
import { productList } from '../../api/productList';
import { DrawerActions } from '@react-navigation/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { Container } from 'native-base';
import { StatusBar } from 'react-native';
import { _screenTheme } from '../../styles/themes';

const Home = ({ navigation, ...props }) => {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  const { route } = props;
  // const { backgroundColor } = route.params.sideBarProps;
  const [state, setState] = useState({
    openDrawer: false,
    openDrawerIcon: 'menu-fold',
  });

  console.warn('route');

  const backgroundColor = _screenTheme.Home.theme;

  return (
    <Container style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />

      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: backgroundColor + '50',
        }}
      />
      <_HeaderScrollView
        // snapToInterval={state.snapToInterval}
        // onScroll={onScroll}
        data={productList}
        backgroundColor={backgroundColor}
        // renderItem={_ProductItem}
      >
        <View
          style={{
            elevation: 1000,
            // top: 20
          }}
        >
          {/* <_ProductList data={productList} /> */}
        </View>
      </_HeaderScrollView>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          elevation: 20000,
          flex: 0,
          width: '100%',
        }}
      >
        <NavBar
          translucent={true}
          screenTitle='HOME'
          bellValue={'99+'}
          cartValue={9}
          navigation={navigation}
          drawerScreen={true}
          // backgroundColor={blue + '50'}
        />
      </View>
      <_SearchBtn backdropColor={backgroundColor} />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: blue + '99' },
  header: {
    marginTop: RFValue(60),
    position: 'absolute',
    paddingHorizontal: RFValue(20),
  },
});
