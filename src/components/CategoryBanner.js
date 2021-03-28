import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MyText from './Text';
import * as pColor from 'react-native-paper/src/styles/colors';
import { _lightGreen } from '../styles/color';
import { useNavigation } from '@react-navigation/native';

import { RFValue } from 'react-native-responsive-fontsize';

export default function CategoryBanner(props) {
  const navigation = useNavigation();
  const { styleNew } = props;
  return (
    <View
      style={{
        backgroundColor: '#fff',
        top: RFValue(20),
        borderBottomWidth: 4,
        borderColor: _lightGreen,
      }}
    >
      <View style={{ ...styles.container, styleNew }}>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('Men')}
        >
          <Image
            style={styles.thumb}
            resizeMode={'cover'}
            source={require('../assets/images/product-11.jpg')}
          />
          <MyText text={'MEN'} styles={styles.title} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('Women')}
        >
          <Image
            style={styles.thumb}
            resizeMode={'cover'}
            source={require('../assets/images/product-10.jpg')}
          />
          <MyText text={'WOMEN'} styles={styles.title} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('Kids')}
        >
          <Image
            style={styles.thumb}
            resizeMode={'cover'}
            source={require('../assets/images/product-05.jpg')}
          />
          <MyText text={'KIDS'} styles={styles.title} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('Others')}
        >
          <Image
            style={styles.thumb}
            resizeMode={'cover'}
            source={require('../assets/images/product-06.jpg')}
          />
          <MyText text={'OTHERS'} styles={styles.title} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: pColor.lightGreen300,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    padding: RFValue(10),
    width: '100%',
  },
  title: {
    marginTop: RFValue(7),
    fontSize: RFValue(10),
    color: '#aaaaa9',
  },
  thumb: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(60),
    overflow: 'hidden',
  },
});
