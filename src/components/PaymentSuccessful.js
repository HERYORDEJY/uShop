import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import _Text from './Text';
import { _lightGreen, blue } from '../styles/color';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
//
const _PaymentSuccessful = ({ toggleModal3, placeOrder }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginHorizontal: RFValue(40),
        backgroundColor: '#aaa',
        padding: RFValue(30),
      }}
    >
      <View style={{ marginBottom: RFValue(25) }}>
        <_Text
          text={'Yess!! Payment successful and the order has been made'}
          color={'#fff'}
          fontSize={15}
          textStyled={{ textAlign: 'center' }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            placeOrder();
            toggleModal3();

            // navigation.navigate('Home');
          }}
          style={{
            backgroundColor: '#ddd',
            paddingHorizontal: RFValue(30),
            paddingVertical: RFValue(15),
          }}
        >
          <_Text text={'Continue'} fontSize={15} color={_lightGreen} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default _PaymentSuccessful;

const styles = StyleSheet.create({});
