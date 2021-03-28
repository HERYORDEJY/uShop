import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { normalizer } from '../utils/fontSetup';

export default function HeroBanner({ styleNew }) {
  return <View style={{ ...styles.container, ...styleNew }}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    // height: animatedHH,
    // transform: [{ translateY: transAnimatedHH }],
    flex: 0,
    backgroundColor: 'white',
  },
});
