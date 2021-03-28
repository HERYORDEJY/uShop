import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import normzer from '../utils/normalizer';
import { blue } from '../styles/color';
import _Text from './Text';
import { RFValue } from 'react-native-responsive-fontsize';

const _ButtonLarge = ({
  bodyStyle,
  text = '!!Text Here',
  textStyle,
  onPress,
  leftIconName = false,
  leftIconType,
  leftIconStyle,
  fontSize,
  textColor,
  rightIconName = false,
  rightIconType,
  rightIconStyle,
  textStyled,
  disabled,
  ...rest
}) => {
  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      style={{ ...styles.container, ...bodyStyle }}
      onPress={() => onPress()}
    >
      {leftIconName && (
        <Icon name={leftIconName} type={leftIconType} style={leftIconStyle} />
      )}
      <_Text
        text={text}
        color={textColor}
        styles={{ ...styles.text }}
        textStyle={textStyle}
        fontSize={fontSize}
        textColor={textColor}
        textStyled={{ ...textStyled, textAlign: 'center' }}
      />
      {rightIconName && (
        <Icon
          name={rightIconName}
          type={rightIconType}
          style={rightIconStyle}
        />
      )}
    </TouchableOpacity>
  );
};

export default _ButtonLarge;

const styles = StyleSheet.create({
  container: {
    paddingVertical: RFValue(20),
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
  },

  text: {
    fontSize: RFValue(15),
    color: '#fff',
  },
});
