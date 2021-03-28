import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Icon } from 'native-base';
import _Text from './Text';

const _CategoryItem = ({
  title = 'Text',
  subtitle = false,
  titleStyle,
  subtitleStyle,
  key,
  containerStyle,
  iconNameLeft = false,
  iconTypeLeft,
  iconStyleLeft,
  iconNameRight = false,
  iconTypeRight,
  iconStyleRight,
}) => {
  return (
    <TouchableOpacity
      key={key}
      style={{ ...styles.container, ...containerStyle }}
    >
      {iconNameLeft && (
        <Icon name={iconNameLeft} type={iconTypeLeft} style={iconStyleLeft} />
      )}
      <View>
        <_Text styles={{ ...titleStyle }} text={title} />
        {subtitle && <_Text styles={subtitleStyle} text={subtitle} />}
      </View>
      {iconNameLeft && (
        <Icon name={iconNameLeft} type={iconTypeLeft} style={iconStyleLeft} />
      )}
    </TouchableOpacity>
  );
};

export default _CategoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    elevation: 1,
    marginVertical: 3,
  },
});
