import React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Icon } from 'native-base';
import normzer from '../utils/normalizer';
import { blue } from '../styles/color';
import _Text from './Text';
import _ButtonLarge from './ButtonLarge';
import { RFValue } from 'react-native-responsive-fontsize';

const _ButtonAuth = ({
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
  //
  values,
  instructions,
  isSubmitting,
  indicatorColor,
  disabled,
  ...props
}) => {
  const MainBtn = () => (
    <>
      {leftIconName && (
        <Icon name={leftIconName} type={leftIconType} style={leftIconStyle} />
      )}
      <_Text
        text={text}
        color={textColor}
        styles={{ ...styles }}
        textStyle={textStyle}
        fontSize={fontSize}
        textColor={textColor}
        textStyled={textStyled}
      />
      {rightIconName && (
        <Icon
          name={rightIconName}
          type={rightIconType}
          style={rightIconStyle}
        />
      )}
    </>
  );
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...bodyStyle }}
      // onPress={() => {
      //   if (instructions) instructions(values);
      // }}
      onPress={() => onPress()}
      disabled={disabled || isSubmitting}
    >
      {isSubmitting ? (
        <ActivityIndicator color={indicatorColor} size={RFValue(20)} />
      ) : (
        <MainBtn />
      )}
    </TouchableOpacity>
  );
};

export default _ButtonAuth;

const styles = StyleSheet.create({
  container: {
    paddingVertical: RFValue(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  text: {
    fontSize: RFValue(15),
    color: blue,
  },
});
