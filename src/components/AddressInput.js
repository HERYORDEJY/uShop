import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import _Text from './Text';
import { blue } from '../styles/color';
import normzer from '../utils/normalizer';
import { RFValue } from 'react-native-responsive-fontsize';
import { Input } from 'native-base';

const _AddressInput = ({
  label,
  type,
  onChangeText,
  placeholder,
  cardType,
  ...rest
}) => {
  const maxLength = (type_) => {
    if (type_ === 'number') {
      return 16;
    } else if (type_ === 'ccv') {
      return 3;
    } else if (type_ === 'expiration') {
      return 4;
    } else if (type_ === 'name') {
      return 21;
    }
    return null;
  };
  return (
    <View style={{ marginVertical: RFValue(10) }}>
      <_Text text={label} color={blue} fontSize={15} />
      <Input
        {...rest}
        style={{
          flex: 1,
          backgroundColor: '#eee',
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          // width: RFValue(250),
          fontSize: RFValue(22),
          marginVertical: 3,
          height: RFValue(45),
        }}
        onChangeText={(value) => onChangeText(type, value)}
        placeholder={placeholder ?? null}
        placeholderTextColor={placeholder && '#999'}
        maxLength={maxLength(type)}
        value={cardType}
      />
    </View>
  );
};

export default _AddressInput;

const styles = StyleSheet.create({});
