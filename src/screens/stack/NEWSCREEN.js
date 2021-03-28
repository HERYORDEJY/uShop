import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { blue } from '../../styles/color';
import NavBar from '../../components/NavBar';
import _HeaderScrollView from '../../components/HeaderScrollView';
import _TopSelling from '../../components/TopSelling';
import _Drawer from '../../components/Drawer';

const Home = () => {
  const [state, setState] = useState({
    openDrawer: false,
  });
  const closeControlPanel = () => {
    this._drawer.close();
  };
  const openControlPanel = () => {
    this._drawer.open();
  };
  const openDrawer = () => {
    setState({ ...state, openDrawer: true });
  };
  return (
    <_Drawer openDrawer={state.openDrawer}>
      <View style={styles.container}>
        <StatusBar backgroundColor={blue} barStyle={'light-content'} />
        <_HeaderScrollView
        // snapToInterval={state.snapToInterval}
        // onScroll={onScroll}
        >
          <View
            style={{
              elevation: 1000,
              // top: 20
            }}
          >
            <_TopSelling />
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
            leftIconName="menu"
            leftIconType="entypo"
            screenTitle="HOME"
            openDrawer={openDrawer}
            // backgroundColor={blue + '50'}
          />
        </View>
      </View>
    </_Drawer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: blue + '99' },
  header: { marginTop: 60, position: 'absolute', paddingHorizontal: 20 },
});
