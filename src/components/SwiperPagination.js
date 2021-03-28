import React from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';
import { normalizer } from '../utils/fontSetup';

export default function SwiperPafination({
  swiperImage,
  swiperIndex,
  containerStyle,
  iconSize = 7,
}) {
  return (
    <View
      style={{
        ...styles.container,
        ...containerStyle,
      }}
    >
      {swiperImage.map((img, index) => (
        <Icon
          key={index}
          name={'circle'}
          type={'FontAwesome'}
          color={
            index === swiperIndex.index ? '#fff' : 'rgba(255, 255, 255, 0.4)'
          }
          size={normalizer(iconSize)}
          style={{
            ...styles.icon,
            marginHorizontal: 5,
            marginRight: index + 1 === swiperImage.length ? 0 : 5,
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 30,
  },
  icon: {},
});
