import React, { Component, useState, useEffect } from 'react';
import Drawer from 'react-native-drawer';
import _DrawerContent from './DrawerContent';

export default function _Drawer(props) {
  const [state, setState] = useState({ openDrawer: false });

  const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    main: { paddingLeft: props.side === 'right' ? 0 : 3, paddingRight: 0 },
  };
  const {
    children,
    side = 'left',
    onClosed,
    onOpened,
    // content,
    // closeControlPanel,
    // openControlPanel,
    // openDrawer,
    // ref,
    activeScreen,
  } = props;

  useEffect(() => {
    setState({ ...state, openDrawer: false });
  }, []);
  return (
    <Drawer
      // open={state.openDrawer || props.openDrawer}
      open={false}
      // onOpen={onOpened}
      // onClose={onClosed}
      // onDragStart={() => console.log('the drag has started...')}
      // open={!false}
      // ref={(ref) => (this._drawer = ref)}
      type={'static'}
      content={
        <_DrawerContent
          backgroundColor={props.backgroundColor}
          activeScreen={activeScreen}
        />
      }
      tapToClose={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      // tweenHandler={(ratio) => ({
      //   main: { opacity: (2 - ratio) / 2 },
      // })}
      tweenHandler={(ratio) => {
        const r0 = -ratio / 6;
        const r1 = 1 - ratio / 6;
        const t = [r1, r0, 0, 0, -r0, r1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1];
        return {
          main: {
            style: {
              transformMatrix: t,
              opacity: 1 - ratio / 2,
            },
          },
        };
      }}
      side={side}
      acceptPan={true}
      acceptPanOnDrawer={true}
      panThreshold={0.1}
      panOpenMask={0.2}
      captureGestures={true}
      negotiatePan={true}
    >
      {/*<View style={{ backgroundColor: 'yellow' }}>*/}
      {/*  <_Text text={'HOME'} fontSize={40} color={'red'} />*/}
      {/*  <TouchableOpacity*/}
      {/*    style={{ padding: 20, margin: 20 }}*/}
      {/*    onPress={() => this.openControlPanel()}*/}
      {/*  >*/}
      {/*    <_Text text={'OPEN'} fontSize={30} color={'blue'} />*/}
      {/*  </TouchableOpacity>*/}
      {/*  <TouchableOpacity*/}
      {/*    style={{ padding: 20, margin: 20 }}*/}
      {/*    onPress={() => this.closeControlPanel()}*/}
      {/*  >*/}
      {/*    <_Text text={'CLOSE'} fontSize={30} color={'blue'} />*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
      {children}
    </Drawer>
  );
}
export const closeControlPanel = () => {
  this._drawer.close();
};
export const openControlPanel = () => {
  this._drawer.open();
};
