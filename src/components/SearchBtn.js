import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { _lightGreen, _purple } from '../styles/color';
import normzer from '../utils/normalizer';
import Filter from './Filter';
import ModalMenu from './ModalMenu';
import _Search from './Search';

import { RFValue } from 'react-native-responsive-fontsize';

export default function _SearchBtn({ backdropColor, ...props }) {
  const [state, setState] = useState({
    isModalVisible: false,
    tabBarIndex: 0,
  });

  function toggleModal() {
    setState({ ...state, isModalVisible: !state.isModalVisible });
  }

  return (
    <>
      <View
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          right: -10,
          top: RFValue(100),
          height: RFValue(80),
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // paddingVertical: 20,
            // paddingHorizontal: 30,
            backgroundColor: _lightGreen + '87',
            borderRadius: 300,
            width: RFValue(50),
            height: RFValue(50),
          }}
          onPress={() => toggleModal()}
        >
          <Icon
            name='search'
            type='MaterialIcons'
            style={{
              fontSize: RFValue(30),
              color: '#fff',
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
      <ModalMenu
        visible={state.isModalVisible}
        toggleModal={toggleModal}
        component={<_Search toggleModal={toggleModal} />}
        backdropColor={backdropColor}
        backdropOpacity={0.7}
        animationIn={'slideInLeft'}
        animationOut={'slideOutRight'}
      />
    </>
  );
}
