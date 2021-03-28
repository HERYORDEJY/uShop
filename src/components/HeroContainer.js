import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export default function HeroContainer({ children, styleNew }) {
  return <View style={{ ...styles.container, ...styleNew }}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    elevation: -200,
    flex: 0,
    width: '100%',
  },
});
