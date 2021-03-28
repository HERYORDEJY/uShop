import React, { Children } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { normalizer } from '../utils/fontSetup';
import { RFValue } from 'react-native-responsive-fontsize';

export default function _Text({
  textStyle = 'regular',
  styles,
  stylesArray,
  text,
  fontSize = 20,
  color = '#fff',
  textStyled,
  ...rest
}) {
  const newStyles = { ...styleJoiner(styles) };
  return (
    <Text
      {...rest}
      style={[
        { ...style[textStyle] },
        { fontSize: RFValue(fontSize) },
        { color: color },
        styles,
        textStyled,
      ]}
    >
      {text}
    </Text>
  );
}
export const styleJoiner = (...args) => StyleSheet.flatten(args);
const style = StyleSheet.create({
  regular: {
    fontFamily: 'Lato',
    fontSize: RFValue(20),
    color: '#fff',
  },
  bold: {
    fontFamily: 'Lato-Bold',
    fontSize: RFValue(20),
    color: '#fff',
  },
  italic: {
    fontFamily: 'Lato-Italic',
    fontSize: RFValue(20),
    color: '#fff',
  },
  thin: {
    fontFamily: 'Lato-Thin',
    fontSize: RFValue(20),
    color: '#fff',
  },
});
