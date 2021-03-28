import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import _Text from './Text';
import { blue } from '../styles/color';
import normzer from '../utils/normalizer';
import { RFValue } from 'react-native-responsive-fontsize';

const _CreditCardInput = ({
  label,
  type,
  onFlipped,
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
      <TextInput
        {...rest}
        style={{
          backgroundColor: '#ddd',
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          // width: RFValue(300),
          fontSize: RFValue(15),
          marginVertical: RFValue(5),
          height: RFValue(40),
        }}
        onChangeText={(value) => onChangeText(type, value)}
        onFocus={() => onFlipped(type)}
        placeholder={placeholder ?? null}
        placeholderTextColor={placeholder && '#999'}
        maxLength={maxLength(type)}
        value={cardType}
      />
    </View>
  );
};

export default _CreditCardInput;

const styles = StyleSheet.create({});
