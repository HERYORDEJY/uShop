import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import normzer from '../utils/normalizer';
import _Text from './Text';
import { red600 } from '../styles/color';
import { RFValue } from 'react-native-responsive-fontsize';

const _Input = ({
  _styles,
  text,
  showPlaceholder = true,
  placeholder = 'Placeholder',
  placeholderTextColor = 'rgba(255, 255, 255, 0.3)',
  inputStyle,
  inputContainerStyle,
  keyboardType,
  touched,
  error,
  onChangeText,
  onBlur,
  value,
  ...props
}) => {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <View style={{ ...styles.container, ..._styles }}>
      <_Text {...props} text={text} styles={styles.errorText} />
      <Input
        {...props}
        placeholder={showPlaceholder ? placeholder : null}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        caretHidden={false}
        inputStyle={[styles.inputStyle, { ...inputStyle }]}
        inputContainerStyle={[
          styles.inputContainerStyle,
          {
            ...inputContainerStyle,
          },
        ]}
        value={value}
      />
    </View>
  );
};

export default _Input;

const styles = StyleSheet.create({
  container: {},
  input: { flex: 1 },
  errorText: { fontSize: RFValue(15), color: red600, marginLeft: RFValue(10) },
  inputStyle: {
    color: '#fff',
    fontSize: RFValue(15),
    fontFamily: 'Lato',
    margin: 0,
    padding: 0,
  },
  inputContainerStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0.5,
    borderColor: 'white',
    margin: 0,
    padding: 0,
  },
});
