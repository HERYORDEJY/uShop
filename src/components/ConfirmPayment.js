import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import _Text from './Text';
import { _lightGreen, blue } from '../styles/color';
import { RFValue } from 'react-native-responsive-fontsize';

const _ConfirmPayment = ({ toggleModal, toggleModal2 }) => {
  return (
    <View
      style={{
        marginHorizontal: RFValue(40),
        backgroundColor: '#aaa',
        padding: RFValue(30),
      }}
    >
      <View style={{ marginBottom: RFValue(20) }}>
        <_Text
          text={'Are you sure you want to pay for this?'}
          color={'#fff'}
          fontSize={15}
          textStyled={{ textAlign: 'center' }}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          onPress={() => toggleModal()}
          style={{
            backgroundColor: '#ddd',
            paddingHorizontal: RFValue(30),
            paddingVertical: RFValue(10),
          }}
        >
          <_Text text={'No'} fontSize={15} color={'#999'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#ddd',
            paddingHorizontal: RFValue(30),
            paddingVertical: RFValue(10),
          }}
          onPress={() => toggleModal2()}
        >
          <_Text text={'Yes'} fontSize={15} color={_lightGreen} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default _ConfirmPayment;

const styles = StyleSheet.create({});
